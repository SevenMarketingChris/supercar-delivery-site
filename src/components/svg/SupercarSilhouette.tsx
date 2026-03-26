export default function SupercarSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M120 220 L160 210 L200 200 L260 185 L320 160 L380 130 L420 115 L460 108 L520 105 L580 108 L620 115 L660 125 L690 140 L710 160 L720 180 L725 200 L720 215 L700 220 L680 225 L650 225 L640 215 L620 205 L600 200 L580 205 L570 215 L560 225 L350 225 L340 215 L320 205 L300 200 L280 205 L270 215 L260 225 L160 225 L140 220 Z"
        fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"
      />
      <circle cx="310" cy="215" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="310" cy="215" r="18" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="310" cy="215" r="5" fill="currentColor" opacity="0.3" />
      <circle cx="600" cy="215" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="600" cy="215" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="600" cy="215" r="5" fill="currentColor" opacity="0.3" />
      <path d="M380 130 L420 160 L460 170" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M155 208 L180 200 L200 198" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M710 165 L720 180 L722 200" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M440 170 L480 168 L520 170 L520 185 L480 183 L440 185 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M420 118 L425 195" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.2" />
      <path d="M695 130 L720 128 L725 135" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="140" y1="250" x2="730" y2="250" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      <ellipse cx="430" cy="250" rx="280" ry="3" fill="currentColor" opacity="0.05" />
    </svg>
  );
}
