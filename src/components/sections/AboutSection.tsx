'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '100px 24px',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(108,59,255,0.10) 0%, transparent 70%)',
          top: 0,
          right: -100,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 16 }}
        >
          <span className="section-label">06 / عن OTHVM</span>
        </motion.div>

        <motion.h2
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 900,
            lineHeight: 1.3,
            marginBottom: 60,
            color: '#FFFFFF',
          }}
        >
          تكنولوجيا تشتغل ليك.<br />
          <span style={{ color: '#9B6DFF' }}>مش العكس.</span>
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 40,
            alignItems: 'center',
          }}
        >
          {/* Brand Philosophy — Right in RTL */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontSize: 18,
              color: 'rgba(245,243,250,0.8)',
              lineHeight: 1.9,
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#FFFFFF' }} className="ltr-text">OTHVM</strong> علامة تجارية مستقلة متخصصة في تقديم حلول تكنولوجية عملية للشركات والأفراد.
            </p>
            <p style={{ margin: 0 }}>
              مش بنبيع أدوات. بنحلّ مشاكل. بنفهم احتياجك الحقيقي ونصمم حلاً يناسبه — سواء كان أتمتة، ربط أنظمة، أو بناء أداة مخصصة من الصفر.
            </p>
            <p style={{ margin: 0 }}>
              الهدف دايماً واحد: إنك تشتغل بكفاءة أعلى وتوصل لأهدافك بسرعة أكبر.
            </p>
          </motion.div>

          {/* Founder Card — Left in RTL */}
          <motion.div
            className="glass-card"
            initial={prefersReduced ? false : { opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              padding: '36px 28px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Styled Founder Photo Placeholder */}
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(108,59,255,0.35), rgba(155,109,255,0.12))',
                border: '2px solid rgba(155,109,255,0.4)',
                boxShadow: '0 0 30px rgba(108,59,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: 'rgba(155,109,255,0.7)',
                  fontFamily: 'Noto Kufi Arabic, sans-serif',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                ع
              </span>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(245,243,250,0.35)', margin: '0 0 20px' }}>
              صورة المؤسس — قريباً
            </p>

            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#FFFFFF', margin: '0 0 6px' }}>
              عثمان محمد
            </h3>
            <p style={{ color: '#9B6DFF', fontSize: 14, fontWeight: 600, margin: '0 0 12px' }}>
              مؤسس <span className="ltr-text">OTHVM</span>
            </p>
            <p style={{ color: 'rgba(245,243,250,0.65)', fontSize: 14, lineHeight: 1.6, margin: '0 0 24px', maxWidth: 280 }}>
              بيؤمن إن التكنولوجيا لازم تخدم الناس، مش العكس.
            </p>

            <a
              href="https://www.instagram.com/othvm_/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 20px',
                borderRadius: 20,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(245,243,250,0.8)',
                fontSize: 14,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,59,255,0.5)';
                (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(245,243,250,0.8)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="ltr-text">@othvm_</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
