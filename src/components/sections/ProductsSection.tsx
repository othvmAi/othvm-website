'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { products } from '@/lib/data';

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="products"
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
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(108,59,255,0.18) 0%, transparent 70%)',
          bottom: -100,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 16 }}
        >
          <span className="section-label">05 / المنتجات الرقمية</span>
        </motion.div>

        <motion.h2
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 900,
            lineHeight: 1.3,
            marginBottom: 16,
            color: '#FFFFFF',
          }}
        >
          عايز تستفيد من <span className="ltr-text">AI</span> بنفسك؟<br />
          <span style={{ color: '#9B6DFF' }}>مش كل هدف محتاج خدمة مخصصة.</span>
        </motion.h2>

        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            fontSize: 18,
            color: 'rgba(245,243,250,0.7)',
            maxWidth: 700,
            marginBottom: 40,
            lineHeight: 1.7,
          }}
        >
          بنجهّز منتجات رقمية تساعدك تفهم الذكاء الاصطناعي، تستخدمه بوعي، وتستكشف طرق تحويله لأفكار ومشروعات عملية.
        </motion.p>

        {/* Center Tagline */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h3 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
            تعلّم. جرّب. <span style={{ color: '#9B6DFF' }}>وابن فرصتك.</span>
          </h3>
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 28,
            marginBottom: 40,
          }}
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="glass-card"
              initial={prefersReduced ? false : { opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              style={{
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Premium Book Cover Mockup */}
              <div className="book-cover" style={{ marginBottom: 24 }}>
                <div
                  style={{
                    height: '100%',
                    padding: '16px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 9, letterSpacing: '0.15em', color: '#9B6DFF', fontWeight: 700, fontFamily: 'Space Grotesk, monospace' }}>
                      OTHVM
                    </span>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#9B6DFF' }} />
                  </div>

                  <div style={{ padding: '8px 0' }}>
                    <h4 style={{ fontSize: 16, fontWeight: 900, color: '#FFFFFF', margin: '0 0 8px', lineHeight: 1.3 }}>
                      {p.title}
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                      <span style={{ width: 12, height: 2, background: 'rgba(155,109,255,0.4)', borderRadius: 2 }} />
                      <span style={{ width: 20, height: 2, background: '#9B6DFF', borderRadius: 2 }} />
                      <span style={{ width: 12, height: 2, background: 'rgba(155,109,255,0.4)', borderRadius: 2 }} />
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: 8, letterSpacing: '0.12em', color: 'rgba(155,109,255,0.8)', fontWeight: 600, fontFamily: 'Space Grotesk, monospace' }}>
                      OTHVM EDITION
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 14px',
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 700,
                  marginBottom: 14,
                  background: 'rgba(108,59,255,0.15)',
                  color: '#9B6DFF',
                  border: '1px solid rgba(155,109,255,0.3)',
                }}
              >
                {p.status}
              </span>

              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#FFFFFF', marginBottom: 4 }}>
                &ldquo;{p.title}&rdquo;
              </h3>
              <p style={{ color: '#9B6DFF', fontSize: 14, fontWeight: 600, marginBottom: 12 }}>
                {p.subtitle}
              </p>
              <p style={{ color: 'rgba(245,243,250,0.65)', fontSize: 14, lineHeight: 1.7, marginBottom: 24, maxWidth: 360 }}>
                {p.description}
              </p>

              <a
                href="#contact"
                style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  background: 'transparent',
                  color: '#F5F3FA',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,59,255,0.6)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(108,59,255,0.1)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                سجّل اهتمامك
              </a>
            </motion.div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: 'rgba(245,243,250,0.4)', margin: 0 }}>
          المنتجات قيد التطوير حالياً. سيتم الإعلان عن تاريخ الإطلاق قريباً.
        </p>
      </div>
    </section>
  );
}
