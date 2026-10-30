'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#' || href === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator (ENHANCE 4) */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #6C3BFF, #9B6DFF)',
          transition: 'width 0.1s linear',
        }}
        aria-hidden="true"
      />

      {/* Navbar Container (ENHANCE 1, ENHANCE 3) */}
      <motion.nav
        initial={prefersReducedMotion ? {} : { y: -20, opacity: 0 }}
        animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090D]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Right side in RTL */}
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, '#')}
              className="flex-shrink-0 flex items-center gap-3 group"
              aria-label="OTHVM الرئيسية"
            >
              <Image
                src="/logo/OTHVM.png"
                alt="OTHVM"
                width={44}
                height={44}
                className="rounded-lg invert transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-brand-soft-white/70 hover:text-white text-sm font-medium transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(155,109,255,0.5)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-xl bg-brand-purple text-white text-sm font-bold hover:bg-brand-purple/90 hover:shadow-[0_0_25px_rgba(108,59,255,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              ناقش مشروعك
            </a>

            {/* Mobile Hamburger (FIX 18) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-white hover:bg-white/[0.05] transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (FIX 18) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
              animate={prefersReducedMotion ? {} : { height: 'auto', opacity: 1 }}
              exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-[#09090D]/95 backdrop-blur-2xl border-b border-white/[0.08]"
            >
              <div className="px-6 py-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block text-brand-soft-white/80 hover:text-white text-base font-medium py-2 px-3 rounded-lg hover:bg-white/[0.04] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, '#contact')}
                    className="block w-full text-center py-3 rounded-xl bg-brand-purple text-white text-sm font-bold hover:bg-brand-purple/90 transition-all shadow-lg shadow-brand-purple/20"
                  >
                    ناقش مشروعك
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
