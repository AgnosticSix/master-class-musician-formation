interface TrebleClefSvgProps {
  className?: string;
}

/** Pentagrama decorativo con clave de sol, usado como fondo del Hero */
export function TrebleClefSvg({ className }: TrebleClefSvgProps) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Staff lines */}
      <line x1="0" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="80" x2="400" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="100" x2="400" y2="100" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="120" x2="400" y2="120" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="140" x2="400" y2="140" stroke="currentColor" strokeWidth="1" />
      {/* Treble Clef */}
      <path
        d="M180 160 C 160 160, 150 140, 160 120 C 170 100, 200 100, 210 120 C 220 140, 200 170, 180 180 C 150 190, 130 160, 150 120 C 170 80, 210 50, 200 20 C 195 5, 180 0, 170 20 C 160 40, 165 70, 180 100 L 195 140"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
