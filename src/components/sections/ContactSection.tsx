'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="contact"
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
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(108,59,255,0.12) 0%, transparent 70%)',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 16 }}
          >
            <span className="section-label">07 / تواصل</span>
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
            عندك مشروع؟<br />
            <span style={{ color: '#9B6DFF' }}>نتكلم.</span>
          </motion.h2>

          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontSize: 18,
              color: 'rgba(245,243,250,0.7)',
              maxWidth: 550,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            سواء كان عندك فكرة، مشكلة محددة، أو مجرد سؤال — ابعت لينا وهنرد عليك.
          </motion.p>
        </div>

        {/* 3 Contact Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
            marginBottom: 40,
          }}
        >
          {/* Card 1: WhatsApp */}
          <motion.div
            className="glass-card"
            initial={prefersReduced ? false : { opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              padding: 28,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: 'rgba(34,197,94,0.1)',
                  border: '1px solid rgba(34,197,94,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#22C55E">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF', marginBottom: 6 }}>
                تواصل على واتساب
              </h3>
              <div style={{ height: 20, marginBottom: 20 }} />
            </div>

            <a
              href="https://wa.me/201007078085"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                width: '100%',
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #6C3BFF, #9B6DFF)',
                color: '#FFFFFF',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(108,59,255,0.35)',
              }}
            >
              ابدأ محادثة
            </a>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div
            className="glass-card"
            initial={prefersReduced ? false : { opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              padding: 28,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: 'rgba(108,59,255,0.15)',
                  border: '1px solid rgba(155,109,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                  <rect x="4" y="8" width="28" height="20" rx="4" stroke="#9B6DFF" strokeWidth="2" fill="rgba(108,59,255,0.1)"/>
                  <path d="M4 12 L18 20 L32 12" stroke="#9B6DFF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF', marginBottom: 6 }}>
                راسلنا على الإيميل
              </h3>
              <p style={{ color: 'rgba(245,243,250,0.5)', fontSize: 14, marginBottom: 20, direction: 'ltr' }}>
                othvm.me@gmail.com
              </p>
            </div>

            <a
              href="mailto:othvm.me@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                width: '100%',
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #6C3BFF, #9B6DFF)',
                color: '#FFFFFF',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(108,59,255,0.35)',
              }}
            >
              ابعت إيميل
            </a>
          </motion.div>

          {/* Card 3: Instagram */}
          <motion.div
            className="glass-card"
            initial={prefersReduced ? false : { opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              padding: 28,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: 'linear-gradient(135deg, rgba(131,58,180,0.15) 0%, rgba(253,29,29,0.15) 50%, rgba(252,176,69,0.15) 100%)',
                  border: '1px solid rgba(225,48,108,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="ig-grad-reborn" x1="0" y1="24" x2="24" y2="0">
                      <stop offset="0%" stopColor="#FD1D1D" />
                      <stop offset="50%" stopColor="#833AB4" />
                      <stop offset="100%" stopColor="#FCAF45" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    fill="url(#ig-grad-reborn)"
                  />
                </svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF', marginBottom: 6 }}>
                تابع OTHVM
              </h3>
              <p style={{ color: 'rgba(245,243,250,0.5)', fontSize: 14, marginBottom: 20, direction: 'ltr' }}>
                @othvmai
              </p>
            </div>

            <a
              href="https://www.instagram.com/othvmai/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                width: '100%',
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #6C3BFF, #9B6DFF)',
                color: '#FFFFFF',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(108,59,255,0.35)',
              }}
            >
              تابعنا
            </a>
          </motion.div>
        </div>

        <p style={{ textAlign: 'center', fontSize: 14, color: 'rgba(245,243,250,0.4)', margin: 0 }}>
          بنرد خلال 24 ساعة عادةً.
        </p>
      </div>
    </section>
  );
}
