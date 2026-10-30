'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
  delay?: number;
}

export default function SectionLabel({ number, label, className = '', delay = 0 }: SectionLabelProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`inline-flex items-center gap-2 mb-8 select-none ${className}`}
    >
      <span className="font-english text-brand-purple text-sm font-mono tracking-wider font-semibold">
        {number}
      </span>
      <span className="text-brand-purple text-sm font-medium opacity-70">
        /
      </span>
      <span className="text-brand-purple text-sm font-medium tracking-wide">
        {label}
      </span>
    </motion.div>
  );
}
