'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
}

export default function ServiceHero({ title, description, imageSrc, videoSrc }: ServiceHeroProps) {
  // Animation variants with proper TypeScript types
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0613] to-[#0c0c7a]/10">
      {/* Video or image background */}
      {videoSrc ? (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-[#0a0613]/80 z-10" />
        </>
      ) : imageSrc ? (
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0613]/80 z-10" />
        </div>
      ) : null}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-xl text-[#b8c5ff] mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <button className="bg-[#7784e4] hover:bg-[#5f6bc9] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 transform">
                Get Started
              </button>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            {/* Empty for now, or could add overlay content if needed */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
