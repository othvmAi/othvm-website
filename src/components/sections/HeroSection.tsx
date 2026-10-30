'use client';

import { motion, useReducedMotion } from 'framer-motion';

const CrystalPanel = ({ 
  width, height, delay, translateY 
}: { 
  width: number; height: number; delay: number; translateY: number 
}) => {
  const prefersReduced = useReducedMotion();
  
  return (
    <motion.div
      style={{
        width,
        height,
        background: 'linear-gradient(135deg, rgba(108,59,255,0.22), rgba(155,109,255,0.08))',
        border: '1px solid rgba(155,109,255,0.35)',
        boxShadow: '0 8px 32px rgba(108,59,255,0.25), inset 0 1px 0 rgba(255,255,255,0.15), inset -1px 0 0 rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '6px',
        position: 'absolute',
      }}
      animate={prefersReduced ? {} : {
        translateY: [0, -translateY, 0],
      }}
      transition={{
        duration: 3.5 + delay * 0.3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
};

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = prefersReduced
    ? undefined
    : {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      };

  const visualVariants = prefersReduced
    ? undefined
    : {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 } },
      };

  const panels = [
    { width: 75, height: 55, delay: 0, translateY: 8 },
    { width: 95, height: 70, delay: 0.35, translateY: 12 },
    { width: 115, height: 85, delay: 0.7, translateY: 10 },
    { width: 140, height: 100, delay: 1.05, translateY: 14 },
    { width: 165, height: 118, delay: 1.4, translateY: 9 },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
        paddingBottom: '40px',
      }}
    >
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{
          width: 700,
          height: 700,
          background: 'radial-gradient(circle, rgba(108,59,255,0.16) 0%, transparent 70%)',
          bottom: -200,
          left: -150,
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(155,109,255,0.10) 0%, transparent 70%)',
          top: 100,
          right: '10%',
        }}
      />

      <div
        className="flex flex-col-reverse lg:flex-row items-center justify-between"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          gap: 40,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Text Content — Right in RTL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ flex: 1, maxWidth: 560 }}
        >
          <motion.div variants={itemVariants}>
            <span className="section-label">01 / الرئيسية</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginTop: 20,
              marginBottom: 0,
              color: '#FFFFFF',
            }}
          >
            التكنولوجيا مش مجرد أدوات.
          </motion.h1>

          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginTop: 4,
              marginBottom: 24,
              color: '#9B6DFF',
            }}
          >
            دي فرصة تشتغل بقوة أكبر.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 18,
              color: 'rgba(245,243,250,0.7)',
              lineHeight: 1.8,
              maxWidth: 480,
              marginBottom: 40,
            }}
          >
            نحوّل التكنولوجيا لحلول عملية تساعدك تطوّر شغلك وتوصل لأهدافك بكفاءة أعلى.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #6C3BFF, #9B6DFF)',
                color: '#FFFFFF',
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(108,59,255,0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 32px rgba(108,59,255,0.6)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(108,59,255,0.4)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              ناقش مشروعك
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: 'transparent',
                color: '#F5F3FA',
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 16,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,59,255,0.5)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(108,59,255,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              استكشف الخدمات
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Crystal Visual — Left in RTL */}
        <motion.div
          variants={visualVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: 'relative',
            width: 320,
            height: 320,
            flexShrink: 0,
            perspective: '1000px',
          }}
        >
          {/* Purple glow behind panels */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 60%, rgba(108,59,255,0.3) 0%, transparent 65%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }} />
          
          {/* Staircase panels */}
          <div style={{
            position: 'absolute',
            bottom: 40,
            right: 20,
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-15deg) rotateX(8deg)',
          }}>
            {panels.map((panel, i) => (
              <div key={i} style={{
                position: 'absolute',
                bottom: i * 28,
                right: i * 22,
                transform: `translateZ(${i * 20}px)`,
              }}>
                <CrystalPanel {...panel} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={prefersReduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(245,243,250,0.3)',
          fontSize: 24,
        }}
      >
        ↓
      </motion.div>
    </section>
  );
}
