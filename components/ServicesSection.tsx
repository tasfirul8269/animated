'use client';

import { useState, useEffect, useRef } from 'react';
import { Palette, Search, Code, Smartphone, Globe, Zap } from 'lucide-react';
import PlanetAnimation from './PlanetAnimation';
import ScrollAnimation from './ScrollAnimation';
import StaggerItem from './StaggerItem';

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
        <ScrollAnimation duration={0.7} delay={0.1} direction="up" once={false}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto opacity-90">
              We offer comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation duration={0.7} delay={0.2} once={false} staggerChildren={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index} index={index}>
                <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2a2a45] hover:border-[#3a3a5a] transition-all duration-500 hover:shadow-2xl hover:shadow-[#3a3a5a]/20 hover:-translate-y-1 transform transition-transform duration-300">
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
              </StaggerItem>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;