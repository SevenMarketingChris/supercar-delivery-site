export default function HeroBgPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {Array.from({ length: 20 }, (_, i) => (
        <line
          key={`d1-${i}`}
          x1={-200 + i * 120}
          y1={0}
          x2={i * 120}
          y2={800}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity={0.03 + (i % 5 === 0 ? 0.04 : 0)}
        />
      ))}
      {Array.from({ length: 20 }, (_, i) => (
        <line
          key={`d2-${i}`}
          x1={200 + i * 120}
          y1={0}
          x2={i * 120}
          y2={800}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity={0.03 + (i % 4 === 0 ? 0.03 : 0)}
        />
      ))}
      <circle cx="900" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
      <circle cx="900" cy="200" r="200" stroke="currentColor" strokeWidth="0.5" opacity="0.03" />
      <circle cx="300" cy="600" r="100" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
      {Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 12 }, (_, col) => (
          <circle
            key={`dot-${row}-${col}`}
            cx={50 + col * 100}
            cy={50 + row * 100}
            r="1"
            fill="currentColor"
            opacity={0.08}
          />
        ))
      )}
    </svg>
  );
}
