import { Download } from "lucide-react";
import { Button } from "./Button";

export const AnimatedBorderButton = () => {
  return (
    <Button
      size="lg"
      className="relative bg-transparent rounded-full px-8 py-4 text-foreground
                 overflow-visible shadow-lg shadow-primary/25 mt-4 group"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <path
          d="M20 2 H80 Q98 2 98 20 Q98 38 80 38 H20 Q2 38 2 20 Q2 2 20 2 Z"
          fill="none"
          stroke="#20B2A6"
          strokeWidth="2"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="animate-border-path"
        />
      </svg>

      <span className="relative z-10 flex items-center gap-2">
        <Download className="w-5 h-5" />
        Download Resume
      </span>
    </Button>
  );
};
