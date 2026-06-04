import { Quote } from "lucide-react";
import { testimonials } from "../../data/site";

export default function Testimonials() {
  // Duplicate for seamless marquee
  const loop = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-[#FF2D95]" />
          <span className="text-xs lowercase tracking-[0.3em] text-[#FF2D95] font-bold">
            Testimonials
          </span>
        </div>
        <h2
          data-testid="testimonials-heading"
          className="font-display text-4xl md:text-5xl lg:text-6xl lowercase tracking-tighter text-white leading-[0.95] max-w-3xl"
        >
          What the rooms
          <br />
          <span className="text-zinc-500">remember.</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee w-max">
          {loop.map((t, i) => (
            <article
              key={`${t.id}-${i}`}
              data-testid={`testimonial-${t.id}`}
              className="w-[340px] md:w-[420px] shrink-0 bg-[#050505] border border-white/10 p-8 hover:border-[#FF2D95]/60 transition-colors"
            >
              <Quote
                size={32}
                className="text-[#FF2D95]"
                strokeWidth={1.5}
              />
              <p className="mt-5 text-base md:text-lg text-zinc-200 font-light leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="text-sm font-semibold text-white">
                  {t.author}
                </div>
                <div className="text-xs lowercase tracking-[0.2em] text-zinc-500 mt-1">
                  {t.event}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      </div>
    </section>
  );
}
