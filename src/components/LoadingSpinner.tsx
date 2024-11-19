import React from "react";

const LoadingSpinner: React.FC = () => (
  <svg
    className="animate-spin h-12 w-12 text-black dark:text-white"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Circle */}
    <circle
      cx="50"
      cy="50"
      r="40"
      className="fill-none stroke-current"
      strokeWidth="4"
    />

    {/* Inner Curves for Yin-Yang Infinity */}
    <path
      d="
        M50,10 
        C70,10 85,25 85,50 
        C85,75 70,90 50,90 
        C30,90 15,75 15,50 
        C15,25 30,10 50,10
        Z
      "
      className="fill-current dark:fill-white"
    />

    {/* Top Dot */}
    <circle
      cx="50"
      cy="35"
      r="5"
      className="fill-white dark:fill-black"
    >
      <animate
        attributeName="cy"
        values="35;25;35"
        dur="1.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="r"
        values="5;6;5"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Bottom Dot */}
    <circle
      cx="50"
      cy="65"
      r="5"
      className="fill-white dark:fill-black"
    >
      <animate
        attributeName="cy"
        values="65;75;65"
        dur="1.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="r"
        values="5;6;5"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Center Dot */}
    <circle
      cx="50"
      cy="50"
      r="4"
      className="fill-white dark:fill-black"
    >
      <animate
        attributeName="r"
        values="4;5;4"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default LoadingSpinner;
