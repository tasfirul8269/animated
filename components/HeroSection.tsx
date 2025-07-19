'use client';

import { useEffect, useRef, useState } from 'react';
import PlanetAnimation from './PlanetAnimation';
import { ArrowDown, Sparkles, Play } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate particles on client side only
    const newParticles = Array.from({ length: 20 }, () => ({
      width: Math.random() * 4 + 1,
      height: Math.random() * 4 + 1,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 4
    }));
    setParticles(newParticles);

    // GSAP entrance/exit animation for texts
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(titleRef.current.children,
          { y: 40, opacity: 0, scale: 0.9, rotationX: 8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.0,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              toggleActions: 'play reverse play reverse',
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      }
      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current,
          { y: 30, opacity: 0, scale: 0.95, rotationY: 5 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.9,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      }
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current.children,
          { y: 30, opacity: 0, scale: 0.9, rotationZ: 3 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationZ: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
              toggleActions: 'play reverse play reverse',
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      }
      // Parallax effect for background particles
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
      // Animate planet with enhanced effects
      const planetElement = document.querySelector('.planet-3d');
      if (planetElement) {
        gsap.fromTo(planetElement,
          { 
            scale: 0.7,
            rotation: -20,
            y: 50,
            opacity: 0
          },
          {
            scale: 1,
            rotation: 0,
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: planetElement,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="section-container parallax-section hero-bg">
      {/* Animated Background Particles */}
      <div ref={backgroundRef} className="bg-particles">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10 h-full">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <h1 ref={titleRef} className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight">
            <div className="gradient-text text-glow">Fast.</div>
            <div className="text-white">Reliable.</div>
            <div className="gradient-text text-glow">Safe.</div>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl lg:text-2xl text-[#b8c5ff] max-w-2xl leading-relaxed opacity-90"
          >
            The most advanced digital solutions with bulletproof security and lightning-fast performance that your business deserves.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button className="group btn-primary flex items-center gap-3 hover:scale-105">
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              Install ArgusVPN
            </button>
            <button className="group border-2 border-[#7784e4] px-8 py-4 rounded-full text-[#7784e4] font-semibold hover:bg-[#7784e4] hover:text-white transition-all duration-500 flex items-center gap-3 hover:scale-105">
              <Play size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              30-day money back guarantee
            </button>
          </div>
        </div>

        {/* Right Content - Planet Animation */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Timer display like in reference */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-[#040422]/80 backdrop-blur-md border border-[#7784e4]/30 rounded-2xl px-6 py-3 z-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-mono text-lg">00:00:05</span>
                <span className="text-[#7784e4] text-sm">Connected</span>
              </div>
            </div>
            <PlanetAnimation size="large" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;