interface WaveDividerProps {
  color?: string;
  className?: string;
  flip?: boolean;
}

export default function WaveDivider({
  color = "#FFFFFF",
  className = "",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none relative z-10 ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        className="relative block w-full h-8 sm:h-12 md:h-16 lg:h-20"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
