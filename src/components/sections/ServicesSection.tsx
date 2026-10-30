'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import CTAButton from '@/components/ui/CTAButton';
import PurpleGlow from '@/components/ui/PurpleGlow';
import { services } from '@/lib/data';

function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    automation: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="#9B6DFF" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M16 24L22 30L32 18" stroke="#6C3BFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    integration: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="14" cy="14" r="6" stroke="#9B6DFF" strokeWidth="2" />
        <circle cx="34" cy="14" r="6" stroke="#9B6DFF" strokeWidth="2" />
        <circle cx="24" cy="34" r="6" stroke="#6C3BFF" strokeWidth="2" />
        <path d="M18 18L22 30M30 18L26 30" stroke="#9B6DFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    smart: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="10" width="24" height="28" rx="4" stroke="#9B6DFF" strokeWidth="2" />
        <circle cx="24" cy="24" r="6" stroke="#6C3BFF" strokeWidth="2" />
        <path d="M24 18V20M24 28V30M18 24H20M28 24H30" stroke="#6C3BFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    custom: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M14 10L24 6L34 10V26L24 38L14 26V10Z" stroke="#9B6DFF" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 18V28M19 23H29" stroke="#6C3BFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  };
  return <div className="mb-5">{icons[type]}</div>;
}

export default function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <PurpleGlow className="top-0 left-0 -translate-x-1/3 -translate-y-1/3" size="md" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel number="03" label="الخدمات" />

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        >
          <span className="block">عندك هدف أو مشكلة في شغلك؟</span>
          <span className="block text-brand-purple-glow mt-1">نصمّم حلولاً تناسب احتياجك الفعلي.</span>
        </motion.h2>

        <div className="h-px bg-white/[0.06] my-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <GlassCard key={service.title} className="p-8 sm:p-10" delay={index * 0.1}>
              <ServiceIcon type={service.icon} />
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-brand-soft-white/60 text-sm leading-relaxed mb-5">{service.description}</p>
              <span className="text-brand-purple text-sm font-medium cursor-pointer hover:text-brand-purple-glow transition-colors">
                اعرف أكتر ←
              </span>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <CTAButton href="#contact" variant="primary">
            ناقش مشروعك معنا
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
