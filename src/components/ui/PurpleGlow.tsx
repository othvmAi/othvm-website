interface PurpleGlowProps {
  className?: string;
  size?: number | string;
  color?: string;
  opacity?: number;
}

export default function PurpleGlow({
  className = '',
  size = 500,
  color = 'rgba(108, 59, 255, 0.15)',
}: PurpleGlowProps) {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`absolute rounded-full pointer-events-none -z-0 ${className}`}
      style={{
        width: dimension,
        height: dimension,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(60px)',
      }}
      aria-hidden="true"
    />
  );
}
