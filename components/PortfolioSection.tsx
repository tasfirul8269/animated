'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import PlanetAnimation from './PlanetAnimation';

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto opacity-90">
            Showcasing our latest projects and digital innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group h-80 flex items-end transform transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3a3a5a]/30"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay content, hidden by default, shown on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#040422]/70 to-[#0c0c7a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-center items-center p-8">
                <h3 className="text-2xl font-bold mb-2 text-white text-center">
                  {project.title}
                </h3>
                <p className="text-[#b8c5ff] mb-4 leading-relaxed text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#7784e4]/20 text-[#7784e4] text-sm rounded-full border border-[#7784e4]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;