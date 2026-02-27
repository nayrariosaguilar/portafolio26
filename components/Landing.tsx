"use client";

import { SiGithub, SiGitlab, SiAnthropic, SiJavascript, SiKotlin, SiReact, SiTailwindcss, SiPostgresql, SiSpringboot, SiDocker } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { ArticlesHero } from "./ArticlesHero";
import { HiClipboardDocument, HiCheck, HiEnvelope, HiCalendar } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

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

const projects = [
  {
    title: "GIA Robotics Dashboard",
    description: "Panel de control en tiempo real para la gestion de flotas de robots industriales.",
    image: "/globe.svg",
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
    image: "/window.svg",
    link: "https://github.com/Nayyy",
    technologies: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
];

export function Landing() {
  const t = useTranslations("Landing");
  const [copied, setCopied] = useState(false);
  const email = "hola@nayri.dev";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <main id="inicio" className="flex-1">
        <section className="section-container py-6 md:py-8 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
                {t("hero.subtitle")}
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
                {t("hero.title")}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/agendar-videollamada"
                  className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90 sm:text-base"
                >
                  <HiCalendar className="text-lg" />
                  {t("hero.ctaSchedule")}
                </Link>
                <a
                  href="https://www.linkedin.com/in/nayrariosaguilar"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-semibold transition hover:bg-foreground/5 sm:text-base"
                >
                  {t("hero.ctaLinkedIn")}
                </a>
              </div>
            </div>
            <ArticlesHero className="w-full" />
          </div>
        </section>

        <section className="section-container py-12 border-y border-foreground/5 bg-foreground/[0.01]">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">{t("summary.title")}</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t("summary.content")}
            </p>
          </div>
        </section>

        <section id="proyectos" className="section-container py-12">
          <header className="mb-10 flex flex-col gap-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">{t("projects.title")}</h2>
            <p className="text-foreground/70">
              {t("projects.subtitle")}
            </p>
          </header>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="section-container pb-16">
          <header className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">{t("certs.title")}</h2>
            <p className="text-sm text-foreground/70">
              {t("certs.subtitle")}
            </p>
          </header>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {unifiedCertifications.map((cert) => (
              <div
                key={cert.title}
                className="group flex flex-col gap-3 glass-card p-5 text-sm text-foreground transition-all hover:border-foreground/20 hover:shadow-md"
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
                  {cert.date && <p className="text-[10px] text-foreground/50">{t("certs.issued", {date: cert.date})}</p>}
                  {cert.id && <p className="text-[10px] text-foreground/40 mt-1">ID: {cert.id}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="section-container py-20">
          <div className="relative overflow-hidden rounded-[3rem] border border-foreground/10 bg-foreground/[0.02] px-6 py-16 text-center shadow-2xl backdrop-blur-3xl sm:px-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-foreground/[0.05] blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-foreground/[0.05] blur-3xl" />
            
            <div className="relative z-10 mx-auto max-w-2xl space-y-12">
              <header className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{t("contact.title")}</h2>
                <p className="text-lg text-foreground/70">
                  {t("contact.subtitle")}
                </p>
              </header>

              <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/agendar-videollamada"
                    className="flex items-center gap-3 rounded-2xl bg-[#1e6ad5] px-8 py-4 font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    <HiCalendar className="text-xl" />
                    {t("contact.ctaSchedule")}
                  </Link>
                  <button
                    onClick={copyToClipboard}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-foreground/10 bg-background/50 px-8 py-4 font-semibold text-foreground transition-all hover:scale-[1.02]"
                  >
                    <HiEnvelope className="text-xl" />
                    <span>{email}</span>
                    <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-foreground/10">
                      {copied ? <HiCheck className="text-lg" /> : <HiClipboardDocument className="text-lg" />}
                    </div>
                    {copied && (
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground text-sm font-bold text-background animate-in fade-in zoom-in duration-300">
                        {t("contact.copied")}
                      </div>
                    )}
                  </button>
                </div>

                <div className="flex gap-6">
                  <a
                    href="https://www.linkedin.com/in/nayrariosaguilar"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/60 transition hover:text-foreground hover:scale-110"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Nayyy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/60 transition hover:text-foreground hover:scale-110"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Badge Widget */}
      <Link
        href="/agendar-videollamada"
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 rounded-full bg-[#1e6ad5] px-6 py-3 font-semibold text-white shadow-2xl transition-all hover:scale-105 active:scale-95 sm:px-8 sm:py-4"
      >
        <HiCalendar className="text-xl" />
        <span className="hidden sm:inline">{t("floatingCta")}</span>
        <span className="sm:hidden">{t("floatingCtaShort")}</span>
      </Link>
    </div>
  );
}
