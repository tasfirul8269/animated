'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Users, Lightbulb, Target, Zap, Award, Sparkles } from 'lucide-react';
import PlanetAnimation from '../../components/PlanetAnimation';

gsap.registerPlugin(ScrollTrigger);

export default function UIUXPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

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

      // Process cards animation
      gsap.fromTo(processRef.current?.children || [],
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const processSteps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Research & Discovery",
      description: "Understanding your users, market, and business goals through comprehensive research and analysis."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Ideation & Strategy",
      description: "Brainstorming innovative solutions and creating a strategic roadmap for your digital product."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Prototype",
      description: "Creating wireframes, mockups, and interactive prototypes that bring your vision to life."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Testing & Refinement",
      description: "Conducting user testing and iterating on designs to ensure optimal user experience."
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
                <div className="gradient-text text-glow">UI/UX</div>
                <div className="text-white">Design</div>
              </h1>
              <p className="text-xl lg:text-2xl text-[#b8c5ff] leading-relaxed">
                Creating intuitive and visually stunning user interfaces that engage, convert, and delight your users with every interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-[#1b1ac7] to-[#7784e4] px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-[#1b1ac7]/40 transition-all duration-500 flex items-center gap-3 hover:scale-105">
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Project
                </button>
                <button className="group border-2 border-[#7784e4] px-8 py-4 rounded-full text-[#7784e4] font-semibold hover:bg-[#7784e4] hover:text-white transition-all duration-500 hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <PlanetAnimation size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional user experiences
            </p>
          </div>

          <div ref={processRef} className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-[#040422] to-[#0c0c7a]/20 rounded-2xl neon-border card-hover card-3d"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1b1ac7] to-[#7784e4] rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-[#b8c5ff] text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-[#0c0c7a]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Our <span className="gradient-text">UI/UX</span> Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Turnaround",
                description: "Quick delivery without compromising on quality"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Award-Winning Design",
                description: "Recognized excellence in user experience design"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "User-Centered Approach",
                description: "Every decision is based on user research and data"
              }
            ].map((feature, index) => (
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
    </main>
  );
}