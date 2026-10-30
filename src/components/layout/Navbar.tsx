'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      animate={prefersReducedMotion ? {} : { opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Right side in RTL */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo/OTHVM.png"
              alt="OTHVM"
              width={48}
              height={48}
              className="rounded-lg invert"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-soft-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-xl bg-brand-purple text-white text-sm font-bold hover:bg-brand-purple/90 hover:shadow-[0_0_20px_rgba(108,59,255,0.4)] transition-all duration-300"
          >
            ناقش مشروعك
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="القائمة"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? {} : { height: 'auto', opacity: 1 }}
            exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-brand-soft-white/80 hover:text-white text-base font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block w-full text-center mt-4 px-5 py-3 rounded-xl bg-brand-purple text-white text-sm font-bold hover:bg-brand-purple/90 transition-all"
              >
                ناقش مشروعك
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
