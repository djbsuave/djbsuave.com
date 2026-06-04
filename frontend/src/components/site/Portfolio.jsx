import { motion } from "framer-motion";
import { Play, Instagram, ExternalLink } from "lucide-react";
import { useState } from "react";
import { portfolioItems, contactInfo } from "../../data/site";

function PortfolioCard({ item }) {
  const [active, setActive] = useState(false);
  const hasEmbed = Boolean(item.embedUrl);
  const hasHighlight = Boolean(item.highlightsUrl);
  const externalUrl = item.highlightsUrl || contactInfo.instagram;

  const cardBody = (
    <>
      <img
        src={item.poster}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />

      {/* Top meta */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
        <span className="text-[10px] lowercase tracking-[0.25em] text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
          {item.year}
        </span>
        <Instagram size={18} className="text-white/70" />
      </div>

      {/* Center play / view */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF2D95]/90 group-hover:bg-[#FF2D95] transition-colors">
          <Play size={26} className="fill-white text-white translate-x-0.5" />
          <span className="absolute inset-0 rounded-full bg-[#FF2D95]/40 animate-ping group-hover:animate-none" />
        </span>
      </div>

      {/* Bottom meta */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
        <div>
          <h3 className="font-display text-xl md:text-2xl lowercase tracking-tight text-white">
            {item.title}
          </h3>
          <div className="mt-1 text-xs lowercase tracking-[0.2em] text-zinc-400">
            {item.venue}
          </div>
        </div>
        {hasHighlight && !hasEmbed && (
          <div className="text-[10px] lowercase tracking-[0.2em] text-white/70 flex items-center gap-1.5 pb-1">
            View <ExternalLink size={11} />
          </div>
        )}
      </div>
    </>
  );

  // Container wrapper: motion + sizing/styling
  const wrapperClasses = `group relative overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-[4/5] cursor-pointer hover:-translate-y-1 hover:border-white/30 transition-all duration-300 ${item.span}`;

  // Case 1: real Instagram reel embed available — play inline on click
  if (hasEmbed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        data-testid={`portfolio-card-${item.id}`}
        className={wrapperClasses}
        onClick={() => setActive(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(true)}
      >
        {active ? (
          <iframe
            src={item.embedUrl}
            title={item.title}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          cardBody
        )}
      </motion.div>
    );
  }

  // Case 2: link out to Instagram Highlight or profile
  return (
    <motion.a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      data-testid={`portfolio-card-${item.id}`}
      className={wrapperClasses}
      aria-label={`View ${item.title} on Instagram`}
    >
      {cardBody}
    </motion.a>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="relative py-24 md:py-32 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#00E5FF]" />
              <span className="text-xs lowercase tracking-[0.3em] text-[#00E5FF] font-bold">
                Portfolio
              </span>
            </div>
            <h2
              data-testid="portfolio-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl lowercase tracking-tighter text-white leading-[0.95]"
            >
              Receipts from
              <br />
              <span className="text-[#FF2D95]">the dance floor.</span>
            </h2>
          </div>
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="portfolio-instagram-link"
            className="inline-flex items-center gap-2 text-sm lowercase tracking-[0.2em] font-bold text-white hover:text-[#00E5FF] transition-colors"
          >
            <Instagram size={18} />
            More on Instagram
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 md:auto-rows-[minmax(0,1fr)]">
          {portfolioItems
            .filter((item) => !item.draft)
            .map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
        </div>

        <p className="mt-10 text-xs lowercase tracking-[0.2em] text-zinc-600 text-center">
          Tap any clip to watch on Instagram · Live gig highlights
        </p>
      </div>
    </section>
  );
}
