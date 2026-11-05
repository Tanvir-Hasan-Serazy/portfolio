"use client";

import React, { useState, useCallback } from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  delay?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 2,
  className = "",
  color = "#b5b5b5",
  shineColor = "#ffffff",
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = "left",
  delay = 0,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  const animationStyle = {
    ...gradientStyle,
    "--shiny-duration": `${speed}s`,
    "--shiny-delay": `${delay}s`,
    "--shiny-animation-direction": yoyo
      ? direction === "left"
        ? "alternate"
        : "alternate-reverse"
      : direction === "left"
        ? "normal"
        : "reverse",
    animationName: disabled ? "none" : "shiny-text",
    animationPlayState: isPaused ? "paused" : "running",
  } as React.CSSProperties;

  return (
    <span
      className={`shiny-text inline-block ${pauseOnHover ? "shiny-text--pause-on-hover" : ""} ${className}`}
      style={animationStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
  );
};

export default ShinyText;
