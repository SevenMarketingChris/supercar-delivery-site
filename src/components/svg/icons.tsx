interface IconProps {
  className?: string;
  size?: number;
}

export function GlobeIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="24" cy="24" rx="12" ry="20" stroke="currentColor" strokeWidth="1" />
      <path d="M4 24h40" stroke="currentColor" strokeWidth="1" />
      <path d="M8 12h32" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
      <path d="M8 36h32" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
      {/* Route arc */}
      <path d="M12 18 Q24 8 36 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8" />
      <circle cx="12" cy="18" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="36" cy="20" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export function ShieldIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M24 4 L40 12 L40 24 C40 34 32 42 24 44 C16 42 8 34 8 24 L8 12 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M16 24 L22 30 L34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 12 L24 24 L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      {/* Speed lines */}
      <path d="M4 16 L8 18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M4 32 L8 30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function KeyIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* White glove / door-to-door icon */}
      <path
        d="M8 36 L8 20 C8 16 12 12 16 12 L32 12 C36 12 40 16 40 20 L40 36"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Door */}
      <rect x="18" y="20" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Door handle */}
      <circle cx="27" cy="28" r="1.5" fill="currentColor" />
      {/* Welcome mat */}
      <path d="M12 36 L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Roof peak */}
      <path d="M4 20 L24 6 L44 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TransporterIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Enclosed transporter truck */}
      <rect x="4" y="16" width="32" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Cab */}
      <path d="M36 22 L44 22 L44 34 L36 34" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M36 22 L40 16 L44 16 L44 22" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Wheels */}
      <circle cx="14" cy="36" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="28" cy="36" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="40" cy="36" r="3" stroke="currentColor" strokeWidth="1.5" />
      {/* Car silhouette inside */}
      <path d="M10 28 L14 26 L20 24 L26 24 L30 26 L32 28" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
    </svg>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <line x1="0" y1="10" x2="175" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M185 10 L190 5 L195 10 L190 15 Z" fill="currentColor" opacity="0.5" />
      <path d="M195 10 L200 5 L205 10 L200 15 Z" fill="currentColor" opacity="0.3" />
      <line x1="215" y1="10" x2="400" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

export function CheckmarkIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12 L11 15 L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapPinIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PhoneIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function MenuIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="7" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
