import ScheduleForm from '@/components/ScheduleForm';
import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Schedule'});
 
  return {
    title: t('metadataTitle'),
    description: t('metadataDescription')
  };
}

export default async function AgendarPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = useTranslations('Schedule');
  
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {t('description')}
        </p>
      </div>

      <ScheduleForm />

      <div className="mt-12 text-center text-sm text-zinc-500">
        <p>✓ {t('duration')}</p>
        <p>✓ {t('meet')}</p>
        <p>✓ {t('confirmation')}</p>
      </div>
    </div>
  );
}
