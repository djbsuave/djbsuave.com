import { motion } from "framer-motion";
import { Heart, Disc3, Building2, PartyPopper } from "lucide-react";
import { services } from "../../data/site";

const iconMap = { Heart, Disc3, Building2, PartyPopper };

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#FF2D95]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#FF2D95] font-bold">
                Services
              </span>
            </div>
            <h2
              data-testid="services-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-white leading-[0.95] max-w-2xl"
            >
              Any room. Any crowd.
              <br />
              <span className="text-zinc-500">Same energy.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-base leading-relaxed">
            Full mobile rig — pro sound, lighting, wireless mics. Travel
            anywhere. Set times to match yours, not mine.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`service-card-${s.id}`}
                className="group bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#0f0f0f] transition-colors relative"
              >
                <div className="flex items-center justify-between mb-10">
                  <Icon
                    size={32}
                    className="text-[#FF2D95] group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs text-zinc-600 font-mono">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                  {s.description}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 group-hover:text-[#00E5FF] transition-colors">
                  <span>Enquire</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
