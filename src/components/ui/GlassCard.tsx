'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  id?: string;
}

export default function GlassCard({ children, className = '', hover = true, delay = 0, id }: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={
        hover && !prefersReducedMotion
          ? {
              y: -4,
              backgroundColor: 'rgba(108, 59, 255, 0.07)',
              borderColor: 'rgba(108, 59, 255, 0.3)',
              boxShadow: '0 0 30px rgba(108, 59, 255, 0.15)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }
          : {}
      }
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        borderRadius: '16px',
      }}
      className={`transition-all duration-300 relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
