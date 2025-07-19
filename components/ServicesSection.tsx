'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Search, Code, Smartphone, Globe, Zap } from 'lucide-react';
import PlanetAnimation from './PlanetAnimation';

// Remove all gsap and ScrollTrigger imports and references
// Remove all useRef hooks except those used for React logic (not animation)

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = null; // Removed useRef
  const titleRef = null; // Removed useRef
  const cardsRef = useRef<HTMLDivElement>(null);
  const planetRef = null; // Removed useRef

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning user interfaces that engage and convert.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Boosting your online visibility with data-driven SEO strategies and techniques.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Building fast, scalable, and secure web applications using modern technologies.",
      features: ["Frontend Development", "Backend Systems", "API Integration", "Performance"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-Commerce",
      description: "Creating powerful online stores that drive sales and enhance customer experience.",
      features: ["Store Setup", "Payment Integration", "Inventory Management", "Analytics"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing websites and applications for maximum speed and efficiency.",
      features: ["Speed Optimization", "Core Web Vitals", "Caching", "CDN Setup"]
    }
  ];

  useEffect(() => {
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children);
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.0,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            fastScrollEnd: true,
            preventOverlaps: true
          },
          onComplete: () => {
            cards.forEach(card => {
              gsap.set(card, { clearProps: 'transform' });
            });
          },
        }
      );
    }
    // GSAP for heading/subtitle
    const title = document.querySelector('.services-title');
    const subtitle = document.querySelector('.services-subtitle');
    if (title) {
      gsap.fromTo(title,
        { y: 40, opacity: 0, scale: 0.9, rotationX: 8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
            fastScrollEnd: true,
            preventOverlaps: true
          }
        }
      );
    }
    if (subtitle) {
      gsap.fromTo(subtitle,
        { y: 30, opacity: 0, scale: 0.95, rotationY: 5 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.9,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitle,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
            fastScrollEnd: true,
            preventOverlaps: true
          }
        }
      );
    }
    // Enhanced card animations with smoother effects
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children);
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          { 
            y: 60,
            opacity: 0,
            scale: 0.8,
            rotationY: 15,
            z: -80
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 1.2,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      });
    }
    // Parallax effect for background elements
    const bgElements = document.querySelectorAll('.absolute');
    if (bgElements.length) {
      gsap.to(bgElements, {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: document.querySelector('.section-container'),
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="section-container parallax-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div ref={planetRef} className="absolute top-1/4 right-10 opacity-5">
          <PlanetAnimation size="medium" />
        </div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-[#7784e4]/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto opacity-90">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 p-8 rounded-2xl neon-border card-hover card-3d group"
            >
              <div className="text-[#7784e4] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#7784e4] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#b8c5ff] mb-6 leading-relaxed text-center">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-[#b8c5ff]">
                    <div className="w-1.5 h-1.5 bg-[#7784e4] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-2 text-[#7784e4] font-semibold hover:text-white transition-colors duration-300 flex items-center gap-2">
                Learn More
                <div className="w-4 h-4 border-t-2 border-r-2 border-[#7784e4] transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;