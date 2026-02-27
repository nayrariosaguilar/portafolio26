export default function StructuredData({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nayra Rios",
    "url": "https://portafolio-ten-chi-60.vercel.app",
    "jobTitle": "Full Stack Developer & DevOps Engineer",
    "knowsAbout": [
      "Software Development",
      "Kotlin",
      "React",
      "Next.js",
      "DevOps",
      "CI/CD",
      "Cybersecurity",
      "Cloud Computing",
      "TypeScript",
      "Docker"
    ],
    "sameAs": [
      "https://github.com/Nayyy",
      "https://www.linkedin.com/in/nayrariosaguilar"
    ],
    "description": locale === 'es' 
      ? "Desarrolladora Full Stack con experiencia en automatización de procesos y ciberseguridad."
      : "Full Stack Developer with experience in process automation and cybersecurity."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
