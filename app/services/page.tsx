import type { Metadata } from "next";
import "../motion/motion.css";
import { SiteNav, SiteFooter } from "@/components/motion/SiteChrome";
import {
  CtaBanner,
  RevenueCard,
  ScoreCard,
  ServiceDetailCard,
  CheckCircle,
  ArrowRight,
} from "@/components/motion/Motion";
import {
  Target,
  TrendUp,
  BarChart,
  Users,
  RefreshCw,
  FileText,
  Share,
  Cog,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Services — Solutions Designed For Growth | Growth Supercharge",
  description:
    "We build the business operating systems that power high-performance leadership teams. Eliminate chaos with precision-engineered analytics and reporting.",
};

type Svc = {
  icon: React.ReactNode;
  title: string;
  body: string;
  challenges?: string;
  deliverables?: string;
  sections?: { label: string; text: string }[];
  featured?: boolean;
  compact?: boolean;
};

// Top cards (before the CTA): icon chip on top, challenges + deliverables.
const SERVICES_TOP: Svc[] = [
  {
    icon: <Target size={22} />,
    title: "Performance Marketing & Paid Social",
    body: "Turn ad spend into measurable growth. Launch, optimise, and scale campaigns across Meta, Google, LinkedIn, and other paid channels.",
  },
  {
    icon: <TrendUp size={22} />,
    title: "Growth Consulting",
    body: "Strategic advisory for scaling operations and identifying untapped market levers.",
    challenges: "Stagnant growth loops, messy scale-up operations.",
    deliverables: "6-Month Roadmap, Growth Audit, Market Analysis.",
    featured: true,
  },
  {
    icon: <BarChart size={22} />,
    title: "Business Intelligence",
    body: "Converting raw datasets into actionable intelligence for executive decision-makers.",
    challenges: "Siloed data, conflicting metrics across departments.",
    deliverables: "Data Warehouse Setup, Real-time BI Hub.",
  },
  {
    icon: <Users size={22} />,
    title: "Lead Generation & Consumer Acquisition",
    body: "Build predictable acquisition systems. Create scalable funnels that consistently attract, capture, and convert qualified leads and customers.",
    challenges: "Low lead volume, poor conversion rates, unpredictable growth.",
    deliverables: "Lead Funnels, Landing Pages, Conversion Optimisation, Acquisition Strategy",
  },
];

// Bottom cards (after the CTA).
const SERVICES_BOTTOM: Svc[] = [
  {
    icon: <RefreshCw size={22} />,
    title: "Lifecycle & CRM",
    body: "Create customer journeys that convert and retain. Automate communication across email, WhatsApp, and CRM channels to improve engagement",
    challenges: "Low retention, poor follow-up, disconnected customer journeys.",
    deliverables: "Lifecycle Automation, Customer Segmentation, Loyalty Programs, CRM Workflows",
  },
  {
    icon: <FileText size={22} />,
    title: "Tracking & Attribution",
    body: "Understand exactly where growth comes from.Connect marketing, sales, website, and CRM data into a unified measurement system that reveals what drives revenue and what doesn't.",
    challenges: "Unclear attribution, unreliable reporting, wasted ad spend.",
    deliverables: "Multi-Touch Attribution, Conversion Tracking, ROAS Dashboards, Customer Journey Mapping",
  },
  {
    icon: <Share size={22} />,
    title: "Content & Social Systems",
    body: "Build scalable content operations. Create repeatable systems for planning, producing, approving, and measuring content across teams and channels.",
    challenges: "Inconsistent publishing, content bottlenecks, poor visibility.",
    deliverables: "Content Calendars, Approval Workflows, Asset Libraries, Performance Tracking",
  },
  {
    icon: <Cog size={18} />,
    title: "SEO & AIO",
    compact: true,
    body: "Increase visibility where customers are searching. Improve search rankings through technical optimization, content strategy, and long-term organic growth initiatives.",
    sections: [{ label: "Focus", text: "Low organic traffic, poor discoverability" }],
  },
  {
    icon: <Cog size={18} />,
    title: "Brand & Creative",
    compact: true,
    body: "Build a brand people remember. Develop the positioning, messaging, and creative systems that help businesses stand out in competitive markets.",
    sections: [
      { label: "Focus", text: "Brand Strategy, Positioning Frameworks, Visual Identity Systems, Creative Direction" },
    ],
  },
  {
    icon: <Cog size={18} />,
    title: "Operational Infrastructure",
    compact: true,
    body: "Increase visibility where customers are searching. Improve search rankings through technical optimization, content strategy, and long-term organic growth initiatives.",
    sections: [{ label: "Focus", text: "Low organic traffic, poor discoverability" }],
  },
];

