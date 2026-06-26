interface CrossIconProps {
  className?: string;
  width?: number;
  height?: number;
}

/** Cruz latina minimalista usada en el header logo y footer */
export function CrossIcon({ className, width = 20, height = 28 }: CrossIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 36"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 2V34M4 12H20" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
