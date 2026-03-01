import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const supabase = getSupabase();
    const { question, locale } = await request.json();

    if (!question || !locale) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const contentColumn = locale === 'es' ? 'content_es' : 'content_en';

    let results;

    try {
      // Attempt embedding-based search via RPC (requires pgvector + ai extension)
      const { data, error } = await supabase.rpc('match_knowledge', {
        query_text: question,
        match_limit: 3,
      });

      if (error) throw error;
      results = data;
    } catch {
      // Fallback: full-text search using ILIKE
      const searchTerms = question
        .toLowerCase()
        .split(/\s+/)
        .filter((w: string) => w.length > 2);

      const orConditions = searchTerms
        .map((term: string) => `question.ilike.%${term}%,content_es.ilike.%${term}%,content_en.ilike.%${term}%,category.ilike.%${term}%`)
        .join(',');

      const { data, error } = await supabase
        .from('knowledge_base')
        .select('*')
        .or(orConditions)
        .limit(3);

      if (error) {
        return NextResponse.json({ error: 'Search failed' }, { status: 500 });
      }
      results = data;
    }

    if (!results || results.length === 0) {
      return NextResponse.json({ answer: null });
    }

    const best = results[0];
    return NextResponse.json({
      answer: best[contentColumn],
      category: best.category,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
