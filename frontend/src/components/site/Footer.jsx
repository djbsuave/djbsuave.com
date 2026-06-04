import { Instagram } from "lucide-react";
import { contactInfo } from "../../data/site";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#030303] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-7">
            <div className="text-xs capitalize tracking-[0.3em] text-zinc-500 mb-3">
              Mobile DJ · Mashup Artist · Sound Engineer
            </div>
            <div className="text-zinc-300 text-base max-w-md font-light leading-relaxed">
              21 years of genre-bending mashup originality. Booking now for
              weddings, clubs, corporate, and private events.
            </div>
          </div>
          <div className="md:col-span-5 flex md:justify-end gap-6 text-sm">
            <a
              href={`mailto:${contactInfo.email}`}
              data-testid="footer-email"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {contactInfo.email}
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#00E5FF] transition-colors"
            >
              <Instagram size={16} /> @b_suavee
            </a>
          </div>
        </div>

        {/* Massive wordmark */}
        <div
          aria-hidden
          className="font-display capitalize tracking-tighter leading-none text-white/95"
          style={{ fontSize: "clamp(3rem, 18vw, 16rem)" }}
        >
          B-<span className="text-[#FF2D95]">Suave</span>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs capitalize tracking-[0.2em] text-zinc-600">
          <div>© {new Date().getFullYear()} DJ B-Suave · All rights reserved</div>
          <div>Designed in the dark · Built for the dance floor</div>
        </div>
      </div>
    </footer>
  );
}
