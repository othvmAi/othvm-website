interface PurpleGlowProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function PurpleGlow({ className = '', size = 'md' }: PurpleGlowProps) {
  const sizeClasses = {
    sm: 'w-[300px] h-[300px]',
    md: 'w-[600px] h-[600px]',
    lg: 'w-[900px] h-[900px]',
  };

  return (
    <div
      className={`purple-glow-orb ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    />
  );
}
