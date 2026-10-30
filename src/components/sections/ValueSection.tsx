'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import PurpleGlow from '@/components/ui/PurpleGlow';
import { valuePillars } from '@/lib/data';

function PillarIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    speed: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 32L18 8L22 20L34 12" stroke="#9B6DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="12" r="3" fill="#6C3BFF" />
      </svg>
    ),
    cost: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="14" width="28" height="18" rx="3" stroke="#9B6DFF" strokeWidth="2.5" fill="none" />
        <path d="M6 20H34" stroke="#6C3BFF" strokeWidth="2" />
        <path d="M14 8L20 14L26 8" stroke="#9B6DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    power: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="8" width="10" height="10" rx="2" stroke="#9B6DFF" strokeWidth="2.5" />
        <rect x="22" y="8" width="10" height="10" rx="2" stroke="#6C3BFF" strokeWidth="2.5" />
        <rect x="8" y="22" width="10" height="10" rx="2" stroke="#6C3BFF" strokeWidth="2.5" />
        <rect x="22" y="22" width="10" height="10" rx="2" stroke="#9B6DFF" strokeWidth="2.5" />
      </svg>
    ),
    growth: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 34L14 22L22 26L34 8" stroke="#9B6DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 8H34V16" stroke="#6C3BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };
  return <div className="mb-4">{icons[type]}</div>;
}

export default function ValueSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="value" className="relative py-24 sm:py-32">
      <PurpleGlow className="top-1/2 right-0 translate-x-1/2 -translate-y-1/2" size="md" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel number="02" label="القيمة" />

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-16"
        >
          <span className="block">مش لازم تشتغل أكتر</span>
          <span className="block text-brand-purple-glow mt-1">عشان تحقق أكتر.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {valuePillars.map((pillar, index) => (
            <GlassCard key={pillar.title} className="p-8" delay={index * 0.1}>
              <PillarIcon type={pillar.icon} />
              <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-brand-soft-white/60 text-sm leading-relaxed">{pillar.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
