const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mi" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-foreground/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Mapa</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-foreground/80 transition hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-foreground/10">
        <p className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-foreground/65 sm:px-6 sm:text-sm lg:px-8">
          (c) {new Date().getFullYear()} Nayri Dev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
