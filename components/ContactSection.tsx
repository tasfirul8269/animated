'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PlanetAnimation from './PlanetAnimation';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [formVisible, setFormVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(true);
  const [cardsVisible, setCardsVisible] = useState(true);
  const [bgOffset, setBgOffset] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    // Set mounted state to trigger initial animations
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    // Set up Intersection Observer for title
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger form and contact animations after a delay
            setTimeout(() => setFormVisible(true), 100);
            setTimeout(() => setContactVisible(true), 200);
            setTimeout(() => setCardsVisible(true), 300);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    // Parallax effect for background gradient
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollPosition = scrollY - sectionTop;
        
        if (scrollPosition > -sectionHeight && scrollPosition < sectionHeight * 2) {
          const offset = Math.min(Math.max((scrollY - sectionTop) * 0.1, -25), 0);
          setBgOffset(offset);
        }
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      clearTimeout(timer);
      if (titleObserver) titleObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-container relative overflow-hidden">
      {/* Background gradient with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#0c0c7a]/10 to-transparent transition-transform duration-300 will-change-transform"
        style={{ transform: `translate3d(0, ${bgOffset}px, 0)` }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef} 
            className={`text-4xl lg:text-6xl font-bold mb-6 transition-all duration-700 ease-out transform ${
              isMounted ? 'opacity-100 translate-y-0 scale-100 rotate-x-0' : 'opacity-0 translate-y-10 scale-95 rotate-x-8'
            }`}
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p 
            className={`text-xl text-[#b8c5ff] max-w-3xl mx-auto transition-all duration-700 ease-out delay-100 ${
              isMounted ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Ready to start your next project? Let&apos;s discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <form 
            ref={formRef} 
            className={`space-y-6 transition-all duration-700 ease-out delay-200 ${
              isMounted ? 'opacity-100' : 'opacity-0'
            }`}
          >
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
              className={`group w-full btn-primary flex items-center justify-center gap-3 transition-all duration-300 ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div 
            ref={contactInfoRef} 
            className={`space-y-8 transition-all duration-700 ease-out delay-300 ${
              isMounted ? 'opacity-100' : 'opacity-0'
            }`}
          >
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