const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mi" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="border-b border-black/10 bg-background/95">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#inicio" className="text-lg font-semibold tracking-tight sm:text-xl">
            Nayri Dev
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium transition hover:bg-black/5 sm:text-base"
          >
            Hablemos
          </a>
        </div>

        <nav aria-label="Navegacion principal">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-foreground/80 transition hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
