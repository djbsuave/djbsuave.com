import { motion } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";

const heroBg =
  "https://customer-assets.emergentagent.com/job_dj-gigs-1/artifacts/wkmxtfc1_djing%20at%20lava.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden flex items-end"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-[center_25%] md:bg-[center_30%]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-[#FF2D95]" />
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-300 font-bold">
            Mobile DJ · Mashup Artist
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          data-testid="hero-title"
          className="font-display text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.85] uppercase tracking-tighter text-white"
        >
          DJ B-<span className="text-[#FF2D95]">Suave</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          data-testid="hero-tagline"
          className="mt-6 max-w-2xl text-lg md:text-2xl text-zinc-300 font-light leading-snug"
        >
          21 years of <em className="not-italic text-white">genre-bending</em>{" "}
          mashup originality — turning every floor into a story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            data-testid="hero-book-button"
            className="group inline-flex items-center gap-3 bg-[#FF2D95] hover:bg-[#ff52a8] text-white px-7 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-colors"
          >
            Book the Night
            <ArrowDownRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </a>
          <a
            href="#portfolio"
            data-testid="hero-portfolio-button"
            className="group inline-flex items-center gap-3 border border-white/20 hover:border-white text-white px-7 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-colors"
          >
            <Play size={16} className="fill-white" />
            Watch Reels
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 max-w-2xl gap-6 md:gap-12"
        >
          {[
            { k: "21+", v: "Years on the decks" },
            { k: "2,500+", v: "Events played" },
            { k: "40+", v: "Genres loved" },
          ].map((s) => (
            <div key={s.k} className="border-l border-white/15 pl-4">
              <div className="font-display text-3xl md:text-4xl text-white">
                {s.k}
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-zinc-400 mt-1">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
