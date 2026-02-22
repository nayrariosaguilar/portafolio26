const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mi" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-black/10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Nayri Dev</h2>
          <p className="max-w-prose text-sm text-foreground/75 sm:text-base">
            Frontend developer. Si quieres colaborar en un proyecto, escribeme y lo construimos.
          </p>
          <a
            href="mailto:hola@nayri.dev"
            className="inline-flex text-sm font-medium underline-offset-4 hover:underline sm:text-base"
          >
            hola@nayri.dev
          </a>
        </div>

        <div className="space-y-3 md:justify-self-end">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Mapa</h3>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base">
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
      <div className="border-t border-black/10">
        <p className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-foreground/65 sm:px-6 sm:text-sm lg:px-8">
          (c) {new Date().getFullYear()} Nayri Dev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
