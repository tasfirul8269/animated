"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function GsapScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Cleanup ScrollTrigger
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
}
