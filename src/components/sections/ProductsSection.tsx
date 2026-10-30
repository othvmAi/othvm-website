'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import PurpleGlow from '@/components/ui/PurpleGlow';
import { products } from '@/lib/data';

function PremiumBookCover({ title }: { title: string }) {
  return (
    <div
      className="relative mb-8 flex justify-center"
      style={{ perspective: '800px' }}
    >
      {/* Book Cover Container with FIX 9 specifications */}
      <div
        className="relative overflow-hidden group transition-transform duration-400 ease-out hover:[transform:rotateY(8deg)]"
        style={{
          width: '180px',
          height: '240px',
          background: 'linear-gradient(160deg, #2D1B69 0%, #1A0F3D 50%, #0D0821 100%)',
          border: '1px solid rgba(155,109,255,0.4)',
          borderRadius: '6px 12px 12px 6px',
          boxShadow: '-8px 12px 40px rgba(0,0,0,0.6), 0 0 20px rgba(108,59,255,0.2), inset 2px 0 0 rgba(255,255,255,0.05)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle shine overlay rotated 30deg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.05) 50%, transparent 80%)',
            transform: 'rotate(30deg) scale(1.5)',
          }}
        />

        {/* Book spine line on the right in RTL */}
        <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-white/20 to-transparent" />

        {/* Content inside book */}
        <div className="relative h-full flex flex-col justify-between p-5 text-center z-10">
          {/* OTHVM Logo text (small, top) */}
          <div className="flex items-center justify-between">
            <span className="font-english text-[10px] tracking-widest text-brand-purple-glow font-bold uppercase">
              OTHVM
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-glow shadow-[0_0_6px_#9B6DFF]" />
          </div>

          {/* Book title in Arabic bold (center, white) */}
          <div className="my-auto py-2">
            <h4 className="text-white text-lg font-bold leading-tight mb-3">
              {title}
            </h4>
            {/* Subtle geometric decoration (3 small purple lines) */}
            <div className="flex items-center justify-center gap-1">
              <span className="w-4 h-[2px] rounded-full bg-brand-purple-glow/50" />
              <span className="w-6 h-[2px] rounded-full bg-brand-purple-glow" />
              <span className="w-4 h-[2px] rounded-full bg-brand-purple-glow/50" />
            </div>
          </div>

          {/* Bottom strip: "OTHVM EDITION" in Space Grotesk, tiny, purple */}
          <div className="pt-2 border-t border-white/[0.06]">
            <span className="font-english text-[9px] text-brand-purple-glow font-semibold tracking-wider uppercase">
              OTHVM EDITION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
      {/* FIX 10: Products section: Large glow (600px) centered bottom, rgba(108,59,255,0.18) */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 rounded-full pointer-events-none -z-0"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(108,59,255,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIX 6: Section label formatted with spaces "05 / المنتجات الرقمية" */}
        <SectionLabel number="05" label="المنتجات الرقمية" />

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white"
        >
          <span className="block">عايز تستفيد من <span className="ltr-inline font-english">AI</span> بنفسك؟</span>
          <span className="block text-brand-purple-glow mt-1">مش كل هدف محتاج خدمة مخصصة.</span>
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-brand-soft-white/70 text-lg mb-12 max-w-3xl leading-relaxed"
        >
          بنجهّز منتجات رقمية تساعدك تفهم الذكاء الاصطناعي، تستخدمه بوعي، وتستكشف طرق تحويله لأفكار ومشروعات عملية.
        </motion.p>

        {/* Big center tagline */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-6 mb-14"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-white">تعلّم. جرّب. </span>
            <span className="text-brand-purple-glow">وابن فرصتك.</span>
          </h3>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <GlassCard key={product.title} className="p-8 sm:p-10 flex flex-col items-center justify-between" delay={index * 0.15}>
              <div className="w-full flex flex-col items-center">
                <PremiumBookCover title={product.title} />

                {/* Status badge: Coming soon */}
                <div className="mb-4">
                  <span className="px-4 py-1 rounded-full text-xs font-bold bg-brand-purple/20 text-brand-purple-glow border border-brand-purple/40 shadow-[0_0_15px_rgba(108,59,255,0.25)]">
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white text-center mb-1">
                  &ldquo;{product.title}&rdquo;
                </h3>
                <p className="text-brand-purple-glow text-sm text-center mb-4 font-medium">
                  {product.subtitle}
                </p>
                <p className="text-brand-soft-white/70 text-sm sm:text-base text-center leading-relaxed mb-6 max-w-md">
                  {product.description}
                </p>
              </div>

              <div className="text-center w-full sm:w-auto pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-xl border border-white/20 text-white text-sm font-semibold hover:border-brand-purple/60 hover:bg-brand-purple/15 transition-all duration-300"
                >
                  سجّل اهتمامك
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-brand-soft-white/40 text-sm text-center font-medium"
        >
          المنتجات قيد التطوير حالياً. سيتم الإعلان عن تاريخ الإطلاق قريباً.
        </motion.p>
      </div>
    </section>
  );
}
