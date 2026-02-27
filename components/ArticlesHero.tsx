"use client";

import { useState, useEffect } from "react";
import { HiArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const articles = [
  {
    id: 1,
    category: "Certificación",
    title: "AWS Certified Cloud Practitioner: Dominando la nube de Amazon",
    description: "Recientemente certificada en los fundamentos de AWS, validando conocimientos técnicos en infraestructura global y servicios cloud.",
    date: "Feb 2026",
    link: "#",
  },
  {
    id: 2,
    category: "Proyecto",
    title: "Clawbot: Mi centro de productividad inteligente",
    description: "Desarrollo de una herramienta propia que sincroniza Google Calendar con timers, Pomodoro y seguimiento de horas de estudio.",
    date: "Feb 2026",
    link: "#",
  },
  {
    id: 3,
    category: "Futuro",
    title: "Tinyclawn: El próximo nivel de agentes de código",
    description: "Próxima fase del proyecto integrando un equipo de agentes (Kimi 2.5, Claude, Qwen) para automatización extrema.",
    date: "En progreso",
    link: "#",
  },
];

export function ArticlesHero({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className={`relative overflow-hidden glass-card p-6 md:p-8 shadow-inner bg-foreground/[0.03] ${className}`}>
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-foreground/[0.02] blur-3xl" />
      
      <div className="relative z-10">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">Artículos y Logros</h2>
            <p className="text-xs text-foreground/60">Últimos descubrimientos en el camino</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-background/50 text-foreground transition hover:bg-foreground hover:text-background"
              aria-label="Anterior"
            >
              <HiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-background/50 text-foreground transition hover:bg-foreground hover:text-background"
              aria-label="Siguiente"
            >
              <HiChevronRight className="text-lg" />
            </button>
          </div>
        </header>

        <div className="relative h-[200px] md:h-[160px]">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="hero-badge text-[10px] px-2 py-0.5">
                    {article.category}
                  </span>
                  <span className="text-[10px] text-foreground/40">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold sm:text-xl lg:max-w-3xl leading-tight">
                  {article.title}
                </h3>
                <p className="max-w-2xl text-sm text-foreground/70 sm:text-base line-clamp-2">
                  {article.description}
                </p>
                <div className="mt-1">
                  <a
                    href={article.link}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:opacity-70"
                  >
                    <span>Leer más</span>
                    <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-1.5">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`carousel-dot h-1 ${
                index === currentIndex ? "w-6 bg-foreground" : "w-1.5 bg-foreground/20"
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
