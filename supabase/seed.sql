-- ============================================
-- Supabase setup for Nayra's portfolio RAG
-- ============================================

-- 1. Enable extensions
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- 2. Create knowledge_base table
CREATE TABLE IF NOT EXISTS knowledge_base (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  question TEXT NOT NULL,
  content_es TEXT NOT NULL,
  content_en TEXT NOT NULL,
  embedding VECTOR(384)
);

-- 3. Create indexes
CREATE INDEX IF NOT EXISTS idx_knowledge_category ON knowledge_base(category);
CREATE INDEX IF NOT EXISTS idx_knowledge_question_trgm ON knowledge_base USING gin(question gin_trgm_ops);

-- 4. Create similarity search function
-- Uses ai.embed() if available, falls back to trigram similarity
CREATE OR REPLACE FUNCTION match_knowledge(query_text TEXT, match_limit INT DEFAULT 3)
RETURNS TABLE(id UUID, category TEXT, question TEXT, content_es TEXT, content_en TEXT, similarity FLOAT)
LANGUAGE plpgsql AS $$
BEGIN
  -- Try embedding-based search (requires Supabase AI extension)
  BEGIN
    RETURN QUERY
    SELECT
      kb.id, kb.category, kb.question, kb.content_es, kb.content_en,
      1 - (kb.embedding <=> ai.embed('gte-small', query_text)::vector) AS similarity
    FROM knowledge_base kb
    WHERE kb.embedding IS NOT NULL
    ORDER BY kb.embedding <=> ai.embed('gte-small', query_text)::vector
    LIMIT match_limit;
    RETURN;
  EXCEPTION WHEN OTHERS THEN
    -- Fallback to trigram text similarity
    RETURN QUERY
    SELECT
      kb.id, kb.category, kb.question, kb.content_es, kb.content_en,
      greatest(
        similarity(kb.question, query_text),
        similarity(kb.content_es, query_text),
        similarity(kb.content_en, query_text)
      )::FLOAT AS similarity
    FROM knowledge_base kb
    WHERE kb.question % query_text
       OR kb.content_es ILIKE '%' || query_text || '%'
       OR kb.content_en ILIKE '%' || query_text || '%'
    ORDER BY greatest(
      similarity(kb.question, query_text),
      similarity(kb.content_es, query_text),
      similarity(kb.content_en, query_text)
    ) DESC
    LIMIT match_limit;
  END;
END;
$$;

-- 5. Seed data about Nayra
INSERT INTO knowledge_base (category, question, content_es, content_en) VALUES

('education', 'What did you study?',
 'Estudio Técnico Superior en Administración de Sistemas Informáticos en Red, especializado en Ciberseguridad en Linkia FP (2025-2026). También soy Técnica Superior en Desarrollo de Aplicaciones Multiplataforma por el Institut Provençana (2023-2025), con nota media de 8.',
 'I am studying a Higher Technician degree in Networking & Cybersecurity at Linkia FP (2025-2026). I also hold a Higher Technician degree in Multiplatform Application Development from Institut Provençana (2023-2025), with a grade of 8.'),

('skills', 'What technologies do you know?',
 'Mis tecnologías principales son: Kotlin, Spring Boot, React, Next.js, TypeScript, Docker, AWS, PostgreSQL, Tailwind CSS, Node.js. Tengo experiencia tanto en desarrollo Full Stack como en ingeniería DevOps, con énfasis en DevSecOps.',
 'My main technologies are: Kotlin, Spring Boot, React, Next.js, TypeScript, Docker, AWS, PostgreSQL, Tailwind CSS, Node.js. I have experience in both Full Stack development and DevOps engineering, with emphasis on DevSecOps.'),

('languages', 'What languages do you speak?',
 'Hablo español e inglés.',
 'I speak Spanish and English.'),

('availability', 'Are you available for work?',
 'Estoy abierta a nuevos desafíos y oportunidades. Actualmente trabajo en GIA ROBOTICS como desarrolladora de software a jornada parcial, así que tengo disponibilidad para proyectos adicionales.',
 'I am open to new challenges and opportunities. I am currently working at GIA ROBOTICS as a part-time software developer, so I have availability for additional projects.'),

('certifications', 'What certifications do you have?',
 'Mis certificaciones incluyen: AWS Certified Cloud Practitioner (feb. 2026), Claude Code in Action de Anthropic (feb. 2026), Microsoft SC-900: Security, Compliance, and Identity Fundamentals (ene. 2025), JavaScript FullStack Junior Developer (sept. 2024), y Microsoft AZ-900: Azure Fundamentals (jul. 2024).',
 'My certifications include: AWS Certified Cloud Practitioner (Feb 2026), Claude Code in Action from Anthropic (Feb 2026), Microsoft SC-900: Security, Compliance, and Identity Fundamentals (Jan 2025), JavaScript FullStack Junior Developer (Sep 2024), and Microsoft AZ-900: Azure Fundamentals (Jul 2024).'),

('contact', 'How can I contact you?',
 'Puedes contactarme en hola@nayri.dev, o a través de LinkedIn: linkedin.com/in/nayrariosaguilar, o GitHub: github.com/Nayyy. También puedes usar el asistente virtual para agendar una videollamada.',
 'You can reach me at hola@nayri.dev, or via LinkedIn: linkedin.com/in/nayrariosaguilar, or GitHub: github.com/Nayyy. You can also use the virtual assistant to schedule a video call.'),

('challenges', 'What kind of challenges interest you?',
 'Me interesan desafíos relacionados con arquitectura de microservicios, seguridad en el ciclo de vida del desarrollo (DevSecOps), automatización de despliegues en la nube, y desarrollo de aplicaciones escalables con Kotlin y React.',
 'I am interested in challenges related to microservices architecture, security in the development lifecycle (DevSecOps), cloud deployment automation, and scalable application development with Kotlin and React.'),

('experience', 'What is your work experience?',
 'Trabajo como desarrolladora de software en GIA ROBOTICS desde junio de 2025, donde trabajo en CI/CD con Kotlin, integrando microservicios y optimizando pipelines. Mi experiencia abarca desde la arquitectura de microservicios hasta la automatización de despliegues en la nube.',
 'I have been working as a software developer at GIA ROBOTICS since June 2025, where I work on CI/CD with Kotlin, integrating microservices and optimizing pipelines. My experience ranges from microservices architecture to cloud deployment automation.'),

('projects', 'What projects have you worked on?',
 'Mis proyectos destacados incluyen: Clawbot Productivity Suite (sistema de productividad con Google Calendar, pomodoro y timers), GIA Robotics Dashboard (panel de control para gestión de flotas de robots industriales), y Security Scanner CLI (herramienta de automatización para escaneo de vulnerabilidades en pipelines CI/CD).',
 'My featured projects include: Clawbot Productivity Suite (productivity system with Google Calendar, pomodoro and timers), GIA Robotics Dashboard (control panel for industrial robot fleet management), and Security Scanner CLI (automation tool for vulnerability scanning in CI/CD pipelines).');
