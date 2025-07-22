'use client';

import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import PlanetAnimation from './PlanetAnimation';

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "SaaS Dashboard",
      description: "Comprehensive analytics dashboard with real-time data visualization.",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with modern UI.",
      tech: ["React Native", "Firebase", "Node.js"],
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  // No scroll-based effects needed

  return (
    <section ref={sectionRef} className="section-container relative bg-[#0a0613] py-20">
      {/* Static background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0c7a]/5 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto opacity-90">
            Showcasing our latest projects and digital innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const delay = Math.min(index * 100, 300); // Cap delay at 300ms
            return (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group h-80 flex items-end transform transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3a3a5a]/30`}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transitionDelay: isVisible ? `${delay}ms` : '0ms',
                transitionProperty: 'opacity, transform, box-shadow',
                transitionDuration: '700ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Overlay content with enhanced hover effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-[#040422]/80 via-[#0c0c7a]/90 to-[#040422]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-8 transform group-hover:scale-100 scale-90"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <h3 className="text-2xl font-bold mb-2 text-white text-center">
                  {project.title}
                </h3>
                <p className="text-[#b8c5ff] mb-6 leading-relaxed text-center transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                  {project.tech.map((tech, techIndex) => {
                    const isHovered = hoveredProject === index;
                    return (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 ${
                          isHovered 
                            ? 'bg-[#7784e4] text-white border-[#7784e4]' 
                            : 'bg-[#7784e4]/20 text-[#7784e4] border-[#7784e4]/30'
                        }`}
                        style={{
                          transform: isHovered ? 'translateY(-2px)' : 'none',
                          boxShadow: isHovered ? '0 4px 14px rgba(119, 132, 228, 0.3)' : 'none'
                        }}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );})}
        </div>

        <div 
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible ? '300ms' : '0ms',
            transitionProperty: 'opacity, transform',
            transitionDuration: '700ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <button 
            className="relative overflow-hidden group btn-primary hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View All Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#a78bfa] to-[#c5b7ec] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;