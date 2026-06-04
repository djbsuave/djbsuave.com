import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="header-logo"
          className="font-display text-xl md:text-2xl uppercase tracking-tighter text-white"
        >
          DJ&nbsp;<span className="text-[#FF2D95]">B-Suave</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm uppercase tracking-[0.18em] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="header-book-button"
          className="hidden md:inline-flex items-center gap-2 bg-[#FF2D95] hover:bg-[#ff52a8] text-white text-sm font-bold uppercase tracking-[0.18em] px-5 py-2.5 rounded-full transition-colors"
        >
          Book Now
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          data-testid="header-menu-toggle"
          aria-label="Toggle menu"
          className="md:hidden text-white p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-t border-white/10"
        >
          <nav className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                className="text-base uppercase tracking-[0.18em] font-medium text-zinc-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              data-testid="mobile-book-button"
              className="mt-2 inline-flex justify-center items-center bg-[#FF2D95] hover:bg-[#ff52a8] text-white text-sm font-bold uppercase tracking-[0.18em] px-5 py-3 rounded-full transition-colors"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
