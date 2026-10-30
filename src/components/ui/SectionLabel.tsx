'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-8"
    >
      <span className="font-english text-brand-purple text-sm font-mono tracking-wider">
        {number}
      </span>
      <span className="text-brand-purple text-sm font-medium">
        /
      </span>
      <span className="text-brand-purple text-sm font-medium">
        {label}
      </span>
    </motion.div>
  );
}
