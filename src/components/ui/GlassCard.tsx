'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({ children, className = '', hover = true, delay = 0 }: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={hover && !prefersReducedMotion ? { scale: 1.02, transition: { duration: 0.2 } } : {}}
      whileTap={hover && !prefersReducedMotion ? { scale: 0.98 } : {}}
      className={`glass-card ${hover ? 'glass-card-hover' : ''} transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
