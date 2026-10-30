'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import PurpleGlow from '@/components/ui/PurpleGlow';
import { valuePillars } from '@/lib/data';

function ValuePillarIcon({ type }: { type: string }) {
  // FIX 2: All icons: 48px × 48px, color #9B6DFF, with subtle glow: filter: drop-shadow(0 0 8px rgba(108,59,255,0.6))
  const iconStyle = { filter: 'drop-shadow(0 0 8px rgba(108,59,255,0.6))' };

  if (type === 'speed') {
    // 1. سرعة أكبر → A diagonal arrow/lightning bolt made of two rectangles at 45°
    return (
      <div className="mb-6 w-12 h-12 flex items-center justify-center" style={iconStyle}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Rectangle 1 top at 45 deg */}
          <rect x="22" y="6" width="9" height="20" rx="2" transform="rotate(45 22 6)" fill="#9B6DFF" />
          {/* Rectangle 2 bottom at 45 deg */}
          <rect x="12" y="18" width="9" height="20" rx="2" transform="rotate(45 12 18)" fill="#6C3BFF" />
          {/* Arrow point accent */}
          <polygon points="38,10 42,14 36,18" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>
    );
  }

  if (type === 'cost') {
    // 2. تكلفة أقل → A minimalist downward arrow with a horizontal line
    return (
      <div className="mb-6 w-12 h-12 flex items-center justify-center" style={iconStyle}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <line x1="8" y1="12" x2="40" y2="12" stroke="#9B6DFF" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 16V36M15 27L24 36L33 27" stroke="#9B6DFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="12" r="3" fill="#6C3BFF" />
        </svg>
      </div>
    );
  }

  if (type === 'power') {
    // 3. قدرة أكبر → Concentric expanding squares (3 nested squares, each offset)
    return (
      <div className="mb-6 w-12 h-12 flex items-center justify-center" style={iconStyle}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Outer square */}
          <rect x="6" y="6" width="36" height="36" rx="4" stroke="#9B6DFF" strokeWidth="2.5" fill="none" opacity="0.4" />
          {/* Middle square offset */}
          <rect x="12" y="12" width="26" height="26" rx="3" stroke="#9B6DFF" strokeWidth="2.5" fill="none" opacity="0.75" />
          {/* Inner core square */}
          <rect x="18" y="18" width="16" height="16" rx="2" stroke="#FFFFFF" strokeWidth="2.5" fill="rgba(108,59,255,0.3)" />
        </svg>
      </div>
    );
  }

  // 4. فرص نمو أفضل → An ascending staircase of 3 small squares
  return (
    <div className="mb-6 w-12 h-12 flex items-center justify-center" style={iconStyle}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        {/* Step 1 */}
        <rect x="8" y="28" width="10" height="12" rx="2" fill="#9B6DFF" opacity="0.5" />
        {/* Step 2 */}
        <rect x="20" y="19" width="10" height="21" rx="2" fill="#9B6DFF" opacity="0.8" />
        {/* Step 3 */}
        <rect x="32" y="10" width="10" height="30" rx="2" fill="#9B6DFF" />
        {/* Growth line indicator */}
        <path d="M12 24L24 15L36 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <polyline points="32,6 36,6 36,10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function ValueSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="value" className="relative py-24 sm:py-32 overflow-hidden">
      {/* FIX 10: Value section: Medium glow (500px) positioned top-right, rgba(108,59,255,0.10) */}
      <PurpleGlow
        size={500}
        color="rgba(108, 59, 255, 0.10)"
        className="top-0 right-0 translate-x-1/3 -translate-y-1/4"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIX 6: Section label formatted with spaces "02 / القيمة" */}
        <SectionLabel number="02" label="القيمة" />

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-16 text-white"
        >
          <span className="block">مش لازم تشتغل أكتر</span>
          <span className="block text-brand-purple-glow mt-1">عشان تحقق أكتر.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {valuePillars.map((pillar, index) => (
            <GlassCard key={pillar.title} className="p-8 sm:p-10" delay={index * 0.1}>
              <ValuePillarIcon type={pillar.icon} />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-brand-soft-white/70 text-base leading-relaxed">{pillar.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
