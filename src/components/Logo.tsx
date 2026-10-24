import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-lg tracking-wider",
    md: "text-xl sm:text-2xl tracking-wider",
    lg: "text-2xl sm:text-3xl tracking-widest",
  };

  const subTextSizes = {
    sm: "text-[9px] tracking-[0.2em]",
    md: "text-[10px] tracking-[0.25em]",
    lg: "text-xs tracking-[0.3em]",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Automotive Shield Icon */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(229,57,53,0.25)]"
        >
          {/* Outer Chamfered Hex-Shield */}
          <path
            d="M22 2L40 9V24C40 33.5 22 41 22 41C22 41 4 33.5 4 24V9L22 2Z"
            fill="#121212"
            stroke="#2A2A2A"
            strokeWidth="2"
          />
          {/* Inner Precision Metallic Bevel */}
          <path
            d="M22 6L36 11.5V23C36 30.5 22 36.5 22 36.5C22 36.5 8 30.5 8 23V11.5L22 6Z"
            stroke="#4A4A4A"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          {/* Golden/Metallic Oil Droplet Core with Racing Red Accent */}
          <path
            d="M22 13C22 13 16 20 16 24C16 27.31 18.69 30 22 30C25.31 30 28 27.31 28 24C28 20 22 13 22 13Z"
            fill="#E53935"
          />
          {/* Oil Drop Gloss Reflection */}
          <path
            d="M20 18C18.5 20.5 18 22.5 18 24"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-heading font-bold text-white uppercase ${textSizes[size]}`}>
            ABO EL DAHAB
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] inline-block animate-pulse"></span>
        </div>
        <span className={`font-mono text-[#8E8E8E] uppercase font-semibold mt-0.5 ${subTextSizes[size]}`}>
          AUTOMOTIVE OILS <span className="text-[#E53935]">/</span> أَبُو الدَّهَب
        </span>
      </div>
    </div>
  );
};
