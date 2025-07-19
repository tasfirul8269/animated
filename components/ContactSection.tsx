'use client';

import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PlanetAnimation from './PlanetAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Remove all gsap and ScrollTrigger imports and logic

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

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
      if (contactInfoRef.current) {
        gsap.fromTo(contactInfoRef.current.children,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contactInfoRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      }
      // Enhanced contact info card animations
      if (contactInfoRef.current) {
        const contactCards = Array.from(contactInfoRef.current.children);
        contactCards.forEach((card, index) => {
          gsap.fromTo(card,
            { 
              y: 60,
              opacity: 0,
              scale: 0.8,
              rotationX: 12,
              z: -80
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotationX: 0,
              z: 0,
              duration: 1.2,
              delay: index * 0.15,
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
      // Animate form elements
      if (formRef.current) {
        const formElements = formRef.current.querySelectorAll('input, textarea, button');
        gsap.fromTo(formElements,
          { 
            y: 25,
            opacity: 0,
            scale: 0.95,
            rotationZ: 3
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationZ: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      }
      // Parallax effect for background gradient
      const bgGradient = document.querySelector('.bg-gradient-to-t');
      if (bgGradient) {
        gsap.to(bgGradient, {
          y: -25,
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c7a]/10 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl lg:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto opacity-90">
            Ready to start your next project? Let&apos;s discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <form ref={formRef} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#b8c5ff] mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#040422]/50 border border-[#7784e4]/30 rounded-lg text-white placeholder-[#b8c5ff]/50 focus:border-[#7784e4] focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[#b8c5ff] mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#040422]/50 border border-[#7784e4]/30 rounded-lg text-white placeholder-[#b8c5ff]/50 focus:border-[#7784e4] focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[#b8c5ff] mb-2 font-medium">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-[#040422]/50 border border-[#7784e4]/30 rounded-lg text-white placeholder-[#b8c5ff]/50 focus:border-[#7784e4] focus:outline-none transition-colors duration-300"
                placeholder="Project inquiry"
              />
            </div>
            
            <div>
              <label className="block text-[#b8c5ff] mb-2 font-medium">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-[#040422]/50 border border-[#7784e4]/30 rounded-lg text-white placeholder-[#b8c5ff]/50 focus:border-[#7784e4] focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="group w-full btn-primary flex items-center justify-center gap-3 hover:scale-105"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div className="bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 p-8 rounded-2xl neon-border">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1b1ac7] to-[#7784e4] rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[#b8c5ff] text-sm">Email</div>
                    <div className="text-white font-medium">hello@nexus.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1b1ac7] to-[#7784e4] rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[#b8c5ff] text-sm">Phone</div>
                    <div className="text-white font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1b1ac7] to-[#7784e4] rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[#b8c5ff] text-sm">Location</div>
                    <div className="text-white font-medium">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 p-8 rounded-2xl neon-border">
              <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
              <p className="text-[#b8c5ff] leading-relaxed">
                We typically respond to all inquiries within 24 hours. For urgent matters, 
                please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;