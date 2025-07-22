'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'UI/UX', href: '/uiux' },
    { name: 'SEO', href: '/seo' },
    { name: 'Web Development', href: '/web-development' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-6 px-2">
      <div className="flex items-center justify-between px-6 py-2 rounded-full bg-[#2a1850]/60 backdrop-blur-lg border border-[#a78bfa]/30 shadow-lg max-w-4xl w-full mx-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg whitespace-nowrap">
          <span className="text-2xl">✴️</span>
            NEXUS
          </Link>
          {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
              className="text-white/80 hover:text-white transition font-medium"
              >
                {item.name}
              </Link>
            ))}
          <button className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-purple-500 transition">
            Get Started
          </button>
        </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-20 mx-auto max-w-2xl bg-[#2a1850]/60 backdrop-blur-lg border border-[#a78bfa]/30 shadow-lg rounded-2xl p-6 z-50 flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
              className="block py-2 text-white/90 hover:text-white text-lg font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          <button className="w-full mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-purple-500 transition">
              Get Started
            </button>
          </div>
        )}
    </nav>
  );
};

export default Navigation;