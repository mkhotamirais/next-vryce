import React from "react";

export default function HomeHeroBg() {
  return (
    <div className="absolute -top-20 left-5 -z-50 select-none pointer-events-none opacity-10">
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-80 md:w-130 h-auto"
      >
        <defs>
          {/* Area filter diperluas (x, y, width, height) agar blur tidak terpotong di pinggir */}
          <filter id="blurV" x="-50%" y="-50%" width="200%" height="200%">
            {/* stdDeviation dinaikkan ke 25 untuk efek yang lebih smooth/blur */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
          </filter>
        </defs>
        <text
          x="10"
          y="380"
          fontSize="450"
          fontWeight="700"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="20" /* Membuat huruf V jauh lebih tebal */
          strokeLinejoin="round"
          className="text-primary"
          filter="url(#blurV)"
        >
          V
        </text>
      </svg>
    </div>
  );
}
