'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { IconAutomation, IconIntegration, IconAI, IconCustom } from '../ui/SvgIcons';

const services = [
  {
    icon: <IconAutomation />,
    title: 'أتمتة العمليات',
    desc: 'تقليل العمل اليدوي وتسريع تنفيذ المهام اليومية في شغلك.',
  },
  {
    icon: <IconIntegration />,
    title: 'ربط الأنظمة والأدوات',
    desc: 'خلّي بياناتك وعملياتك تشتغل مع بعض بدل التشتت بين أدوات منفصلة.',
  },
  {
    icon: <IconAI />,
    title: 'حلول ومساعدات ذكية',
    desc: 'أنظمة تنفّذ مهام محددة وتساعدك في إدارة الشغل بشكل أذكى.',
  },
  {
    icon: <IconCustom />,
    title: 'أدوات مخصصة',
    desc: 'حلول تُبنى حسب طبيعة مشروعك — مش قالب واحد للجميع.',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: '100px 24px',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Glow */}
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(108,59,255,0.10) 0%, transparent 70%)',
          bottom: -100,
          left: -100,
        }}
      />

      <motion.div
        initial={prefersReduced ? false : { opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 16 }}
      >
        <span className="section-label">03 / الخدمات</span>
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
        عندك هدف أو مشكلة في شغلك؟<br />
        <span style={{ color: '#9B6DFF' }}>نصمّم حلولاً تناسب احتياجك الفعلي.</span>
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          position: 'relative',
          zIndex: 1,
          marginBottom: 50,
        }}
      >
        {services.map((s, i) => (
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
              <div style={{ marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ color: 'rgba(245,243,250,0.65)', fontSize: 15, lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </div>
            <div>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#9B6DFF',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginTop: 20,
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
                onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
              >
                اعرف أكتر
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8 L13 8 M9 4 L13 8 L9 12" stroke="#9B6DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Centered CTA button */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
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
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 32px rgba(108,59,255,0.6)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(108,59,255,0.4)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          ناقش مشروعك معنا
        </a>
      </div>
    </section>
  );
}
