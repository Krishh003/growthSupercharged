"use client";

import { useRef, useState } from "react";

/* Cursor-driven logo accordion from animAssets/Frame 3.png ("CHANNEL SPLIT").
   Hover the row: the cursor's horizontal position picks the active segment
   (left third -> Meta, middle -> LinkedIn, right -> Google) and that logo's
   chip expands while the others collapse to icon squares. Smart-Animate via a
   flex-grow transition. Optionally pass `activeIndex` to drive it from a parent
   "top section" instead of the row's own pointer tracking. */

function MetaLogo() {
  return (
    <svg width="30" height="20" viewBox="0 0 40 24" fill="none" aria-hidden>
      <path
        d="M6.6 4.2C9.1 4.2 11 6 12.7 8.6c1.4 2.2 2.3 4 3.6 6.2 1 1.7 1.7 2.6 2.7 2.6 1.3 0 1.7-1.2 1.7-3.4V9.4c0-2.6-.6-3.6-1.8-3.6-1 0-1.8.8-3 2.7l-1.4-2.2C16 4.1 17.6 3 19.7 3c3 0 4.6 2 4.6 6v5c0 4-1.7 5.9-4.4 5.9-2.1 0-3.5-1.2-5-3.8-.6-1-1.4-2.5-2.3-4.1C11.2 9.7 10 7.6 8.7 7.6c-1.1 0-2 1-2.8 2.7C5.2 11.7 4.8 13.4 4.8 15c0 1.7.5 2.7 1.6 2.7.9 0 1.6-.6 2.7-2.3l1.3 2.2c-1.3 2-2.7 2.9-4.3 2.9C3.3 20.5 1.7 18.3 1.7 14.7c0-4 .9-6.8 2.4-8.7C7 4.7 5 4.2 6.6 4.2Z"
        fill="#fff"
      />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v13H.2V8zm7.2 0h4.4v1.78h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7V21h-4.6v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H7.4V8z"
        fill="#fff"
      />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" fill="#4285F4" />
      <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" fill="#34A853" />
      <path d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" fill="#FBBC05" />
      <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" fill="#EA4335" />
    </svg>
  );
}

const SEGMENTS = [
  { key: "meta", name: "Meta", style: { background: "linear-gradient(135deg, #0866ff, #0064e0)" }, logo: <MetaLogo />, light: false },
  { key: "linkedin", name: "LinkedIn", style: { background: "#0a66c2" }, logo: <LinkedInLogo />, light: false },
  { key: "google", name: "Google", style: { background: "#ffffff" }, logo: <GoogleLogo />, light: true },
];

export function ChannelSplit({
  label = "Channel Split",
  activeIndex,
  bare = false,
}: {
  label?: string;
  /** Drive the active segment from a parent section. Omit for self-tracking. */
  activeIndex?: number;
  /** Drop the card chrome so it can nest inside another card (e.g. a dashboard). */
  bare?: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [internal, setInternal] = useState(0);
  const active = activeIndex ?? internal;
  const controlled = activeIndex !== undefined;

  const onMove = (e: React.PointerEvent) => {
    if (controlled) return;
    const r = rowRef.current?.getBoundingClientRect();
    if (!r) return;
    const rel = (e.clientX - r.left) / r.width;
    setInternal(rel < 1 / 3 ? 0 : rel < 2 / 3 ? 1 : 2);
  };

  return (
    <div className={"mk-split" + (bare ? " mk-split--bare" : "")}>
      <div className="mk-split__label">{label}</div>
      <div
        className="mk-split__row"
        ref={rowRef}
        onPointerMove={onMove}
        onPointerLeave={() => !controlled && setInternal(0)}
      >
        {SEGMENTS.map((s, i) => (
          <div
            key={s.key}
            className={
              "mk-split__seg" +
              (s.light ? " mk-split__seg--light" : "") +
              (i === active ? " is-active" : "")
            }
            style={s.style}
          >
            <span className="mk-split__logo">{s.logo}</span>
            <span className="mk-split__name">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
