'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PlanetAnimation = ({ size = 'large' }: { size?: 'small' | 'medium' | 'large' }) => {
  const planetRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const streakRef = useRef<SVGSVGElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  
  let planetSize = 'w-96 h-96';
  if (size === 'medium') planetSize = 'w-72 h-72';
  if (size === 'small') planetSize = 'w-40 h-40';

  useEffect(() => {
    if (planetRef.current) {
      // Initial state - big size
      gsap.set(planetRef.current, {
        scale: 2.5,
        rotation: 0,
        opacity: 0
      });
      
      gsap.set(glowRef.current, {
        scale: 2.5,
        opacity: 0
      });
      
      gsap.set(streakRef.current, {
        scale: 2.5,
        opacity: 0,
        rotation: 0
      });
      
      gsap.set(highlightRef.current, {
        scale: 2.5,
        opacity: 0
      });

      // Animate to actual size with spinning and glowing
      const tl = gsap.timeline({
        delay: 0.5,
        ease: "power2.out"
      });

      tl.to(planetRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "back.out(1.7)"
      })
      .to(glowRef.current, {
        scale: 1,
        opacity: 0.85,
        duration: 1.5,
        ease: "back.out(1.7)"
      }, "<")
      .to(streakRef.current, {
        scale: 1,
        opacity: 1,
        rotation: 360,
        duration: 2,
        ease: "power2.out"
      }, "<0.3")
      .to(highlightRef.current, {
        scale: 1,
        opacity: 0.7,
        duration: 1.5,
        ease: "back.out(1.7)"
      }, "<")
      .to(planetRef.current, {
        rotation: 360,
        duration: 8,
        ease: "none",
        repeat: -1
      }, ">0.5")
      .to(streakRef.current, {
        rotation: 720,
        duration: 12,
        ease: "none",
        repeat: -1
      }, "<");

      // Continuous glow pulse
      gsap.to(glowRef.current, {
        opacity: 0.6,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });
    }
  }, [size]);

  return (
    <div className={`relative ${planetSize} flex items-center justify-center`}>
      {/* Glowing planet */}
      <div 
        ref={glowRef}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 60% 40%, #a18aff 0%, #3a2e7c 60%, rgba(58,46,124,0.2) 100%)',
          boxShadow: '0 0 80px 40px #a18aff55, 0 0 200px 80px #3a2e7c33',
          opacity: 0.85,
        }}
      />
      {/* Comet-like light streak */}
      <svg
        ref={streakRef}
        className="absolute left-1/4 top-1/4"
        width="70%"
        height="70%"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'blur(2px)' }}
      >
        <defs>
          <linearGradient id="streak" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="#a18aff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#a18aff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 30 60 Q 100 20 170 140"
          stroke="url(#streak)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {/* Soft highlight */}
      <div
        ref={highlightRef}
        className="absolute left-1/3 top-1/4 w-1/3 h-1/4 rounded-full"
            style={{
          background: 'radial-gradient(ellipse at center, #fff8 0%, #fff0 80%)',
          opacity: 0.7,
          filter: 'blur(8px)',
        }}
      />
    </div>
  );
};

export default PlanetAnimation;