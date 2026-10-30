'use client';

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ number, label, className = '' }: SectionLabelProps) {
  return (
    <div className={`section-label ${className}`} style={{ marginBottom: 16 }}>
      {number} / {label}
    </div>
  );
}
