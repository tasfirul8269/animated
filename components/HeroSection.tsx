'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles, Play } from 'lucide-react';

// Add keyframes for animations
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-20px) translateX(10px); }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .text-glow {
      text-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
    }
    
    .particle {
      position: absolute;
      background: rgba(167, 139, 250, 0.2);
      border-radius: 50%;
      pointer-events: none;
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
  `;
  document.head.appendChild(style);
}

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
    // Generate particles on client side
    const newParticles = Array.from({ length: 20 }, () => ({
      width: Math.random() * 5 + 2,
      height: Math.random() * 5 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    }));
    setParticles(newParticles);

    // Add scroll event for parallax effect
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollY = window.scrollY;
        const yPos = -scrollY * 0.2;
        backgroundRef.current.style.setProperty('--parallax-y', `${yPos}px`);
      }
    };

    // Initial call
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animate elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate-fade-in-up');
        }
      });
    };

    // Initial check
    animateOnScroll();
    
    // Add scroll event for animations
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="section-container parallax-section relative overflow-hidden min-h-screen flex items-center" style={{ background: '#0a0613' }}>
      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            top: '10%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle at 30% 30%, #a78bfa 0%, transparent 70%)',
            opacity: 0.7,
            filter: 'blur(80px)'
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: '0%',
            right: '10%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle at 70% 70%, #5f3dc4 0%, transparent 70%)',
            opacity: 0.6,
            filter: 'blur(80px)'
          }}
        />
        <div
          className="absolute"
          style={{
            top: '40%',
            left: '50%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle at 50% 50%, #c5b7ec 0%, transparent 70%)',
            opacity: 0.5,
            filter: 'blur(100px)'
          }}
        />
      </div>
      
      {/* Soft gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background: 'linear-gradient(180deg, rgba(27,19,63,0.0) 60%, rgba(44,37,94,0.28) 100%)'
           }} />
           
      {/* Animated Background Particles */}
      <div ref={backgroundRef} className="bg-particles" style={{
        '--parallax-y': '0px',
        transform: 'translate3d(0, var(--parallax-y, 0), 0)',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center'
      } as React.CSSProperties}>
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              animationName: 'float',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10 h-full py-20">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <div className="gradient-text animate-on-scroll delay-100" style={{ opacity: 0, animationFillMode: 'forwards' }}>Fast.</div>
              <div className="text-[#e5dbff] animate-on-scroll delay-150" style={{ opacity: 0, animationFillMode: 'forwards' }}>Reliable.</div>
              <div className="gradient-text animate-on-scroll delay-200" style={{ opacity: 0, animationFillMode: 'forwards' }}>Secure.</div>
            </h1>
            
            <p ref={subtitleRef} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-on-scroll delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}>
              The most advanced digital solutions with bulletproof security and lightning-fast performance that your business deserves.
            </p>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-on-scroll delay-400" style={{ opacity: 0, animationFillMode: 'forwards' }}>
              <button className="btn-primary group flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform bg-gradient-to-r from-[#a78bfa] to-[#c5b7ec] text-[#1b133f]">
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Get Started
              </button>
              <button className="group border-2 border-[#a78bfa] px-8 py-4 rounded-full text-[#a78bfa] font-semibold hover:bg-[#a78bfa] hover:text-[#1b133f] transition-all duration-300 flex items-center gap-3 hover:scale-105">
                <Play size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="h-4 w-px bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

        {/* Right Content - Planet Animation */}
        <div className="flex justify-center lg:justify-end mt-16 lg:mt-0">
          <div className="relative">
            {/* Feature cards */}
            <div className="absolute -top-10 -left-10 bg-[#0f0a23] backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-[#2a1f5c] z-10 w-48">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white font-medium">Secure Connection</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">End-to-end encryption for maximum security</p>
            </div>
            
            <div className="absolute -bottom-10 -right-10 bg-[#0f0a23] backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-[#2a1f5c] z-10 w-48">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-white font-medium">Fast Speeds</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Lightning-fast servers worldwide</p>
            </div>
            
            {/* Main planet animation */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#5f3dc4] opacity-20 blur-3xl"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#5f3dc4] opacity-30 animate-pulse"></div>
                <div className="absolute w-full h-full rounded-full border border-[#a78bfa] border-opacity-20"></div>
                <div className="absolute w-3/4 h-3/4 rounded-full border border-[#a78bfa] border-opacity-20"></div>
                <div className="absolute w-1/2 h-1/2 rounded-full border border-[#a78bfa] border-opacity-20"></div>
                
                {/* Glow effect */}
                <div className="absolute w-1/2 h-1/2 rounded-full bg-[#a78bfa] opacity-10 blur-xl"></div>
                
                {/* Center dot */}
                <div className="absolute w-4 h-4 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;