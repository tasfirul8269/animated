'use client';

import { Award, Users, Zap, Target, Linkedin, Twitter, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import ScrollAnimation from './ScrollAnimation';
import StaggerItem from './StaggerItem';

const AboutSection = () => {
  // Generate particles effect similar to HeroSection
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: number;
    top: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate particles on client side
    const newParticles = Array.from({ length: 20 }, () => ({
      width: Math.random() * 5 + 2,
      height: Math.random() * 5 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
    }));
    setParticles(newParticles);
  }, []);
  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Zap className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0613] to-[#0c0c7a]/10">
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="particle"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            top: '10%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle at 30% 30%, #a78bfa 0%, transparent 70%)',
            opacity: 0.7,
            filter: 'blur(80px)'
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: '0%',
            right: '10%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle at 70% 70%, #1b1ac7 0%, transparent 70%)',
            opacity: 0.6,
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation duration={0.7} delay={0.1} direction="up" once={false}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">NEXUS</span>
            </h2>
            <p className="text-xl text-[#b8c5ff] max-w-3xl mx-auto opacity-90">
              Building the future of digital experiences
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <ScrollAnimation duration={0.7} delay={0.2} direction="up" once={false}>
            <div className="space-y-6">
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
          </ScrollAnimation>

          {/* Right side content instead of planet */}
          <ScrollAnimation duration={0.7} delay={0.3} direction="left" once={false}>
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
          </ScrollAnimation>
        </div>

        {/* Stats */}
        <ScrollAnimation duration={0.7} delay={0.4} once={false} staggerChildren={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index} index={index}>
                <div className="text-center p-8 bg-gradient-to-br from-[#040422] to-[#0c0c7a]/20 rounded-2xl neon-border card-hover card-3d">
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
              </StaggerItem>
            ))}
          </div>
        </ScrollAnimation>

        {/* Founders Section */}
        <div className="mt-24">
          <ScrollAnimation duration={0.7} delay={0.1} direction="up" once={false}>
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
              Meet Our <span className="gradient-text">Founders</span>
            </h2>
          </ScrollAnimation>

          {/* Founder 1 - Image Left */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollAnimation duration={0.7} delay={0.2} direction="left" once={false}>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop&crop=faces" 
                    alt="Sarah Johnson - CEO & Co-Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation duration={0.7} delay={0.3} direction="right" once={false}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Sarah Johnson</h3>
                  <p className="text-[#7784e4] text-lg">CEO & Co-Founder</p>
                </div>
                <p className="text-[#b8c5ff] leading-relaxed">
                  With over 12 years of experience in digital strategy and creative direction, Sarah leads our team with a vision for innovation and excellence. Her expertise in user experience design has helped shape products used by millions worldwide.
                </p>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-[#b8c5ff] hover:text-[#7784e4] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-[#b8c5ff] hover:text-[#7784e4] transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-[#b8c5ff] hover:text-[#7784e4] transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Founder 2 - Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation duration={0.7} delay={0.2} direction="left" once={false} className="lg:order-2">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop&crop=faces" 
                    alt="Michael Chen - CTO & Co-Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation duration={0.7} delay={0.3} direction="right" once={false} className="lg:order-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Michael Chen</h3>
                  <p className="text-[#7784e4] text-lg">CTO & Co-Founder</p>
                </div>
                <p className="text-[#b8c5ff] leading-relaxed">
                  A tech visionary with 15+ years in software development, Michael drives our technical innovation. His expertise in emerging technologies and scalable architecture ensures our solutions are built to last and perform at scale.
                </p>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-[#b8c5ff] hover:text-[#7784e4] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-[#b8c5ff] hover:text-[#7784e4] transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-[#b8c5ff] hover:text-[#7784e4] transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;