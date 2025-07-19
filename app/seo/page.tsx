'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, TrendingUp, Target, BarChart3, Globe, Zap, Sparkles, Play } from 'lucide-react';
import PlanetAnimation from '../../components/PlanetAnimation';

gsap.registerPlugin(ScrollTrigger);

export default function SEOPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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

      // Services animation
      gsap.fromTo(servicesRef.current?.children || [],
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const seoServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Keyword Research",
      description: "Comprehensive keyword analysis to target the right audience and drive qualified traffic.",
      features: ["Competitor Analysis", "Search Volume Analysis", "Long-tail Keywords", "Intent Mapping"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "On-Page SEO",
      description: "Optimizing your website's content and structure for better search engine visibility.",
      features: ["Title Optimization", "Meta Descriptions", "Header Tags", "Internal Linking"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Technical SEO",
      description: "Improving your website's technical foundation for better crawling and indexing.",
      features: ["Site Speed", "Mobile Optimization", "Schema Markup", "XML Sitemaps"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and reporting to measure SEO performance and ROI.",
      features: ["Google Analytics", "Search Console", "Rank Tracking", "Performance Reports"]
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
                <div className="gradient-text text-glow">SEO</div>
                <div className="text-white">Optimization</div>
              </h1>
              <p className="text-xl lg:text-2xl text-[#b8c5ff] leading-relaxed">
                Boost your online visibility and drive organic traffic with our data-driven SEO strategies and proven methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-[#1b1ac7] to-[#7784e4] px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-[#1b1ac7]/40 transition-all duration-500 flex items-center gap-3 hover:scale-105">
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  Get SEO Audit
                </button>
                <button className="group border-2 border-[#7784e4] px-8 py-4 rounded-full text-[#7784e4] font-semibold hover:bg-[#7784e4] hover:text-white transition-all duration-500 flex items-center gap-3 hover:scale-105">
                  <Play size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  View Case Studies
                </button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <PlanetAnimation size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our SEO <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto">
              Comprehensive SEO solutions to improve your search rankings and drive results
            </p>
          </div>

          <div ref={servicesRef} className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 p-8 rounded-2xl neon-border card-hover card-3d"
              >
                <div className="text-[#7784e4] mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                
                <p className="text-[#b8c5ff] mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[#b8c5ff]">
                      <div className="w-1.5 h-1.5 bg-[#7784e4] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-[#0c0c7a]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Proven <span className="gradient-text">Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "300%", label: "Average Traffic Increase" },
              { number: "85%", label: "First Page Rankings" },
              { number: "150+", label: "Successful Projects" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 rounded-2xl neon-border card-hover card-3d"
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                  {stat.number}
                </div>
                <div className="text-[#b8c5ff] text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}