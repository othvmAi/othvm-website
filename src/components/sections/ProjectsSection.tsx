'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import CTAButton from '@/components/ui/CTAButton';
import PurpleGlow from '@/components/ui/PurpleGlow';
import { projects } from '@/lib/data';

export default function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <PurpleGlow className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" size="md" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel number="04" label="الأعمال" />

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        >
          <span className="block">شغل حقيقي.</span>
          <span className="block text-brand-purple-glow mt-1">نتائج ملموسة.</span>
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-brand-soft-white/60 text-lg mb-8 max-w-2xl"
        >
          مجموعة من التجارب العملية والمشاريع اللي اشتغلنا عليها.
        </motion.p>

        {/* Disclaimer */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-4 mb-12 border-brand-purple/20 max-w-3xl"
        >
          <p className="text-brand-soft-white/50 text-sm flex items-start gap-2">
            <span className="text-brand-purple-glow flex-shrink-0">⚡</span>
            <span>كل المشاريع المعروضة هنا إما تجارب شخصية أو نماذج أولية — مش مشاريع عملاء حقيقيين في هذه المرحلة.</span>
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <GlassCard key={project.title} className="p-8 flex flex-col" delay={index * 0.1}>
              {/* Status badge */}
              <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-5">
                {project.status}
              </span>

              <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>

              <div className="space-y-3 mb-6 flex-1">
                <div>
                  <span className="text-brand-purple text-xs font-bold block mb-1">المشكلة</span>
                  <p className="text-brand-soft-white/60 text-sm">{project.problem}</p>
                </div>
                <div>
                  <span className="text-brand-purple text-xs font-bold block mb-1">الحل</span>
                  <p className="text-brand-soft-white/60 text-sm">{project.solution}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] text-brand-soft-white/50 border border-white/[0.06]"
                    dir="ltr"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="text-brand-purple text-sm font-medium hover:text-brand-purple-glow transition-colors border border-brand-purple/20 rounded-lg px-4 py-2 text-center hover:border-brand-purple/40"
              >
                عرض المشروع
              </a>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center space-y-3"
        >
          <h3 className="text-2xl font-bold text-white">عندك مشروع في دماغك؟</h3>
          <p className="text-brand-soft-white/60 text-sm mb-4">نتكلم ونشوف إيه الممكن.</p>
          <CTAButton href="#contact" variant="primary">
            تواصل معنا
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
