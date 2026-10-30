'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import CTAButton from '@/components/ui/CTAButton';
import PurpleGlow from '@/components/ui/PurpleGlow';
import { services } from '@/lib/data';

function ServiceIconItem({ type }: { type: string }) {
  // FIX 2: 48px × 48px, color #9B6DFF, with subtle glow: filter: drop-shadow(0 0 8px rgba(108,59,255,0.6))
  const iconStyle = { filter: 'drop-shadow(0 0 8px rgba(108,59,255,0.6))' };

  if (type === 'automation') {
    // 1. أتمتة العمليات → Interlocking circular arrows (SVG path, simplified)
    return (
      <div className="mb-6 w-12 h-12 flex items-center justify-center" style={iconStyle}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Circular arrow 1 */}
          <path d="M24 8 A16 16 0 0 1 39 20" stroke="#9B6DFF" strokeWidth="3" strokeLinecap="round" />
          <polygon points="43,15 39,22 34,17" fill="#9B6DFF" />
          {/* Circular arrow 2 */}
          <path d="M24 40 A16 16 0 0 1 9 28" stroke="#9B6DFF" strokeWidth="3" strokeLinecap="round" />
          <polygon points="5,33 9,26 14,31" fill="#9B6DFF" />
          {/* Center node */}
          <circle cx="24" cy="24" r="4" fill="#6C3BFF" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }

  if (type === 'integration') {
    // 2. ربط الأنظمة والأدوات → Three circles connected by lines (network/hub shape)
    return (
      <div className="mb-6 w-12 h-12 flex items-center justify-center" style={iconStyle}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <line x1="24" y1="12" x2="12" y2="34" stroke="#9B6DFF" strokeWidth="2.5" />
          <line x1="24" y1="12" x2="36" y2="34" stroke="#9B6DFF" strokeWidth="2.5" />
          <line x1="12" y1="34" x2="36" y2="34" stroke="#9B6DFF" strokeWidth="2.5" />
          <circle cx="24" cy="12" r="6" fill="#09090D" stroke="#9B6DFF" strokeWidth="3" />
          <circle cx="12" cy="34" r="6" fill="#09090D" stroke="#9B6DFF" strokeWidth="3" />
          <circle cx="36" cy="34" r="6" fill="#09090D" stroke="#9B6DFF" strokeWidth="3" />
          <circle cx="24" cy="26" r="3" fill="#6C3BFF" />
        </svg>
      </div>
    );
  }

  if (type === 'smart') {
    // 3. حلول ومساعدات ذكية → Layered horizontal rectangles (stack icon)
    return (
      <div className="mb-6 w-12 h-12 flex items-center justify-center" style={iconStyle}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M8 16 L24 8 L40 16 L24 24 Z" stroke="#9B6DFF" strokeWidth="2.5" fill="rgba(155,109,255,0.2)" strokeLinejoin="round" />
          <path d="M8 24 L24 32 L40 24" stroke="#9B6DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 32 L24 40 L40 32" stroke="#9B6DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="16" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>
    );
  }

  // 4. أدوات مخصصة → A cube outline (6-sided, isometric projection)
  return (
    <div className="mb-6 w-12 h-12 flex items-center justify-center" style={iconStyle}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 6 L40 15 L40 33 L24 42 L8 33 L8 15 Z" stroke="#9B6DFF" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(108,59,255,0.15)" />
        <path d="M24 6 L24 24 M40 15 L24 24 M8 15 L24 24" stroke="#9B6DFF" strokeWidth="2" strokeLinejoin="round" />
        <line x1="24" y1="24" x2="24" y2="42" stroke="#9B6DFF" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

export default function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* FIX 10: Services section: Medium glow (500px) positioned bottom-left, rgba(108,59,255,0.10) */}
      <PurpleGlow
        size={500}
        color="rgba(108, 59, 255, 0.10)"
        className="bottom-0 left-0 -translate-x-1/3 translate-y-1/4"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIX 6: Section label formatted with spaces "03 / الخدمات" */}
        <SectionLabel number="03" label="الخدمات" />

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white"
        >
          <span className="block">عندك هدف أو مشكلة في شغلك؟</span>
          <span className="block text-brand-purple-glow mt-1">نصمّم حلولاً تناسب احتياجك الفعلي.</span>
        </motion.h2>

        <div className="h-px bg-white/[0.06] my-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <GlassCard key={service.title} className="p-8 sm:p-10 flex flex-col justify-between group" delay={index * 0.1}>
              <div>
                <ServiceIconItem type={service.icon} />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-brand-soft-white/70 text-base leading-relaxed mb-6">{service.description}</p>
              </div>

              {/* FIX 7: RTL-aware forward chevron */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-brand-purple-glow text-sm font-semibold hover:text-white transition-colors"
                >
                  <span>اعرف أكتر</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform transition-transform group-hover:-translate-x-1"
                  >
                    <polyline points="10 4 6 8 10 12" />
                  </svg>
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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
