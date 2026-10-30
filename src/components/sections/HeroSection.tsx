'use client';

import { motion, useReducedMotion } from 'framer-motion';
import CTAButton from '@/components/ui/CTAButton';
import PurpleGlow from '@/components/ui/PurpleGlow';

function CrystalPanel({ delay, rotate, translate, className }: { delay: number; rotate: string; translate: string; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={prefersReducedMotion ? {} : {
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        delay,
      }}
      className={`absolute ${className}`}
      style={{
        width: '120px',
        height: '160px',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        background: 'linear-gradient(135deg, rgba(108,59,255,0.15), rgba(155,109,255,0.08))',
        border: '1px solid rgba(155,109,255,0.3)',
        boxShadow: '0 0 40px rgba(108,59,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
        borderRadius: '12px',
        transform: `${rotate} ${translate}`,
      }}
    />
  );
}

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: 'easeOut' },
        };

  const fadeIn = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, delay },
        };

  const slideIn = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, x: 60 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, delay, ease: 'easeOut' },
        };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <PurpleGlow className="bottom-0 left-0 -translate-x-1/4 translate-y-1/4" size="lg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content - Right side in RTL */}
          <div className="order-2 lg:order-1 space-y-8">
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="block">التكنولوجيا مش مجرد أدوات.</span>
              <span className="block text-brand-purple-glow mt-2">
                دي فرصة تشتغل بقوة أكبر.
              </span>
            </motion.h1>

            <motion.p
              {...fadeIn(0.4)}
              className="text-brand-soft-white/70 text-lg sm:text-xl leading-relaxed max-w-xl"
            >
              نحوّل التكنولوجيا لحلول عملية تساعدك تطوّر شغلك وتوصل لأهدافك بكفاءة أعلى.
            </motion.p>

            <motion.div
              {...fadeUp(0.6)}
              className="flex flex-wrap gap-4"
            >
              <CTAButton href="#contact" variant="primary">
                ناقش مشروعك
              </CTAButton>
              <CTAButton href="#services" variant="ghost">
                استكشف الخدمات
              </CTAButton>
            </motion.div>
          </div>

          {/* 3D Crystal Visual - Left side in RTL */}
          <motion.div
            {...slideIn(0.3)}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-[320px] h-[400px] sm:w-[400px] sm:h-[450px] perspective-container">
              <CrystalPanel
                delay={0}
                rotate="rotateY(-15deg) rotateX(5deg)"
                translate="translateZ(0px)"
                className="bottom-[10%] right-[15%]"
              />
              <CrystalPanel
                delay={0.3}
                rotate="rotateY(-10deg) rotateX(8deg)"
                translate="translateZ(20px)"
                className="bottom-[25%] right-[35%]"
              />
              <CrystalPanel
                delay={0.6}
                rotate="rotateY(-5deg) rotateX(3deg)"
                translate="translateZ(40px)"
                className="bottom-[40%] right-[20%]"
              />
              <CrystalPanel
                delay={0.9}
                rotate="rotateY(-12deg) rotateX(10deg)"
                translate="translateZ(60px)"
                className="bottom-[55%] right-[40%]"
              />
              <CrystalPanel
                delay={1.2}
                rotate="rotateY(-8deg) rotateX(6deg)"
                translate="translateZ(30px)"
                className="bottom-[70%] right-[25%]"
              />

              {/* Inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 60% 60%, rgba(108,59,255,0.15) 0%, transparent 60%)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeIn(1.0)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-chevron-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-brand-soft-white/40"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