const DECISIONS = [
  { title: "Real-Time Visibility", body: "Monitor growth, marketing, sales, and operations in one place." },
  { title: "Forecasting & Planning", body: "Identify trends before they become problems." },
  { title: "Leadership Dashboards", body: "Designed for founders, executives, and decision-makers." },
];

function Card(s: Svc) {
  return (
    <ServiceDetailCard
      icon={s.icon}
      title={s.title}
      body={s.body}
      challenges={s.challenges}
      deliverables={s.deliverables}
      sections={s.sections}
      featured={s.featured}
      compact={s.compact}
    />
  );
}

export default function Services() {
  return (
    <div className="mk">
      <SiteNav active="/services" />

      {/* Hero bento */}
      <section className="mk-shell">
        <div className="mk-hero-bento">
          <div className="mk-hero-col">
            <div className="mk-hero mk-hero--plain">
              <div className="mk-hero__tag">Services / Growth Systems</div>
              <h2>
                Solutions Designed For Maximum{" "}
                <span className="mk-hero__grad">Growth</span>
              </h2>
              <p>
                We build the business operating systems that power
                high-performance leadership teams. Eliminate chaos with
                precision-engineered analytics and reporting.
              </p>
            </div>
          </div>
          <div className="mk-hero-col">
            <RevenueCard label="Live Revenue" />
            <ScoreCard
              value="94"
              label="Target Efficiency"
              sub="Updated 2m ago"
              percent={94}
            />
          </div>
        </div>
      </section>

      {/* Services grid — col1 stacks two cards, green sits centre,
          CTA spans the centre + right columns, then the rest in a 3-up grid */}
      <section className="mk-shell mk-section-pad">
        <div className="mk-svc-top">
          <div className="mk-svc-top__c1">
            <Card {...SERVICES_TOP[0]} />
            <Card {...SERVICES_TOP[3]} />
          </div>
          <div className="mk-svc-top__gc">
            <Card {...SERVICES_TOP[1]} />
          </div>
          <div className="mk-svc-top__bi">
            <Card {...SERVICES_TOP[2]} />
          </div>
          <div className="mk-svc-top__cta">
            <CtaBanner
              title="Ready to scale?"
              body="Centralise your leadership operations with our custom bento-style reporting."
              cta="Book Consultation"
            />
          </div>
        </div>
        <div className="mk-svc-bottom">
          {SERVICES_BOTTOM.map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Executive intelligence */}
      <section className="mk-shell mk-section-pad">
        <div className="mk-exec">
          <div>
            <div className="mk-exec__ey">Executive Intelligence</div>
            <h2>Power Better Decisions</h2>
            <p className="mk-exec__lead">
              Transform fragmented data into real-time dashboards and executive
              reporting systems that help leaders move faster and with
              confidence.
            </p>
            <div className="mk-exec__list">
              {DECISIONS.map((d) => (
                <div className="mk-exec__li" key={d.title}>
                  <CheckCircle size={20} />
                  <div>
                    <b>{d.title}</b>
                    <p>{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className="mk-btn mk-btn--blue">
              Book a Dashboard Consultation
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="mk-exec__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/dashboard-monitor.png" alt="Executive dashboard on a monitor" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
