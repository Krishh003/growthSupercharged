"use client";

import { useEffect, useState } from "react";

/* Vertical word carousel from the design recording: the trailing word in
   "Building ___" cycles through a list, each one sliding up and out while the
   next slides in from below. Built as a single column translated by one line
   per step, with a cloned first word at the end for a seamless forward loop. */

export function WordRotator({
  words,
  interval = 2200,
}: {
  words: string[];
  interval?: number;
}) {
  const items = [...words, words[0]]; // clone first word for seamless wrap
  const [idx, setIdx] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => i + 1), interval);
    return () => clearInterval(id);
  }, [interval]);

  useEffect(() => {
    if (idx === items.length - 1) {
      // landed on the clone — after the slide, jump back to the real first
      // word with no transition so the loop is invisible
      const t = setTimeout(() => {
        setAnimate(false);
        setIdx(0);
      }, 560);
      return () => clearTimeout(t);
    }
    if (!animate) {
      const r = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true)),
      );
      return () => cancelAnimationFrame(r);
    }
  }, [idx, animate, items.length]);

  return (
    <span className="mk-rot" aria-label={words.join(", ")}>
      <span
        className="mk-rot__list"
        style={{
          transform: `translateY(calc(${idx} * var(--mk-rot-step) * -1))`,
          transition: animate ? undefined : "none",
        }}
      >
        {items.map((w, i) => (
          <span className="mk-rot__item" key={i} aria-hidden>
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}
