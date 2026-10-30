'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'الخدمات', href: '#services' },
    { label: 'الأعمال', href: '#work' },
    { label: 'المنتجات', href: '#products' },
    { label: 'عن OTHVM', href: '#about' },
    { label: 'تواصل', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 68,
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(9,9,13,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#home" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Image src="/logo/OTHVM.png" alt="OTHVM" width={44} height={44} style={{ borderRadius: 10 }} priority />
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} style={{
                color: 'rgba(245,243,250,0.7)',
                textDecoration: 'none',
                fontSize: 15,
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5F3FA')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,243,250,0.7)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#contact" className="desktop-nav" style={{
            padding: '10px 22px',
            background: 'linear-gradient(135deg, #6C3BFF, #9B6DFF)',
            color: '#FFFFFF',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 14,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>
            ناقش مشروعك
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'none', /* shown via CSS media query */
            }}
            aria-label="القائمة"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path d="M6 6 L18 18 M18 6 L6 18" stroke="#F5F3FA" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                <>
                  <path d="M4 6 L20 6" stroke="#F5F3FA" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 12 L20 12" stroke="#F5F3FA" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 18 L20 18" stroke="#F5F3FA" strokeWidth="2" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 68,
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'rgba(9,9,13,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                color: 'rgba(245,243,250,0.8)',
                textDecoration: 'none',
                fontSize: 18,
                fontWeight: 600,
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              marginTop: 20,
              padding: '14px',
              background: 'linear-gradient(135deg, #6C3BFF, #9B6DFF)',
              color: '#FFFFFF',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            ناقش مشروعك
          </a>
        </div>
      )}
    </>
  );
}
