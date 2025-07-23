'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles, Play } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

// Add keyframes for animations
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-20px) translateX(10px); }
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
  `;
  document.head.appendChild(style);
}

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: number;
    top: number;
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

    // Handle video autoplay on mount
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented, showing fallback content');
      });
    }

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


    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          disablePictureInPicture
          className="w-full h-full object-cover"
        >
          <source src="/b1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      {/* Animated background overlay */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0"
      >
        {particles.map((particle, index) => (
          <div
            key={index}
            className="particle"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 z-10 pointer-events-none">
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
           
      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10 h-full py-20 text-center">
        {/* Content */}
        <div className="space-y-8 w-full max-w-4xl">
          <div className="mx-auto">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 whitespace-nowrap">
              <ScrollAnimation duration={0.5} delay={0.1} direction="up" once={false}>
                <div className="inline-flex items-center space-x-2">
                  <span className="gradient-text">Fast.</span>
                  <span className="text-[#e5dbff]">Reliable.</span>
                  <span className="gradient-text">Secure.</span>
                </div>
              </ScrollAnimation>
            </h1>
            
            <ScrollAnimation duration={0.6} delay={0.4} direction="up" once={false}>
              <p ref={subtitleRef} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-center">
                The most advanced digital solutions with bulletproof security and lightning-fast performance that your business deserves.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation duration={0.7} delay={0.5} direction="up" once={false}>
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary group flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform bg-gradient-to-r from-[#a78bfa] to-[#c5b7ec] text-[#1b133f]">
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Get Started
              </button>
              <button className="group border-2 border-[#a78bfa] px-8 py-4 rounded-full text-[#a78bfa] font-semibold hover:bg-[#a78bfa] hover:text-[#1b133f] transition-all duration-300 flex items-center gap-3 hover:scale-105">
                <Play size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation duration={0.5} delay={0.6} direction="up" once={false}>
              <div className="flex items-center justify-center gap-4 mt-8 text-gray-400 text-sm">
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
            </ScrollAnimation>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;