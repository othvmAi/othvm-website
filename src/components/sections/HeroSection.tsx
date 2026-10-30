'use client';

import { motion, useReducedMotion } from 'framer-motion';
import CTAButton from '@/components/ui/CTAButton';
import SectionLabel from '@/components/ui/SectionLabel';

interface PanelConfig {
  w: number;
  h: number;
  bottom: number;
  left: number;
  tz: number;
  delay: number;
}

const panels: PanelConfig[] = [
  { w: 80, h: 60, bottom: 40, left: 30, tz: 0, delay: 0 },
  { w: 100, h: 75, bottom: 95, left: 75, tz: 25, delay: 0.4 },
  { w: 120, h: 90, bottom: 155, left: 120, tz: 50, delay: 0.8 },
  { w: 140, h: 105, bottom: 220, left: 165, tz: 75, delay: 1.2 },
  { w: 160, h: 120, bottom: 285, left: 210, tz: 100, delay: 1.6 },
];

function CrystalPanelItem({ p }: { p: PanelConfig }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        prefersReducedMotion
          ? {}
          : {
              y: [0, -10, 0],
            }
      }
      transition={{
        duration: 3.5,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: p.delay,
      }}
      className="absolute"
      style={{
        width: `${p.w}px`,
        height: `${p.h}px`,
        bottom: `${p.bottom}px`,
        left: `${p.left}px`,
        transform: `rotateY(-15deg) rotateX(8deg) translateZ(${p.tz}px)`,
        background: 'linear-gradient(135deg, rgba(108,59,255,0.2), rgba(155,109,255,0.08))',
        border: '1px solid rgba(155,109,255,0.35)',
        boxShadow: '0 8px 32px rgba(108,59,255,0.25), inset 0 1px 0 rgba(255,255,255,0.15)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '8px',
      }}
    >
      {/* Specular inner light edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-purple-glow/60 shadow-[0_0_6px_#9B6DFF]" />
    </motion.div>
  );
}

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:py-0">
      {/* FIX 10: Hero Large radial purple glow (700px) positioned bottom-left */}
      <div
        className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 rounded-full pointer-events-none -z-0"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(108,59,255,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Text Content - Right side in RTL (Desktop col 1) */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            {/* ENHANCE 1: Hero label "01 / الرئيسية" */}
            <SectionLabel number="01" label="الرئيسية" delay={0.2} />

            {/* Headline line 1 & line 2 */}
            <div className="space-y-2">
              <motion.h1
                initial={prefersReducedMotion ? {} : { y: 40, opacity: 0 }}
                animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
              >
                التكنولوجيا مش مجرد أدوات.
              </motion.h1>

              <motion.h2
                initial={prefersReducedMotion ? {} : { y: 40, opacity: 0 }}
                animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-brand-purple-glow"
              >
                دي فرصة تشتغل بقوة أكبر.
              </motion.h2>
            </div>

            {/* Sub-headline */}
            <motion.p
              initial={prefersReducedMotion ? {} : { y: 20, opacity: 0 }}
              animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
              className="text-brand-soft-white/75 text-lg sm:text-xl leading-relaxed max-w-xl"
            >
              نحوّل التكنولوجيا لحلول عملية تساعدك تطوّر شغلك وتوصل لأهدافك بكفاءة أعلى.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={prefersReducedMotion ? {} : { scale: 0.9, opacity: 0 }}
              animate={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.75, ease: 'easeOut' }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <CTAButton href="#contact" variant="primary">
                ناقش مشروعك
              </CTAButton>
              <CTAButton href="#services" variant="ghost">
                استكشف الخدمات
              </CTAButton>
            </motion.div>
          </div>

          {/* 3D Crystal Visual - Left side in RTL (Desktop col 2, Mobile order-1) */}
          <motion.div
            initial={prefersReducedMotion ? {} : { x: 60, opacity: 0 }}
            animate={prefersReducedMotion ? {} : { x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex items-center justify-center py-6 lg:py-0"
          >
            <div
              className="relative w-[340px] h-[400px] sm:w-[400px] sm:h-[440px] flex items-center justify-center"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Radial purple glow behind the 3D crystal sculpture */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: '400px',
                  height: '400px',
                  background: 'radial-gradient(circle at 50% 50%, rgba(108,59,255,0.25) 0%, transparent 65%)',
                  filter: 'blur(50px)',
                  borderRadius: '50%',
                }}
                aria-hidden="true"
              />

              {/* 5 Ascending Glass Panels */}
              <div
                className="relative w-[340px] h-[380px]"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {panels.map((p, idx) => (
                  <CrystalPanelItem key={idx} p={p} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <a
          href="#value"
          aria-label="التمرير للأسفل"
          className="flex flex-col items-center gap-1.5 text-brand-soft-white/40 hover:text-brand-purple-glow transition-colors"
        >
          <span className="text-[11px] font-english uppercase tracking-widest">SCROLL</span>
          <div className="animate-chevron-bounce">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
