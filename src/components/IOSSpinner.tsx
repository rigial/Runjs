import { memo } from 'react';

interface IOSSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: string;
  label?: string;
}

const BLADES = [
  { opacity: 1.0, transform: 'rotate(0 12 12)' },
  { opacity: 0.92, transform: 'rotate(30 12 12)' },
  { opacity: 0.83, transform: 'rotate(60 12 12)' },
  { opacity: 0.75, transform: 'rotate(90 12 12)' },
  { opacity: 0.67, transform: 'rotate(120 12 12)' },
  { opacity: 0.58, transform: 'rotate(150 12 12)' },
  { opacity: 0.5, transform: 'rotate(180 12 12)' },
  { opacity: 0.42, transform: 'rotate(210 12 12)' },
  { opacity: 0.33, transform: 'rotate(240 12 12)' },
  { opacity: 0.25, transform: 'rotate(270 12 12)' },
  { opacity: 0.17, transform: 'rotate(300 12 12)' },
  { opacity: 0.08, transform: 'rotate(330 12 12)' },
];

const SIZE_MAP = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
};

function IOSSpinner({
  size = 'md',
  className = '',
  color = 'currentColor',
  label = 'Loading...',
}: IOSSpinnerProps) {
  const sizeClass = SIZE_MAP[size] || SIZE_MAP.md;

  return (
    <div
      role="status"
      aria-label={label}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <svg
        className={`animate-spin ${sizeClass}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDuration: '0.8s' }}
      >
        {BLADES.map((blade, idx) => (
          <line
            key={idx}
            x1="12"
            y1="2.5"
            x2="12"
            y2="6.5"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
            opacity={blade.opacity}
            transform={blade.transform}
          />
        ))}
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default memo(IOSSpinner);
