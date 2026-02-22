const stats = [
  { label: "Vistas de perfil (ultimos 7 dias)", value: "87" },
  { label: "Impresiones de publicaciones recientes", value: "4" },
  { label: "Apariciones en busquedas", value: "36" },
];

const coreSkills = [
  "Java",
  "Kotlin",
  "React.js",
  "SQL",
  "MongoDB",
  "CI/CD",
  "Linux",
  "GitHub/GitLab",
  "Frontend accesible",
];

const experiences = [
  {
    company: "GIA ROBOTICS",
    role: "Software Developer",
    dates: "jun. 2025 - actual · 9 meses · remoto",
    summary:
      "Trabajo continuo en CI/CD con Kotlin, integrando microservicios y optimizando pipelines.",
  },
  {
    company: "Capgemini",
    role: "Java Developer (practicas)",
    dates: "feb. 2025 - jun. 2025 · hibrido",
    summary:
      "Desarrollo con Java y React.js para soluciones empresariales, con foco en calidad y testing.",
  },
];

const certifications = [
  { title: "Claude Code in Action", issuer: "Anthropic · feb. 2026" },
  { title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals", issuer: "Microsoft · ene. 2025" },
];

export function Landing() {
  return (
    <main id="inicio" className="flex-1">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-16">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
            Nayra Rios · Developer
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Developer | Java &amp; Kotlin · Full stack con enfoque mobile y web responsive
          </h1>
          <p className="max-w-prose text-base text-foreground/75 sm:text-lg">
            Basada en Barcelona, Cataluna (Espana). Actualmente trabajo a tiempo parcial en GIA
            ROBOTICS, y estoy en busca de nuevos retos en desarrollo de aplicaciones seguras y
            accesibles.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90 sm:text-base"
            >
              Contactarme
            </a>
            <a
              href="https://www.linkedin.com/in/nayrariosaguilar"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold transition hover:bg-black/5 sm:text-base"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-foreground/70">
            Interesada en roles de estudiante de ciberseguridad, desarrollo Java y desarrollo de
            aplicaciones multiplataforma. Mas de 500 contactos en mi red profesional.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
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

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/10 bg-black/5 px-5 py-4 text-sm sm:text-base"
            >
              <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Stack y herramientas</h2>
        <p className="mt-2 text-sm text-foreground/70">
          Tecnologias y plataformas que uso dia a dia, con foco en calidad y colaboracion.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {coreSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-black/20 px-4 py-2 text-xs font-medium uppercase tracking-wide text-foreground/70 sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Experiencia destacada</h2>
          <p className="text-sm text-foreground/70">
            Proyectos y responsabilidades recientes donde he liderado codigo, pruebas y despliegues.
          </p>
        </header>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{exp.company}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">{exp.role}</p>
              </div>
              <p className="text-xs text-foreground/60">{exp.dates}</p>
              <p className="text-sm text-foreground/75">{exp.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Certificaciones recientes</h2>
          <p className="text-sm text-foreground/70">
            Credenciales que respaldan mi enfoque en seguridad, colaboracion y calidad.
          </p>
        </header>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-2xl border border-black/10 bg-white/60 p-4 text-sm text-foreground shadow-sm backdrop-blur"
            >
              <p className="font-semibold">{cert.title}</p>
              <p className="text-foreground/70">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
