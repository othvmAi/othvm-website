'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  external?: boolean;
}

export default function CTAButton({ children, href, variant = 'primary', className = '', external = false }: CTAButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseClasses = 'inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-brand-purple text-white hover:bg-brand-purple/90 hover:shadow-[0_0_30px_rgba(108,59,255,0.4)]',
    ghost: 'border border-white/20 text-white hover:border-brand-purple/50 hover:bg-brand-purple/10',
  };

  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <motion.a
      href={href}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...linkProps}
    >
      {children}
    </motion.a>
  );
}
