"use client";

import type { IconType } from "react-icons";
import { SiGithub, SiGitlab, SiAnthropic, SiJavascript } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const experiences = [
  {
    company: "GIA ROBOTICS",
    role: "Software Developer",
    dates: "jun. 2025 - actualidad · 9 meses",
    type: "Jornada parcial",
    summary:
      "Trabajo continuo en CI/CD con Kotlin, integrando microservicios y optimizando pipelines.",
  },
];

const education = [
  {
    school: "Linkia FP",
    degree: "Higher Technician in Network and operating systems specialized in Cybersecurity",
    dates: "sept. 2025 – jun. 2026",
  },
  {
    school: "Institut Provençana",
    degree: "Higher Technician in Multiplatform Application Development",
    dates: "sept. 2023 – jun. 2025",
    note: "Nota: 8",
  },
];

const unifiedCertifications = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "feb. 2026",
    id: "cfd69vj67khp",
    icon: SiAnthropic,
    color: "#D97757",
  },
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    date: "ene. 2025",
    icon: FaMicrosoft,
    color: "#00a4ef",
  },
  {
    title: "JavaScript FullStack Junior Developer",
    issuer: "Canvas Credentials (Badgr)",
    date: "sept. 2024",
    id: "66dae015858f9e2b2c44791c",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "jul. 2024",
    icon: FaMicrosoft,
    color: "#00a4ef",
  },
  {
    title: "GitHub Open Source",
    issuer: "Colaboraciones y Repos",
    icon: SiGithub,
  },
  {
    title: "GitLab CI/CD",
    issuer: "Pipelines Kotlin",
    icon: SiGitlab,
    color: "#FC6D26",
  },
];

import { ProjectCard } from "./ProjectCard";
import { SiKotlin, SiReact, SiTailwindcss, SiPostgresql, SiSpringboot, SiDocker } from "react-icons/si";

