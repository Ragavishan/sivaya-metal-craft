
"use client";

import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const closeIntro = () => setIsVisible(false);

  return (
    <div
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#17120F] text-ivory"
      role="dialog"
      aria-label="Sivaya Metal Craft introduction"
      aria-modal="true"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/sivaya-intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={closeIntro}
      />


      {/* Skip intro */}
      <button
        type="button"
        onClick={closeIntro}
        className="absolute bottom-7 right-6 z-20 border border-ivory/40 px-5 py-3 text-[10px] font-bold tracking-[0.18em] text-ivory transition-colors hover:border-champagne hover:bg-champagne hover:text-[#17120F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne sm:bottom-10 sm:right-10"
      >
        SKIP INTRO ↗
      </button>

      {/* Bottom brand detail */}
      <p className="absolute bottom-8 left-6 z-10 hidden text-[9px] font-medium tracking-[0.18em] text-ivory/60 sm:block sm:left-10">
        STAINLESS STEEL FABRICATION & CUSTOM SOLUTIONS
      </p>
    </div>
  );
}
