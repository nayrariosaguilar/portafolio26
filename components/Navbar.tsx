"use client";

import { ThemeToggle } from "./ThemeToggle";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";

export function Navbar() {
  const t = useTranslations("Navbar");

  const navLinks = [
    { href: "/#inicio", label: t("home") },
    { href: "/#proyectos", label: t("projects") },
    { href: "/#contacto", label: t("contact") },
    { href: "/agendar-videollamada", label: t("schedule") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <nav aria-label="Navegacion principal">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/80 transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeToggle />
          <Link
            href="/agendar-videollamada"
            className="rounded-full border border-foreground/15 px-4 py-2 text-sm font-medium transition hover:bg-foreground/5 sm:text-base"
          >
            {t("schedule")}
          </Link>
        </div>
      </div>
    </header>
  );
}
