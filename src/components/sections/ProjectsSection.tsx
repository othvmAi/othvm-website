'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/lib/data';

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="work"
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
          bottom: 0,
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
          <span className="section-label">04 / الأعمال</span>
        </motion.div>

        <motion.h2
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 900,
            lineHeight: 1.3,
            marginBottom: 12,
            color: '#FFFFFF',
          }}
        >
          شغل حقيقي.<br />
          <span style={{ color: '#9B6DFF' }}>نتائج ملموسة.</span>
        </motion.h2>

        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            fontSize: 18,
            color: 'rgba(245,243,250,0.7)',
            marginBottom: 30,
            maxWidth: 600,
          }}
        >
          مجموعة من التجارب العملية والمشاريع اللي اشتغلنا عليها.
        </motion.p>

        {/* Disclaimer Banner */}
        <div
          className="glass-card"
          style={{
            padding: '16px 20px',
            marginBottom: 40,
            maxWidth: 700,
            borderColor: 'rgba(155,109,255,0.25)',
          }}
        >
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(245,243,250,0.65)', lineHeight: 1.6 }}>
            ⚡ كل المشاريع المعروضة هنا إما تجارب شخصية أو نماذج أولية — مش مشاريع عملاء حقيقيين في هذه المرحلة.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
            marginBottom: 60,
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="glass-card"
              initial={prefersReduced ? false : { opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Status Badge */}
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                    marginBottom: 16,
                    background: 'rgba(245, 158, 11, 0.1)',
                    color: '#FBBF24',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                  }}
                >
                  {p.status}
                </span>

                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>
                  {p.title}
                </h3>

                <div style={{ marginBottom: 12 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#9B6DFF', display: 'block', marginBottom: 4 }}>
                    المشكلة:
                  </span>
                  <p style={{ fontSize: 14, color: 'rgba(245,243,250,0.65)', lineHeight: 1.6, margin: 0 }}>
                    {p.problem}
                  </p>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#9B6DFF', display: 'block', marginBottom: 4 }}>
                    الحل:
                  </span>
                  <p style={{ fontSize: 14, color: 'rgba(245,243,250,0.65)', lineHeight: 1.6, margin: 0 }}>
                    {p.solution}
                  </p>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                  {p.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="ltr-text"
                      style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        fontSize: 12,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: 'rgba(245,243,250,0.6)',
                        fontFamily: 'Space Grotesk, sans-serif',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* STEP 4: Disabled placeholder project button */}
              <div>
                <button
                  disabled
                  style={{
                    width: '100%',
                    padding: '10px 20px',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 8,
                    color: 'rgba(245,243,250,0.35)',
                    fontSize: 14,
                    cursor: 'not-allowed',
                    fontFamily: 'inherit',
                  }}
                >
                  عرض المشروع — قريباً
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>
            عندك مشروع في دماغك؟
          </h3>
          <p style={{ fontSize: 16, color: 'rgba(245,243,250,0.65)', marginBottom: 24 }}>
            نتكلم ونشوف إيه الممكن.
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              background: 'linear-gradient(135deg, #6C3BFF, #9B6DFF)',
              color: '#FFFFFF',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(108,59,255,0.4)',
              transition: 'all 0.3s ease',
            }}
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
}
