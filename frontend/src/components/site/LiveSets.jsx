import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { videoItems } from "../../data/site";

export default function LiveSets() {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!videoItems || videoItems.length === 0) return null;

  const active = videoItems[activeIdx];

  return (
    <section
      id="sets"
      data-testid="live-sets-section"
      className="relative py-24 md:py-32 bg-[#050505] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#00E5FF]" />
              <span className="text-xs capitalize tracking-[0.3em] text-[#00E5FF] font-bold">
                Live Sets
              </span>
            </div>
            <h2
              data-testid="live-sets-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl capitalize tracking-tighter text-white leading-[0.95]"
            >
              Press Play.
              <br />
              <span className="text-[#FF2D95]">Hear It.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm text-sm md:text-base">
            Full mixes, festival cuts, and behind-the-decks moments. Turn the
            volume up.
          </p>
        </div>

        {/* Featured player */}
        <VideoPlayer
          key={active.id}
          src={active.src}
          poster={active.poster}
          title={active.title}
          meta={active.meta}
          large
          testId={`live-sets-featured-${active.id}`}
        />

        {/* Playlist strip */}
        {videoItems.length > 1 && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {videoItems.map((v, i) => (
              <button
                type="button"
                key={v.id}
                onClick={() => setActiveIdx(i)}
                data-testid={`live-sets-thumb-${v.id}`}
                className={`group relative overflow-hidden aspect-video border transition-all ${
                  i === activeIdx
                    ? "border-[#FF2D95]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <img
                  src={v.poster}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <div className="text-xs md:text-sm font-semibold text-white line-clamp-1">
                    {v.title}
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 mt-0.5 line-clamp-1">
                    {v.meta}
                  </div>
                </div>
                {i === activeIdx && (
                  <span className="absolute top-2 right-2 text-[9px] tracking-[0.2em] uppercase bg-[#FF2D95] text-white px-2 py-0.5 rounded-full">
                    Now
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
