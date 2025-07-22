'use client';

import { useState, useEffect, useRef } from 'react';
import { Palette, Search, Code, Smartphone, Globe, Zap } from 'lucide-react';
import PlanetAnimation from './PlanetAnimation';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  // No scroll-based effects needed

  return (
    <section ref={sectionRef} className="section-container relative bg-[#0a0613] py-20">
      {/* Background Elements - Static */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 opacity-5">
          <PlanetAnimation size="medium" />
        </div>
        <div className="absolute bottom-20 -left-10 w-32 h-32 border border-[#7784e4]/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto opacity-90">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const delay = Math.min(index * 100, 500); // Cap delay at 500ms
            return (
            <div
              key={index}
              className={`bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2a2a45] hover:border-[#3a3a5a] transition-all duration-500 hover:shadow-2xl hover:shadow-[#3a3a5a]/20 hover:-translate-y-1 transform transition-transform duration-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${delay}ms` : '0ms',
                transitionProperty: 'opacity, transform',
                transitionDuration: '700ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="text-[#7784e4] mb-6 group-hover:scale-110 transition-all duration-300 hover:rotate-6">
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
              <button 
                className="mt-2 text-[#7784e4] font-semibold hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.arrow')?.classList.add('translate-x-1');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.arrow')?.classList.remove('translate-x-1');
                }}
              >
                Learn More
                <div className="w-4 h-4 border-t-2 border-r-2 border-[#7784e4] transform rotate-45 transition-transform duration-300 arrow"></div>
              </button>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;