"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
};

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.16 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const revealStyle = {
    ...style,
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;
  const classes = ["reveal", visible ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} style={revealStyle}>
      {children}
    </Tag>
  );
}
