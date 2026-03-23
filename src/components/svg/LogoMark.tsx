export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield shape with car silhouette */}
        <path
          d="M20 2 L36 10 L36 22 C36 32 28 38 20 40 C12 38 4 32 4 22 L4 10 Z"
          stroke="#c9a84c"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Minimal car silhouette inside */}
        <path
          d="M10 24 L14 22 L18 19 L22 18 L26 18 L30 20 L32 24"
          stroke="#c9a84c"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="15" cy="25" r="2" stroke="#c9a84c" strokeWidth="1" />
        <circle cx="29" cy="25" r="2" stroke="#c9a84c" strokeWidth="1" />
      </svg>
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-wider text-white" style={{ fontFamily: "var(--font-display)" }}>
          SUPERCAR
        </span>
        <span className="text-xs tracking-[0.3em] text-gold -mt-1">
          DELIVERY
        </span>
      </div>
    </div>
  );
}
