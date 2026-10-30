'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import PurpleGlow from '@/components/ui/PurpleGlow';
import { products } from '@/lib/data';

function BookCover({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative w-full aspect-[3/4] max-w-[220px] mx-auto mb-6">
      {/* Book glow shadow */}
      <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-xl bg-brand-purple/20 blur-md pointer-events-none" />
      
      {/* Book 3D Mockup Container */}
      <div
        className="relative w-full h-full rounded-xl overflow-hidden transition-transform duration-500 hover:scale-[1.03]"
        style={{
          background: 'linear-gradient(145deg, #24124D 0%, #170933 60%, #09090D 100%)',
          border: '1px solid rgba(155, 109, 255, 0.35)',
          boxShadow: '0 12px 35px rgba(108, 59, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Spine book border indicator */}
        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gradient-to-r from-white/20 to-transparent" />
        
        {/* Diagonal shine */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, transparent 45%, rgba(155, 109, 255, 0.08) 100%)',
          }}
        />

        {/* Geometric accent */}
        <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-brand-purple/20 blur-xl pointer-events-none" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 text-center z-10">
          <div className="flex items-center justify-between w-full">
            <span className="text-[11px] font-english tracking-widest text-brand-purple-glow font-bold uppercase">
              OTHVM EDITION
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-purple-glow shadow-[0_0_8px_#9B6DFF]" />
          </div>

          <div className="my-auto py-4">
            <h4 className="text-white text-xl sm:text-2xl font-bold leading-tight mb-2">
              {title}
            </h4>
            <div className="w-10 h-0.5 bg-brand-purple-glow mx-auto mb-3" />
            <p className="text-brand-soft-white/70 text-xs leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="text-[10px] text-brand-soft-white/40 tracking-wider">
            دليل عملي • إصدار رقمي
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="products" className="relative py-24 sm:py-32">
      <PurpleGlow className="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" size="md" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel number="05" label="المنتجات الرقمية" />

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        >
          <span className="block">عايز تستفيد من <span className="ltr-inline">AI</span> بنفسك؟</span>
          <span className="block text-brand-purple-glow mt-1">مش كل هدف محتاج خدمة مخصصة.</span>
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-brand-soft-white/60 text-lg mb-12 max-w-3xl"
        >
          بنجهّز منتجات رقمية تساعدك تفهم الذكاء الاصطناعي، تستخدمه بوعي، وتستكشف طرق تحويله لأفكار ومشروعات عملية.
        </motion.p>

        {/* Big center tagline */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-8 mb-14"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-white">تعلّم. جرّب. </span>
            <span className="text-brand-purple-glow">وابن فرصتك.</span>
          </h3>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <GlassCard key={product.title} className="p-8 sm:p-10 flex flex-col items-center" delay={index * 0.15}>
              <BookCover title={product.title} subtitle={product.subtitle} />

              {/* Status badge */}
              <div className="flex justify-center mb-4">
                <span className="px-4 py-1 rounded-full text-xs font-bold bg-brand-purple/20 text-brand-purple-glow border border-brand-purple/40 shadow-[0_0_15px_rgba(108,59,255,0.2)]">
                  {product.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-1">
                &ldquo;{product.title}&rdquo;
              </h3>
              <p className="text-brand-purple-glow text-sm text-center mb-4 font-medium">
                {product.subtitle}
              </p>
              <p className="text-brand-soft-white/70 text-sm text-center leading-relaxed mb-8 max-w-md">
                {product.description}
              </p>

              <div className="text-center mt-auto w-full">
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
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-brand-soft-white/40 text-sm text-center font-medium"
        >
          المنتجات قيد التطوير حالياً. سيتم الإعلان عن تاريخ الإطلاق قريباً.
        </motion.p>
      </div>
    </section>
  );
}
