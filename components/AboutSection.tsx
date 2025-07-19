'use client';

import { useEffect, useRef } from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';
import PlanetAnimation from './PlanetAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Remove all gsap and ScrollTrigger imports and logic

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Zap className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Target className="w-6 h-6" /> }
  ];

  useEffect(() => {
    // GSAP entrance/exit animation for texts
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { y: 40, opacity: 0, scale: 0.9, rotationX: 8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.0,
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
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
          { y: 30, opacity: 0, scale: 0.95, rotationY: 5 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.9,
            stagger: 0.15,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      }
      // Animate stats cards with enhanced effects
      if (statsRef.current) {
        gsap.fromTo(statsRef.current.children,
          { 
            y: 50,
            opacity: 0,
            scale: 0.8,
            rotationY: 10,
            z: -50
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 1.1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      }
      // Parallax effect for background elements
      const bgElements = sectionRef.current?.querySelectorAll('.absolute');
      if (bgElements) {
        gsap.to(bgElements, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-container parallax-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-[#7784e4]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#1b1ac7]/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">NEXUS</span>
          </h2>
          <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto opacity-90">
            Building the future of digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg lg:text-xl text-[#b8c5ff] leading-relaxed">
              We are a forward-thinking digital agency specializing in creating extraordinary web experiences. 
              Our team combines creativity with cutting-edge technology to deliver solutions that not only 
              look stunning but also drive real business results.
            </p>
            <p className="text-lg text-[#b8c5ff] leading-relaxed">
              From concept to launch, we work closely with our clients to understand their vision and 
              transform it into digital reality. Our expertise spans UI/UX design, web development, 
              SEO optimization, and digital strategy.
            </p>
            <div className="pt-6">
              <button className="btn-primary hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right side content instead of planet */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 p-8 rounded-2xl neon-border card-3d">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#7784e4] rounded-full"></div>
                  <span className="text-[#b8c5ff]">Expert Team</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#7784e4] rounded-full"></div>
                  <span className="text-[#b8c5ff]">Cutting-edge Technology</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#7784e4] rounded-full"></div>
                  <span className="text-[#b8c5ff]">24/7 Support</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#7784e4] rounded-full"></div>
                  <span className="text-[#b8c5ff]">Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 rounded-2xl neon-border card-hover card-3d"
            >
              <div className="text-[#7784e4] mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-[#b8c5ff] text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;