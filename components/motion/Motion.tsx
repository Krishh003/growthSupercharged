import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Spark,
  TrendUp,
  Target,
  Users,
  Search,
  Pencil,
  Wrench,
  Activity,
  CheckCircle,
  XCircle,
  RefreshCw,
  Eye,
  BarChart,
} from "@/components/icons";

/* Every component below is a pure-CSS hover interaction (no JS) mirroring the
   Figma Smart-Animate states in animAssets/Frame 3.png. Drop them straight into
   any page; styling lives in app/motion/motion.css under the `.mk` scope. */

type Tone = "blue" | "green";

/* 1. Hero block — drifting gradient blob + heading colorize on hover */
export function HeroBlock({
  tag = "Growth Operating System",
  lead = "Growth Supercharged",
  rest = "Growth Systems That Scale",
  body = "Growth Supercharge helps businesses create reporting systems, analytics dashboards, growth infrastructure, and operational frameworks that enable smarter decisions.",
  cta = "Explore Services",
  ctaHref = "/services",
}: {
  tag?: string;
  lead?: string;
  rest?: string;
  body?: string;
  cta?: string;
  ctaHref?: string;
}) {
  return (
    <div className="mk-hero">
      <div className="mk-hero__blob" aria-hidden />
      <div className="mk-hero__blob mk-hero__blob--2" aria-hidden />
      <div className="mk-hero__tag">{tag}</div>
      <h2>
        <span className="mk-hero__grad">{lead}</span> {rest}
      </h2>
      <p>{body}</p>
      <Link href={ctaHref} className="mk-btn mk-btn--blue">
        {cta}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

/* 2. CTA banner — blob drifts on hover. `dark` = blue panel, `light` = soft
   gradient blobs on white (the Home "Ready to build…" banner). */
export function CtaBanner({
  title = "Ready to scale?",
  body = "Book a strategy session and we will map the systems your next stage of growth needs.",
  cta = "Book a Consultation",
  variant = "dark",
  tags = [],
  center = false,
}: {
  title?: string;
  body?: string;
  cta?: string;
  variant?: "dark" | "light";
  tags?: string[];
  center?: boolean;
}) {
  const light = variant === "light";
  return (
    <div
      className={
        "mk-cta" +
        (light ? " mk-cta--light" : "") +
        (center ? " mk-cta--center" : "")
      }
    >
      <div className="mk-cta__blob" aria-hidden />
      {light && <div className="mk-cta__blob mk-cta__blob--2" aria-hidden />}
      <h2>{title}</h2>
      <p>{body}</p>
      <button
        type="button"
        className={"mk-btn " + (light ? "mk-btn--blue" : "mk-btn--white")}
      >
        {cta}
        <ArrowRight size={16} />
      </button>
      {tags.length > 0 && (
        <div className="mk-cta__tags">
          {tags.map((t) => (
            <span key={t}>
              <CheckCircle size={15} />
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* 3. Numbered card — white fills solid blue, text inverts to white */
export function NumberedCard({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mk-num">
      <div className="mk-num__n">{n}</div>
      <div className="mk-num__t">{title}</div>
      <p className="mk-num__b">{body}</p>
    </div>
  );
}

/* 4. Fill card — white fills with tone (blue/green), icon + text invert.
   Pass `stat` for the +28% / Growth stat variant, or body for a service card. */
export function FillCard({
  icon,
  title,
  body,
  stat,
  tone = "green",
}: {
  icon: ReactNode;
  title: string;
  body?: string;
  stat?: string;
  tone?: Tone;
}) {
  return (
    <div className={"mk-fill" + (tone === "blue" ? " mk-fill--blue" : "")}>
      <div className="mk-chip">{icon}</div>
      {stat ? <div className="mk-fill__stat">{stat}</div> : null}
      <div className="mk-fill__t">{title}</div>
      {body ? <p className="mk-fill__b">{body}</p> : null}
    </div>
  );
}

/* 4b. Fill card with an inset bar-chart panel — a single card. The whole card
   fills with tone on hover (icon + text invert) while the inset chart panel
   flips from the blue panel to a clean white chart with a green hero bar. */
export function FillChartCard({
  icon,
  title,
  body,
  tone = "green",
}: {
  icon: ReactNode;
  title: string;
  body?: string;
  tone?: Tone;
}) {
  return (
    <div className={"mk-fill mk-fillchart" + (tone === "blue" ? " mk-fill--blue" : "")}>
      <div className="mk-fillchart__main">
        <div className="mk-chip">{icon}</div>
        <div className="mk-fill__t">{title}</div>
        {body ? <p className="mk-fill__b">{body}</p> : null}
      </div>
      <div className="mk-fillchart__panel" aria-hidden>
        <div className="mk-fillchart__row">
          <span className="mk-fillchart__bar" />
          <span className="mk-fillchart__bar" />
          <span className="mk-fillchart__bar mk-fillchart__bar--hero" />
          <span className="mk-fillchart__bar" />
          <span className="mk-fillchart__bar" />
        </div>
      </div>
    </div>
  );
}

/* 5. Bar-chart card — the highlighted bar grows tall and turns green on hover.
   `tone="light"` renders a white card with blue bars (the Live Revenue card). */
export function BarChartCard({
  label = "Growth Velocity",
  tone = "blue",
}: {
  label?: string;
  tone?: "blue" | "light";
}) {
  return (
    <div className={"mk-bars" + (tone === "light" ? " mk-bars--light" : "")}>
      <div className="mk-bars__head">
        <span>{label}</span>
        <TrendUp size={16} />
      </div>
      <div className="mk-bars__row" aria-hidden>
        <span className="mk-bars__bar" />
        <span className="mk-bars__bar" />
        <span className="mk-bars__bar mk-bars__bar--hero" />
        <span className="mk-bars__bar" />
        <span className="mk-bars__bar" />
      </div>
    </div>
  );
}

/* 6. Process card — lifts, shadow grows, media zooms in on hover */
export function ProcessCard({
  img,
  icon,
  title,
  body,
  points = [],
}: {
  img: string;
  icon: ReactNode;
  title: string;
  body: string;
  points?: string[];
}) {
  return (
    <div className="mk-proc">
      <div className="mk-proc__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt="" />
      </div>
      <div className="mk-proc__body">
        <div className="mk-proc__head">
          <span className="mk-proc__chip">{icon}</span>
          <h3>{title}</h3>
        </div>
        <p className="mk-proc__b">{body}</p>
        {points.length > 0 && (
          <div className="mk-proc__list">
            {points.map((p) => (
              <div className="mk-proc__li" key={p}>
                <CheckCircle size={15} />
                {p}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* 7. Service detail card — border turns blue + lifts on hover. Pass `featured`
   for the permanently green-filled highlight card. Use `sections` for arbitrary
   labelled blocks (e.g. FOCUS), or the legacy challenges/deliverables pair. */
export function ServiceDetailCard({
  icon,
  title,
  body,
  challenges,
  deliverables,
  sections,
  featured = false,
  compact = false,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  challenges?: string;
  deliverables?: string;
  sections?: { label: string; text: string }[];
  featured?: boolean;
  /** Compact style: small icon inline with the title (the SEO/Brand/Ops cards). */
  compact?: boolean;
}) {
  const blocks =
    sections ??
    [
      { label: "Challenges solved", text: challenges ?? "" },
      { label: "Deliverables", text: deliverables ?? "" },
    ].filter((s) => s.text);
  return (
    <div
      className={
        "mk-detail" +
        (featured ? " mk-detail--feat" : "") +
        (compact ? " mk-detail--compact" : "")
      }
    >
      {compact ? (
        <div className="mk-detail__head">
          <span className="mk-detail__ic">{icon}</span>
          <div className="mk-detail__t">{title}</div>
        </div>
      ) : (
        <>
          <div className="mk-detail__chip">{icon}</div>
          <div className="mk-detail__t">{title}</div>
        </>
      )}
      <p className="mk-detail__b">{body}</p>
      {blocks.length > 0 && <div className="mk-detail__divider" />}
      {blocks.map((s) => (
        <div key={s.label}>
          <div className="mk-detail__label">{s.label}</div>
          <p className="mk-detail__sub">{s.text}</p>
        </div>
      ))}
    </div>
  );
}

/* Live Revenue card — white panel, blue icon chip, all-blue bars (4th tallest).
   On hover the bars rise with a slight stagger; they never turn green. */
export function RevenueCard({
  label = "Live Revenue",
}: {
  label?: string;
}) {
  return (
    <div className="mk-rev">
      <div className="mk-rev__head">
        <span className="mk-rev__chip">
          <BarChart size={18} />
        </span>
        <span className="mk-rev__label">{label}</span>
      </div>
      <div className="mk-rev__row" aria-hidden>
        <span className="mk-rev__bar" />
        <span className="mk-rev__bar" />
        <span className="mk-rev__bar" />
        <span className="mk-rev__bar mk-rev__bar--tall" />
        <span className="mk-rev__bar" />
      </div>
    </div>
  );
}

/* Score card — "94" beside a label. On hover a green progress ring draws around
   the number (card stays white, number stays dark). Pure CSS via dashoffset. */
export function ScoreCard({
  value = "94",
  label = "Target Efficiency",
  sub = "Updated 2m ago",
  percent = 94,
}: {
  value?: string;
  label?: string;
  sub?: string;
  percent?: number;
}) {
  const r = 33;
  const c = 2 * Math.PI * r;
  const off = c * (1 - percent / 100);
  return (
    <div className="mk-score">
      <div className="mk-score__ring">
        <svg viewBox="0 0 80 80" aria-hidden>
          <circle className="mk-score__track" cx="40" cy="40" r={r} />
          <circle
            className="mk-score__bar"
            cx="40"
            cy="40"
            r={r}
            style={
              {
                strokeDasharray: c,
                strokeDashoffset: c,
                "--mk-score-off": off,
              } as CSSProperties
            }
          />
        </svg>
        <span className="mk-score__num">{value}</span>
      </div>
      <div className="mk-score__meta">
        <b>{label}</b>
        <p>{sub}</p>
      </div>
    </div>
  );
}

/* 8. Comparison card — the "good" column gains a blue border + lift on hover */
type CmpItem = { title: string; body: string };
export function ComparisonCard({
  variant,
  icon,
  title,
  items,
}: {
  variant: "good" | "bad";
  icon: ReactNode;
  title: string;
  items: CmpItem[];
}) {
  const Mark = variant === "good" ? CheckCircle : XCircle;
  return (
    <div className={"mk-cmp mk-cmp--" + variant}>
      <div className={"mk-cmp__head" + (variant === "good" ? " mk-cmp__head--good" : "")}>
        {icon}
        {title}
      </div>
      <div className="mk-cmp__list">
        {items.map((it) => (
          <div className="mk-cmp__li" key={it.title}>
            <Mark size={18} />
            <div>
              <b>{it.title}</b>
              <p>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 9. Image banner — media zooms, overlay shifts, accent word colorizes */
export function ImageBanner({
  img,
  pre,
  accent,
  body,
}: {
  img: string;
  pre: string;
  accent: string;
  body?: string;
}) {
  return (
    <div className="mk-banner">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt="" />
      <div className="mk-banner__veil" aria-hidden />
      <div className="mk-banner__body">
        <div className="mk-banner__h">
          {pre} <span className="mk-banner__accent">{accent}</span>
        </div>
        {body ? <p>{body}</p> : null}
      </div>
    </div>
  );
}

/* 10. Integration card — each logo tints to brand blue as its row is hovered */
export function IntegrationCard({
  rows,
}: {
  rows: { name: string; meta: string; icon: ReactNode }[];
}) {
  return (
    <div className="mk-integ">
      {rows.map((r) => (
        <div className="mk-integ__row" key={r.name} tabIndex={0}>
          <span className="mk-integ__logo">{r.icon}</span>
          <div>
            <div className="mk-integ__name">{r.name}</div>
            <div className="mk-integ__meta">{r.meta}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Cursor-driven logo accordion (client component). */
export { ChannelSplit } from "./ChannelSplit";

/* Vertical word carousel for the Building block (client component). */
export { WordRotator } from "./WordRotator";

/* Re-export the icons the showcase wires in, so pages import from one place. */
export {
  Spark,
  TrendUp,
  Target,
  Users,
  Search,
  Pencil,
  Wrench,
  Activity,
  RefreshCw,
  Eye,
  BarChart,
  CheckCircle,
  ArrowRight,
};
