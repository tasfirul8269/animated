'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import PlanetAnimation from './PlanetAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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
      if (projectsRef.current) {
        gsap.fromTo(projectsRef.current.children,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.1,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: projectsRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      }
      // Enhanced project card animations with smoother effects
      if (projectsRef.current) {
        const projects = Array.from(projectsRef.current.children);
        projects.forEach((project, index) => {
          gsap.fromTo(project,
            { 
              y: 70,
              opacity: 0,
              scale: 0.7,
              rotationY: 20,
              z: -100
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotationY: 0,
              z: 0,
              duration: 1.3,
              delay: index * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: project,
                start: "top 90%",
                toggleActions: "play reverse play reverse",
                fastScrollEnd: true,
                preventOverlaps: true
              }
            }
          );
        });
      }
      // Parallax effect for background gradient
      const bgGradient = document.querySelector('.bg-gradient-to-b');
      if (bgGradient) {
        gsap.to(bgGradient, {
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0c7a]/5 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto opacity-90">
            Showcasing our latest projects and digital innovations
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 rounded-2xl neon-border overflow-hidden card-hover card-3d"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040422]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-4">
                    <button className="p-2 bg-[#7784e4] rounded-full text-white hover:bg-[#1b1ac7] transition-colors duration-300">
                      <ExternalLink size={16} />
                    </button>
                    <button className="p-2 bg-[#7784e4] rounded-full text-white hover:bg-[#1b1ac7] transition-colors duration-300">
                      <Github size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7784e4] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-[#b8c5ff] mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
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