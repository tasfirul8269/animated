'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Smartphone, Zap, Shield, Globe, Database, Sparkles, Play } from 'lucide-react';
import PlanetAnimation from '../../components/PlanetAnimation';

gsap.registerPlugin(ScrollTrigger);

export default function WebDevelopmentPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.children || [],
        { y: 120, opacity: 0, rotationX: 90 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out"
        }
      );

      // Tech stack animation
      gsap.fromTo(techRef.current?.children || [],
        { y: 60, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const technologies = [
    "React", "Next.js", "Vue.js", "Angular", "Node.js", "Python",
    "TypeScript", "GraphQL", "MongoDB", "PostgreSQL", "AWS", "Docker"
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance with modern web technologies."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Perfect experience across all devices and screen sizes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Built with security best practices and robust architecture."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Architecture that grows with your business needs."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div ref={heroRef} className="text-center lg:text-left space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <div className="gradient-text text-glow">Web</div>
                <div className="text-white">Development</div>
              </h1>
              <p className="text-xl lg:text-2xl text-[#b8c5ff] leading-relaxed">
                Building fast, scalable, and secure web applications using cutting-edge technologies and industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-[#1b1ac7] to-[#7784e4] px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-[#1b1ac7]/40 transition-all duration-500 flex items-center gap-3 hover:scale-105">
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Project
                </button>
                <button className="group border-2 border-[#7784e4] px-8 py-4 rounded-full text-[#7784e4] font-semibold hover:bg-[#7784e4] hover:text-white transition-all duration-500 flex items-center gap-3 hover:scale-105">
                  <Play size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  View Our Work
                </button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <PlanetAnimation size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Our <span className="gradient-text">Development</span> Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 rounded-2xl neon-border card-hover card-3d"
              >
                <div className="text-[#7784e4] mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#b8c5ff]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-[#0c0c7a]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto">
              We use the latest and most reliable technologies to build your applications
            </p>
          </div>

          <div ref={techRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 p-6 rounded-xl neon-border text-center hover:bg-gradient-to-br hover:from-[#1b1ac7]/20 hover:to-[#7784e4]/20 transition-all duration-300 card-3d"
              >
                <div className="text-white font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Development <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Planning", description: "Requirements analysis and project planning" },
              { step: "02", title: "Design", description: "UI/UX design and architecture planning" },
              { step: "03", title: "Development", description: "Coding and implementation phase" },
              { step: "04", title: "Testing", description: "Quality assurance and deployment" }
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 rounded-2xl neon-border card-hover card-3d"
              >
                <div className="text-4xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                <p className="text-[#b8c5ff]">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}