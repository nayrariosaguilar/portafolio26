"use client";

import { useState, useEffect } from "react";
import { HiArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const articles = [
  {
    id: 1,
    category: "Descubrimiento",
    title: "Explorando la potencia de Kotlin Multiplatform en entornos industriales",
    description: "Cómo la unificación de código entre Android y Desktop está transformando la gestión de flotas en GIA Robotics.",
    date: "Feb 2026",
    link: "#",
  },
  {
    id: 2,
    category: "Logro",
    title: "Certificación Microsoft Security Fundamentals: Un paso más en ciberseguridad",
    description: "Reforzando los cimientos de seguridad para construir aplicaciones más robustas y protegidas contra amenazas modernas.",
    date: "Ene 2026",
    link: "#",
  },
  {
    id: 3,
    category: "Logro",
    title: "Automatización total: CI/CD con Kotlin y GitLab",
    description: "Reducción del 40% en los tiempos de despliegue mediante la optimización de pipelines y pruebas automatizadas.",
    date: "Dic 2025",
    link: "#",
  },
];

export function ArticlesHero() {
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
    <section className="section-container py-8">
      <div className="relative overflow-hidden glass-card p-8 md:p-12 shadow-inner bg-foreground/[0.03]">
        {/* Background Decorative Element */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-foreground/[0.02] blur-3xl" />
        
        <div className="relative z-10">
          <header className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Artículos y Logros</h2>
              <p className="text-sm text-foreground/60">Últimos descubrimientos en el camino</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-background/50 text-foreground transition hover:bg-foreground hover:text-background"
                aria-label="Anterior"
              >
                <HiChevronLeft className="text-xl" />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-background/50 text-foreground transition hover:bg-foreground hover:text-background"
                aria-label="Siguiente"
              >
                <HiChevronRight className="text-xl" />
              </button>
            </div>
          </header>

          <div className="relative h-[250px] md:h-[200px]">
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
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="hero-badge">
                      {article.category}
                    </span>
                    <span className="text-xs text-foreground/40">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold sm:text-2xl md:text-3xl lg:max-w-3xl">
                    {article.title}
                  </h3>
                  <p className="max-w-2xl text-base text-foreground/70 sm:text-lg">
                    {article.description}
                  </p>
                  <div className="mt-2">
                    <a
                      href={article.link}
                      className="group inline-flex items-center gap-2 font-semibold text-foreground transition hover:opacity-70"
                    >
                      <span>Leer más</span>
                      <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`carousel-dot ${
                  index === currentIndex ? "w-8 bg-foreground" : "w-2 bg-foreground/20"
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
