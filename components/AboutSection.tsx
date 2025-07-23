'use client';

import { Award, Users, Zap, Target } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import StaggerItem from './StaggerItem';

const AboutSection = () => {
  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Zap className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <section className="section-container relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-[#7784e4]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#1b1ac7]/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
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
      </div>
    </section>
  );
};

export default AboutSection;