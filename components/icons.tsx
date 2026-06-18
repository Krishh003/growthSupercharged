import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 22, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export const ArrowRight = ({ size = 18, ...p }: IconProps) => (
  <svg {...base({ size, ...p })}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Video = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="6" width="13" height="12" rx="2" />
    <path d="M16 10l5-3v10l-5-3" />
  </svg>
);

export const TrendUp = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M21 7v5h-5" />
  </svg>
);

export const Target = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

export const Spark = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 18l5-6 3 3 7-8" />
  </svg>
);

export const BarChart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20V10M10 20V4M16 20v-7M20 20H2" />
  </svg>
);

export const Zap = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);

export const Building = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
  </svg>
);

export const Cog = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" />
  </svg>
);

export const Lock = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

export const CheckCircle = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5l2.5 2.5 4.5-5" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const Users = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const FileText = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);

export const NodesUp = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="5" cy="19" r="2.5" />
    <circle cx="19" cy="19" r="2.5" />
    <path d="M12 7.5v4M12 11.5l-5.5 5M12 11.5l5.5 5" />
  </svg>
);

export const Share = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />
  </svg>
);

export const GridSquare = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

export const ClockArrow = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2a10 10 0 1 0 10 10" />
    <path d="M12 6v6l4 2" />
    <path d="M22 8h-4V4" />
  </svg>
);

export const Search = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export const Pencil = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 19l7-7a4 4 0 0 0-5.66-5.66L3 17v4h4z" />
    <path d="M14 6l4 4" />
  </svg>
);

export const Wrench = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4l-5 5a2 2 0 1 0 3 3l5-5a5 5 0 0 0 6.4-6.4l-2.9 2.9-2-2 2.9-2.9z" />
  </svg>
);

export const Eye = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Activity = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12h4l3 8 4-16 3 8h4" />
  </svg>
);

export const Timer = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2 2M9 2h6" />
  </svg>
);

export const Bank = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21h18M4 10h16M5 21V10M19 21V10M12 3l8 4H4l8-4z" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const RefreshCw = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 12a9 9 0 1 1-2.6-6.4" />
    <path d="M21 4v5h-5" />
  </svg>
);

export const XCircle = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15 9l-6 6M9 9l6 6" />
  </svg>
);

export const ClockSmall = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

export const CircleTarget = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

export const VelocityIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M8 14v3M12 10v7M16 7v10" />
  </svg>
);
