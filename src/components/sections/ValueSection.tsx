'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { IconSpeed, IconCost, IconCapacity, IconGrowth } from '../ui/SvgIcons';

const values = [
  {
    icon: <IconSpeed />,
    title: 'سرعة أكبر',
    desc: 'أنجز المهام والعمليات بكفاءة أعلى.',
  },
  {
    icon: <IconCost />,
    title: 'تكلفة أقل',
    desc: 'قلّل الهدر والخطوات غير الضرورية.',
  },
  {
    icon: <IconCapacity />,
    title: 'قدرة أكبر',
    desc: 'أنجز شغل أكتر من غير ما تعتمد على مجهودك اليدوي.',
  },
  {
    icon: <IconGrowth />,
    title: 'فرص نمو أفضل',
    desc: 'وجّه وقتك ومواردك للحاجات اللي ممكن تطوّر البيزنس.',
  },
];

export default function ValueSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="value"
      ref={ref}
      style={{
        padding: '100px 24px',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Glow */}
      <div className="glow-orb" style={{
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(108,59,255,0.10) 0%, transparent 70%)',
        top: 0, right: -100,
      }} />

      <motion.div
        initial={prefersReduced ? false : { opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 16 }}
      >
        <span className="section-label">02 / القيمة</span>
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
        مش لازم تشتغل أكتر<br />
        <span style={{ color: '#9B6DFF' }}>عشان تحقق أكتر.</span>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 20,
        position: 'relative',
        zIndex: 1,
      }}>
        {values.map((v, i) => (
          <motion.div
            key={i}
            className="glass-card"
            initial={prefersReduced ? false : { opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            style={{ padding: 28 }}
          >
            <div style={{ marginBottom: 16 }}>{v.icon}</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginBottom: 8 }}>
              {v.title}
            </h3>
            <p style={{ color: 'rgba(245,243,250,0.65)', fontSize: 15, lineHeight: 1.7 }}>
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
