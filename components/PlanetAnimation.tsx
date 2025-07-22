'use client';

import React, { useEffect, useRef, useState } from 'react';

const PlanetAnimation = ({ size = 'large' }: { size?: 'small' | 'medium' | 'large' }) => {
  const planetRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const streakRef = useRef<SVGSVGElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const pulseRef = useRef<Animation | null>(null);
  
  const planetSize = size === 'medium' 
    ? 'w-72 h-72' 
    : size === 'small' 
      ? 'w-40 h-40' 
      : 'w-96 h-96';

  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    const planet = planetRef.current;
    const glow = glowRef.current;
    const streak = streakRef.current;
    const highlight = highlightRef.current;
    
    if (!planet || !glow || !streak || !highlight) return;

    // Set initial styles for animation
    const setInitialStyles = () => {
      // If already mounted, ensure elements are visible
      planet.style.opacity = '1';
      planet.style.transform = 'scale(1)';
      glow.style.opacity = '0.85';
      glow.style.transform = 'scale(1)';
      streak.style.opacity = '1';
      streak.style.transform = 'scale(1) rotate(0deg)';
      highlight.style.opacity = '0.7';
      highlight.style.transform = 'scale(1)';
    };

    // Set initial styles immediately
    setInitialStyles();

    // Start animations
    const startAnimations = () => {
      // Continuous animations
      planet.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
        {
          duration: 8000,
          iterations: Infinity,
          easing: 'linear'
        }
      );

      streak.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(720deg)' }],
        {
          duration: 12000,
          iterations: Infinity,
          easing: 'linear'
        }
      );

      pulseRef.current = glow.animate(
        [
          { opacity: 0.85 },
          { opacity: 0.6 },
          { opacity: 0.85 }
        ],
        {
          duration: 2000,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
    };

    // Start animations with a small delay
    const animationTimer = setTimeout(() => {
      startAnimations();
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(animationTimer);
      if (pulseRef.current) {
        pulseRef.current.cancel();
      }
    };
  }, [size]);

  return (
    <div 
      ref={planetRef}
      className={`relative ${planetSize} flex items-center justify-center will-change-[opacity,transform]`}
      style={{
        opacity: 0,
        transform: 'scale(1)',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center'
      }}
    >
      {/* Glowing planet */}
      <div 
        ref={glowRef}
        className="absolute inset-0 rounded-full will-change-[opacity,transform]"
        style={{
          background: 'radial-gradient(ellipse at 60% 40%, #a18aff 0%, #3a2e7c 60%, rgba(58,46,124,0.2) 100%)',
          boxShadow: '0 0 80px 40px #a18aff55, 0 0 200px 80px #3a2e7c33',
          opacity: 0.85,
          transform: 'scale(1)',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }}
      />
      {/* Comet-like light streak */}
      <svg
        ref={streakRef}
        className="absolute left-1/4 top-1/4 will-change-[opacity,transform]"
        width="70%"
        height="70%"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'blur(2px)',
          opacity: 0,
          transform: 'scale(1) rotate(0deg)',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }}
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
        className="absolute left-1/3 top-1/4 w-1/3 h-1/4 rounded-full will-change-[opacity,transform]"
        style={{
          background: 'radial-gradient(ellipse at center, #fff8 0%, #fff0 80%)',
          opacity: 0,
          transform: 'scale(1)',
          filter: 'blur(8px)',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }}
      />
    </div>
  );
};

export default PlanetAnimation;