"use client";

import type { CSSProperties, ReactNode } from "react";

export type RevealDirection = "left" | "right" | "top" | "bottom";

type RevealImageProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  parallax?: boolean;
  theme?: "dark" | "cream";
  style?: CSSProperties;
};

export function RevealImage({
  children,
  className,
  direction = "right",
  delay = 0,
  duration = 1.05,
  parallax = false,
  theme = "dark",
  style,
}: RevealImageProps) {
  return (
    <div
      className={className}
      data-reveal-image
      data-reveal-direction={direction}
      data-reveal-delay={delay}
      data-reveal-duration={duration}
      data-reveal-parallax={parallax ? "true" : "false"}
      data-reveal-theme={theme}
      style={style}
    >
      {children}
      <span className="motion-image-cover" aria-hidden="true" />
    </div>
  );
}