const projects = [
  {
    title: "GIA Robotics Dashboard",
    description: "Panel de control en tiempo real para la gestion de flotas de robots industriales.",
    image: "/globe.svg", // Reemplazar con imagen real
    link: "https://github.com/Nayyy",
    technologies: [
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Security Scanner CLI",
    description: "Herramienta de automatizacion para el escaneo de vulnerabilidades en pipelines CI/CD.",
    image: "/window.svg", // Reemplazar con imagen real
    link: "https://github.com/Nayyy",
    technologies: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
];

import { HiClipboardDocument, HiCheck, HiEnvelope } from "react-icons/hi2";
import { useState } from "react";

export function Landing() {
  const [copied, setCopied] = useState(false);
  const email = "hola@nayri.dev";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <main id="inicio" className="flex-1">
      {/* ... (Hero section existing code) */}
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-16">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
            Nayra Rios · Developer
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Impulsando la innovación con código seguro, accesible y multiplataforma.
          </h1>
          <p className="max-w-prose text-base text-foreground/75 sm:text-lg">
            Soy Nayra, una desarrolladora apasionada por Java y Kotlin basada en Barcelona. Actualmente, 
            compagino mi rol en GIA ROBOTICS con mi formación en ciberseguridad, buscando siempre el 
            equilibrio entre funcionalidad y robustez en cada proyecto que construyo.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90 sm:text-base"
            >
              Hablemos
            </a>
            <a
              href="https://www.linkedin.com/in/nayrariosaguilar"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-semibold transition hover:bg-foreground/5 sm:text-base"
            >
              Conectar en LinkedIn
            </a>
          </div>
          <p className="text-sm text-foreground/70">
            Enfocada en el nexo entre el desarrollo multiplataforma y la seguridad. 
            Formando parte de una red de más de 500 profesionales con quienes comparto la 
            visión de una web más segura para todos.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border border-foreground/10 bg-background/80 p-6 shadow-lg backdrop-blur-sm">
          <div>
            <p className="text-xs uppercase text-foreground/60">Contacta</p>
            <p className="text-lg font-medium text-foreground">hola@nayri.dev</p>
            <p className="text-xs text-foreground/70">LinkedIn publico</p>
          </div>
          <div className="grid gap-3 text-sm text-foreground/80">
            <p className="text-base font-semibold text-foreground">Compartir nuevas ideas</p>
            <p>
              Discutamos automatizacion, seguridad en la nube o construccion de pipelines con
              Kotlin y React.
            </p>
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col gap-1">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Proyectos Destacados</h2>
          <p className="text-foreground/70">
            Una seleccion de mis trabajos mas recientes en desarrollo y seguridad.
          </p>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="experiencia" className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-1 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Experiencia</h2>
          <p className="text-sm text-foreground/70">
            Mi trayectoria profesional en el desarrollo de software.
          </p>
        </header>
        <div className="mt-6 flex justify-center">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-foreground/10 bg-background/70 p-5 shadow-sm backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{exp.company}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">{exp.role}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-foreground/60">{exp.dates}</p>
                {exp.type && <p className="text-[10px] font-medium text-foreground/40">{exp.type}</p>}
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">{exp.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="educacion" className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Educación</h2>
          <p className="text-sm text-foreground/70">
            Formación académica técnica en desarrollo y sistemas.
          </p>
        </header>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="flex flex-col gap-2 rounded-2xl border border-foreground/10 bg-background/70 p-5 shadow-sm backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{edu.school}</p>
                <p className="text-xs text-foreground/60">{edu.dates}</p>
              </div>
              <p className="text-sm text-foreground/80 leading-snug">{edu.degree}</p>
              {edu.note && <p className="text-xs font-medium text-foreground/60">{edu.note}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Certificaciones y Herramientas</h2>
          <p className="text-sm text-foreground/70">
            Credenciales y plataformas que respaldan mi enfoque en seguridad, colaboracion y calidad.
          </p>
        </header>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {unifiedCertifications.map((cert) => (
            <div
              key={cert.title}
              className="group flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-background/60 p-5 text-sm text-foreground shadow-sm transition-all hover:border-foreground/20 hover:shadow-md backdrop-blur"
            >
              <div className="flex items-center justify-between">
                {cert.icon && (
                  <cert.icon 
                    className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity" 
                    style={{ color: cert.color }} 
                  />
                )}
              </div>
              <div>
                <p className="font-semibold leading-tight">{cert.title}</p>
                <p className="mt-1 text-xs text-foreground/60">{cert.issuer}</p>
                {cert.date && <p className="text-[10px] text-foreground/50">Expedicion: {cert.date}</p>}
                {cert.id && <p className="text-[10px] text-foreground/40 mt-1">ID: {cert.id}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contacto" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-foreground/10 bg-foreground/[0.02] px-6 py-16 text-center shadow-2xl backdrop-blur-3xl sm:px-12">
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-foreground/[0.05] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-foreground/[0.05] blur-3xl" />
          
          <div className="relative z-10 mx-auto max-w-2xl space-y-8">
            <header className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">¿Tienes una idea en mente?</h2>
              <p className="text-lg text-foreground/70">
                Siempre estoy abierta a nuevas colaboraciones, proyectos innovadores 
                o simplemente a charlar sobre tecnología y seguridad.
              </p>
            </header>

            <div className="flex flex-col items-center justify-center gap-6">
              <button
                onClick={copyToClipboard}
                className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-foreground px-8 py-4 font-semibold text-background transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <HiEnvelope className="text-xl" />
                <span>{email}</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/20 transition-colors group-hover:bg-background/30">
                  {copied ? <HiCheck className="text-lg" /> : <HiClipboardDocument className="text-lg" />}
                </div>
                {copied && (
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground text-sm font-bold animate-in fade-in zoom-in duration-300">
                    ¡Copiado al portapapeles!
                  </div>
                )}
              </button>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/nayrariosaguilar"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-foreground/10 bg-background/50 px-6 py-3 text-sm font-medium transition hover:bg-foreground hover:text-background"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Nayyy"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-foreground/10 bg-background/50 px-6 py-3 text-sm font-medium transition hover:bg-foreground hover:text-background"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
