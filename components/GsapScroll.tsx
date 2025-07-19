"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Uncomment if you want to sync with GSAP

export default function GsapScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      lerp: 0.35, // even faster/snappier scroll
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // If using GSAP ScrollTrigger, sync updates:
    // lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
