export function Footer() {
  return (
    <footer id="contacto" className="border-t border-foreground/10">
      <div className="border-t border-foreground/10">
        <p className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-foreground/65 sm:px-6 sm:text-sm lg:px-8">
          (c) {new Date().getFullYear()} Nayri Dev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
