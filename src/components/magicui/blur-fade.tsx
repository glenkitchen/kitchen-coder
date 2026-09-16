import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  blur?: string;
}

// CSS animation (see .blur-fade in globals.css) rather than framer-motion, so
// content is never left hidden when JS animations don't run, e.g. after Back.
const BlurFade = ({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  blur = "6px",
}: BlurFadeProps) => {
  return (
    <div
      className={cn("blur-fade", className)}
      style={
        {
          "--blur-fade-duration": `${duration}s`,
          "--blur-fade-delay": `${0.04 + delay}s`,
          "--blur-fade-y": `${yOffset}px`,
          "--blur-fade-blur": blur,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default BlurFade;
