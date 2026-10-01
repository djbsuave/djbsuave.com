import { useRef, useState } from "react";
import { Play, Volume2, VolumeX, Maximize2 } from "lucide-react";

/**
 * Reusable video player with a custom poster overlay.
 * Props:
 *  - src: MP4 URL (or empty string for "coming soon" state)
 *  - poster: image URL shown before play
 *  - title, meta: overlay text
 *  - large: bigger center play button + taller aspect
 *  - testId: data-testid prefix
 */
export default function VideoPlayer({
  src = "",
  poster,
  title,
  meta,
  large = false,
  testId = "video-player",
}) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef(null);

  const hasVideo = Boolean(src);

  const handlePlay = () => {
    if (!hasVideo) return;
    setPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
      }
    }, 30);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const goFullscreen = (e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen();
  };

  return (
    <div
      data-testid={testId}
      className={`group relative overflow-hidden border border-white/10 bg-[#0a0a0a] ${
        large ? "aspect-[16/9]" : "aspect-video"
      }`}
    >
      {playing && hasVideo ? (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            playsInline
            className="absolute inset-0 w-full h-full object-cover bg-black"
          />
          {/* Extra floating controls only visible while paused via native UI */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label="Toggle mute"
            className="absolute top-3 right-14 z-10 hidden md:inline-flex bg-black/60 backdrop-blur-md text-white rounded-full p-2 border border-white/15 hover:border-[#FF2D95]"
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <button
            type="button"
            onClick={goFullscreen}
            aria-label="Fullscreen"
            className="absolute top-3 right-3 z-10 hidden md:inline-flex bg-black/60 backdrop-blur-md text-white rounded-full p-2 border border-white/15 hover:border-[#FF2D95]"
          >
            <Maximize2 size={16} />
          </button>
        </>
      ) : (
        <>
          {poster && (
            <img
              src={poster}
              alt={title || "Video poster"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

          {/* Play / coming-soon button */}
          <button
            type="button"
            onClick={handlePlay}
            disabled={!hasVideo}
            data-testid={`${testId}-play`}
            aria-label={hasVideo ? `Play ${title}` : "Video coming soon"}
            className="absolute inset-0 flex items-center justify-center"
          >
            {hasVideo ? (
              <span
                className={`relative inline-flex items-center justify-center rounded-full bg-[#FF2D95] group-hover:bg-[#ff52a8] transition-colors ${
                  large ? "w-24 h-24 md:w-28 md:h-28" : "w-16 h-16 md:w-20 md:h-20"
                }`}
              >
                <Play
                  size={large ? 40 : 26}
                  className="fill-white text-white translate-x-0.5"
                />
                <span className="absolute inset-0 rounded-full bg-[#FF2D95]/40 animate-ping group-hover:animate-none" />
              </span>
            ) : (
              <span className="text-[10px] tracking-[0.3em] uppercase bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/40 px-4 py-2 rounded-full">
                Coming Soon
              </span>
            )}
          </button>

          {/* Meta */}
          {(title || meta) && (
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
              {title && (
                <h3
                  className={`font-display capitalize tracking-tight text-white ${
                    large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                  }`}
                >
                  {title}
                </h3>
              )}
              {meta && (
                <div className="mt-1 text-xs capitalize tracking-[0.2em] text-zinc-400">
                  {meta}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
