'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import PurpleGlow from '@/components/ui/PurpleGlow';

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <PurpleGlow
        size={500}
        color="rgba(108, 59, 255, 0.10)"
        className="top-0 right-0 translate-x-1/3 -translate-y-1/3"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIX 6: Section label formatted with spaces "06 / عن OTHVM" */}
        <SectionLabel number="06" label="عن OTHVM" />

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-16 text-white"
        >
          <span className="block">تكنولوجيا تشتغل ليك.</span>
          <span className="block text-brand-purple-glow mt-1">مش العكس.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Philosophy - RTL right side */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-brand-soft-white/80 text-lg sm:text-xl leading-relaxed">
              <strong className="text-white font-english font-bold">OTHVM</strong> علامة تجارية مستقلة متخصصة في تقديم حلول تكنولوجية عملية للشركات والأفراد.
            </p>
            <p className="text-brand-soft-white/80 text-lg sm:text-xl leading-relaxed">
              مش بنبيع أدوات. بنحلّ مشاكل. بنفهم احتياجك الحقيقي ونصمم حلاً يناسبه — سواء كان أتمتة، ربط أنظمة، أو بناء أداة مخصصة من الصفر.
            </p>
            <p className="text-brand-soft-white/80 text-lg sm:text-xl leading-relaxed">
              الهدف دايماً واحد: إنك تشتغل بكفاءة أعلى وتوصل لأهدافك بسرعة أكبر.
            </p>
          </motion.div>

          {/* Founder Card - RTL left side */}
          <div className="lg:col-span-5">
            <GlassCard className="p-8 sm:p-10 text-center relative overflow-hidden" delay={0.2}>
              {/* FIX 8: Stylized Circular Founder Photo Placeholder */}
              <div className="flex flex-col items-center mb-6">
                <div
                  className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(108,59,255,0.3), rgba(155,109,255,0.1))',
                    border: '2px solid rgba(155,109,255,0.4)',
                    boxShadow: '0 0 30px rgba(108,59,255,0.2)',
                  }}
                >
                  <span
                    className="text-white select-none font-bold"
                    style={{ fontSize: '48px', fontFamily: 'var(--font-noto-kufi)' }}
                  >
                    ع
                  </span>
                </div>
                <span className="text-brand-soft-white/50 text-[12px] mt-3">
                  صورة المؤسس — قريباً
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">عثمان محمد</h3>
                <p className="text-brand-purple-glow text-sm font-semibold tracking-wide">
                  مؤسس <span className="ltr-inline font-english">OTHVM</span>
                </p>
                <p className="text-brand-soft-white/70 text-sm leading-relaxed max-w-xs mx-auto pt-1">
                  بيؤمن إن التكنولوجيا لازم تخدم الناس، مش العكس.
                </p>

                {/* FIX 5: Instagram link styled as glass pill with target="_blank" */}
                <div className="pt-4">
                  <a
                    href="https://www.instagram.com/othvm_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-sm text-brand-soft-white/90 hover:text-white hover:border-brand-purple/50 hover:bg-brand-purple/15 transition-all duration-300 shadow-sm"
                  >
                    <svg className="w-4 h-4 text-brand-purple-glow" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <span dir="ltr" className="font-english font-medium">@othvm_</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
