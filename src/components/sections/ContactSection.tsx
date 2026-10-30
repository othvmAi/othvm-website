'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import PurpleGlow from '@/components/ui/PurpleGlow';

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* FIX 10: Contact section: Medium glow (400px) top-center, rgba(108,59,255,0.12) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 rounded-full pointer-events-none -z-0"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(108,59,255,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            {/* FIX 6: Section label formatted with spaces "07 / تواصل" */}
            <SectionLabel number="07" label="تواصل" />
          </div>

          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white"
          >
            <span className="block">عندك مشروع؟</span>
            <span className="block text-brand-purple-glow mt-1">نتكلم.</span>
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-soft-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            سواء كان عندك فكرة، مشكلة محددة، أو مجرد سؤال — ابعت لينا وهنرد عليك.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: WhatsApp */}
          <GlassCard className="p-8 sm:p-10 text-center flex flex-col items-center justify-between" delay={0.1}>
            <div className="w-full flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/25 shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-6">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#10B981" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">تواصل على واتساب</h3>
              <div className="h-4 mb-6" />
            </div>

            {/* FIX 5: WhatsApp link with target="_blank" rel="noopener noreferrer" */}
            <a
              href="https://wa.me/201007078085"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-purple text-white text-sm font-bold hover:bg-brand-purple/90 hover:shadow-[0_0_25px_rgba(108,59,255,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              ابدأ محادثة
            </a>
          </GlassCard>

          {/* Card 2: Email — FIX 4 & FIX 5 */}
          <GlassCard className="p-8 sm:p-10 text-center flex flex-col items-center justify-between" delay={0.2}>
            <div className="w-full flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-brand-purple/15 border border-brand-purple/30 shadow-[0_0_20px_rgba(108,59,255,0.2)] mb-6">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#9B6DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13L2 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">راسلنا على الإيميل</h3>
              <p className="text-brand-soft-white/60 text-sm font-english mb-6" dir="ltr">
                othvm.me@gmail.com
              </p>
            </div>

            {/* FIX 4: Proper anchor tag with target="_blank" rel="noopener noreferrer" styled exactly like WhatsApp button */}
            <a
              href="mailto:othvm.me@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-purple text-white text-sm font-bold hover:bg-brand-purple/90 hover:shadow-[0_0_25px_rgba(108,59,255,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              ابعت إيميل
            </a>
          </GlassCard>

          {/* Card 3: Instagram — FIX 5 */}
          <GlassCard className="p-8 sm:p-10 text-center flex flex-col items-center justify-between" delay={0.3}>
            <div className="w-full flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(225,48,108,0.15)] mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(131,58,180,0.15) 0%, rgba(253,29,29,0.15) 50%, rgba(252,176,69,0.15) 100%)',
                  border: '1px solid rgba(225,48,108,0.3)',
                }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="ig-contact-grad-fixed" x1="0" y1="24" x2="24" y2="0">
                      <stop offset="0%" stopColor="#FD1D1D" />
                      <stop offset="50%" stopColor="#833AB4" />
                      <stop offset="100%" stopColor="#FCAF45" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    fill="url(#ig-contact-grad-fixed)"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">تابع OTHVM</h3>
              <p className="text-brand-soft-white/60 text-sm font-english mb-6" dir="ltr">
                @othvmai
              </p>
            </div>

            {/* FIX 5: Instagram link with target="_blank" rel="noopener noreferrer" */}
            <a
              href="https://www.instagram.com/othvmai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-purple text-white text-sm font-bold hover:bg-brand-purple/90 hover:shadow-[0_0_25px_rgba(108,59,255,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              تابعنا
            </a>
          </GlassCard>
        </div>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-brand-soft-white/40 text-sm text-center font-medium"
        >
          بنرد خلال 24 ساعة عادةً.
        </motion.p>
      </div>
    </section>
  );
}
