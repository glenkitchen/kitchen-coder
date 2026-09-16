import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

// CSS animation (see .blur-fade in globals.css) rather than framer-motion, so
// text is never left hidden when JS animations don't run, e.g. after Back.
const BlurFadeText = ({
  text,
  className,
  duration = 0.3,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const style = (delaySeconds: number) =>
    ({
      "--blur-fade-duration": `${duration}s`,
      "--blur-fade-delay": `${delaySeconds}s`,
      "--blur-fade-y": `${yOffset}px`,
      "--blur-fade-blur": "8px",
    }) as CSSProperties;

  if (animateByCharacter) {
    return (
      <div className="flex">
        {Array.from(text).map((char, i) => (
          <span
            key={i}
            className={cn("blur-fade inline-block", className)}
            style={{
              ...style(delay + i * characterDelay),
              width: char.trim() === "" ? "0.2em" : "auto",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      <span className={cn("blur-fade inline-block", className)} style={style(delay)}>
        {text}
      </span>
    </div>
  );
};

export default BlurFadeText;
