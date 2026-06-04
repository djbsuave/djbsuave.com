import { motion } from "framer-motion";

const aboutImg =
  "https://images.unsplash.com/photo-1545128485-c400e7702796?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBkaiUyMHBlcmZvcm1pbmclMjBkYXJrfGVufDB8fHx8MTc4MDUyMjM4M3ww&ixlib=rb-4.1.0&q=85";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#00E5FF]" />
            <span className="text-xs capitalize tracking-[0.3em] text-[#00E5FF] font-bold">
              About
            </span>
          </div>
          <h2
            data-testid="about-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl capitalize tracking-tighter text-white leading-[0.95]"
          >
            Two decades of
            <br />
            <span className="text-[#FF2D95]">reading rooms</span>
            <br />
            & rewriting setlists.
          </h2>

          <div className="mt-8 space-y-5 text-zinc-300 text-base md:text-lg leading-relaxed font-light max-w-2xl">
            <p>
              I'm B-Suave — and for 21 years I've made one thing my obsession:
              the mashup. Not the kind you buy off a website. The kind that's
              built live, in the room, for the people in front of me.
            </p>
            <p>
              From wedding ballrooms to rooftop clubs, from corporate galas to
              backyard birthdays — I bring a turntable craft that blends decades
              and cultures into one continuous, undeniable groove. Bollywood
              into Bad Bunny. Motown into Drake. 90s house into Afrobeats. If
              the floor knows it, I'll find a way in.
            </p>
            <p>
              Every event is custom-built. Every setlist is written for{" "}
              <span className="text-white">your</span> crowd. That's the
              difference.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
            {[
              "Open Format",
              "Live Mashups",
              "Pro Sound & Light",
              "MC Capable",
              "Multilingual Sets",
              "Crowd-First",
            ].map((tag) => (
              <div
                key={tag}
                className="border border-white/10 px-4 py-3 text-xs capitalize tracking-[0.15em] text-zinc-300 hover:border-[#FF2D95] hover:text-white transition-colors"
              >
                {tag}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 md:sticky md:top-28"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <img
              src={aboutImg}
              alt="DJ B-Suave performing"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-xs capitalize tracking-[0.25em] text-[#00E5FF]">
                Est. 2003
              </div>
              <div className="font-display text-2xl capitalize mt-2 text-white">
                Built behind the decks
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
