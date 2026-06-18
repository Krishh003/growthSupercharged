import type { Metadata } from "next";
import "./motion.css";
import {
  HeroBlock,
  CtaBanner,
  NumberedCard,
  FillCard,
  BarChartCard,
  ProcessCard,
  ServiceDetailCard,
  ComparisonCard,
  ImageBanner,
  IntegrationCard,
  ChannelSplit,
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
} from "@/components/motion/Motion";

export const metadata: Metadata = {
  title: "Motion Kit — Smart-Animate hover components | Growth Supercharge",
  description:
    "Live, reusable hover interactions rebuilt from the Figma Smart-Animate spec.",
};

function Section({
  title,
  hint,
  wide,
  two,
  children,
}: {
  title: string;
  hint: string;
  wide?: boolean;
  two?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="mk-section">
      <div className="mk-section__head">
        <h2>{title}</h2>
        <em>{hint}</em>
      </div>
      <div
        className={
          "mk-grid" + (wide ? " mk-grid--wide" : two ? " mk-grid--2" : "")
        }
      >
        {children}
      </div>
    </section>
  );
}

export default function MotionKit() {
  return (
    <div className="mk mk-page">
      <div className="mk-wrap">
        <header className="mk-masthead">
          <h1>Motion Kit</h1>
          <p>
            Every interactive element from <code>animAssets/Frame&nbsp;3.png</code>,
            rebuilt as a live React + CSS component. Each one plays its Figma
            Smart-Animate transition between rest and hover state.
          </p>
          <div className="mk-hint">
            <span aria-hidden />
            Hover any card to play its transition
          </div>
        </header>

        {/* Hero + CTA */}
        <Section title="Hero & CTA blocks" hint="gradient blob drift + heading colorize" two>
          <HeroBlock />
          <CtaBanner />
        </Section>

        <Section title="More CTAs" hint="blue panel, drifting light blob" two>
          <CtaBanner
            title="Ready to supercharge?"
            body="Need a system that turns scattered reporting into one source of truth? Let us build it."
          />
          <CtaBanner
            title="Ready to build your growth infrastructure?"
            body="Get expert support to design systems and automation that accelerate compounding growth."
          />
        </Section>

        {/* Numbered cards */}
        <Section title="Numbered feature cards" hint="white → solid blue fill, text inverts">
          <NumberedCard
            n="01"
            title="Experienced Team and Network"
            body="Our team brings a wealth of experience from premier educational institutions and leading companies."
          />
          <NumberedCard
            n="02"
            title="End-to-End Growth Solutions"
            body="From digital marketing to scaling operations, we provide comprehensive solutions for your growth."
          />
          <NumberedCard
            n="03"
            title="Data-Driven Insights"
            body="Every decision is backed by data, ensuring you are on the right track for maximum ROI."
          />
        </Section>

        {/* Service category fill cards */}
        <Section title="Service category cards" hint="white → green / blue fill, icon + text invert">
          <FillCard
            tone="green"
            icon={<Spark size={22} />}
            title="Growth Consulting"
            body="Strategic advisory for scaling operations and unlocking untapped revenue through systemic optimisation."
          />
          <FillCard
            tone="blue"
            icon={<Target size={22} />}
            title="Lead Generation"
            body="Full-funnel acquisition systems that turn cold audiences into qualified, sales-ready pipeline."
          />
          <FillCard
            tone="green"
            icon={<BarChart size={22} />}
            title="Business Intelligence"
            body="Advanced data modeling and visualisation that turns raw operational data into actionable insight."
          />
        </Section>

        {/* Stat cards */}
        <Section title="Stat cards" hint="white → green fill, icon → white">
          <FillCard tone="green" icon={<TrendUp size={22} />} stat="+28%" title="Growth" body="Sustained, compounding expansion through systems intelligence." />
          <FillCard tone="green" icon={<Activity size={22} />} stat="Growth" title="Velocity" body="Eliminating friction from the value chain to maximise output per unit of effort." />
          <FillCard tone="blue" icon={<Target size={22} />} stat="3.4x" title="Efficiency" body="More output from the same team by removing operational drag." />
        </Section>

        {/* Bar chart */}
        <Section title="Bar-chart cards" hint="highlighted bar grows tall + turns green">
          <BarChartCard label="Growth Velocity" />
          <BarChartCard label="Pipeline Volume" />
          <BarChartCard label="Revenue Run-rate" />
        </Section>

        {/* Process cards */}
        <Section title="Process cards" hint="lift + shadow + media zoom">
          <ProcessCard
            img="/figma/boardroom.png"
            icon={<Search size={18} />}
            title="Discover"
            body="We begin by diving deep into your current situation, uncovering hidden bottlenecks and untapped growth."
            points={["Stakeholder Interviews", "KPI Alignment Session"]}
          />
          <ProcessCard
            img="/figma/dashboard-overview.png"
            icon={<BarChart size={18} />}
            title="Analyse"
            body="Data doesn't lie, but it does hide. We pull apart your funnel to find the real levers."
            points={["Funnel Audit", "Data Modelling"]}
          />
          <ProcessCard
            img="/figma/dashboard-monitor.png"
            icon={<Pencil size={18} />}
            title="Design"
            body="We architect a system of dashboards and automation tailored to your operating model."
            points={["System Blueprint", "Automation Map"]}
          />
        </Section>

        {/* Service detail cards */}
        <Section title="Service detail cards" hint="blue border + lift">
          <ServiceDetailCard
            icon={<Spark size={20} />}
            title="Content & Social Systems"
            body="Build scalable content operations. Repeatable systems for planning, producing, approving and measuring content across teams."
            challenges="Inconsistent publishing, content bottlenecks, poor visibility."
            deliverables="Content Calendars, Approval Workflows, Asset Libraries, Performance Tracking."
          />
          <ServiceDetailCard
            icon={<Pencil size={20} />}
            title="Brand & Creative"
            body="Build a brand people remember. Develop the positioning, messaging and creative systems that help businesses stand out."
            challenges="Weak positioning, inconsistent identity, slow creative output."
            deliverables="Brand Strategy, Positioning Frameworks, Visual Identity Systems."
          />
          <ServiceDetailCard
            icon={<Search size={20} />}
            title="SEO & AIO"
            body="Increase visibility where customers are searching. Improve rankings through technical optimisation, content strategy and long-term initiatives."
            challenges="Low organic traffic, poor discoverability."
            deliverables="Technical SEO, Content Roadmaps, AI-answer Optimisation."
          />
        </Section>

        {/* Comparison */}
        <Section title="Comparison columns" hint="the GSC column highlights its border on hover" two>
          <ComparisonCard
            variant="bad"
            icon={<RefreshCw size={18} />}
            title="Traditional Consulting"
            items={[
              { title: "Static Roadmaps", body: "Linear plans that become obsolete the moment market conditions shift." },
              { title: "Observation-Only", body: "Reports and slide decks that identify problems but rarely solve them." },
              { title: "Generalist Frameworks", body: "One-size-fits-all strategies applied to unique business ecosystems." },
            ]}
          />
          <ComparisonCard
            variant="good"
            icon={<Spark size={18} />}
            title="GSC Operating System"
            items={[
              { title: "Dynamic Adaptation", body: "Feedback-looped systems that evolve in real-time with your business." },
              { title: "Embedded Execution", body: "We don't just suggest the system; we build and run it with you." },
              { title: "Architectural Customisation", body: "Solutions engineered specifically for your unique growth bottlenecks." },
            ]}
          />
        </Section>

        {/* Image banners */}
        <Section title="Image banners" hint="media zoom + overlay shift + accent colorize" two>
          <ImageBanner
            img="/figma/boardroom.png"
            pre="The Architecture of"
            accent="Exponential Growth"
            body="We engineer the operational systems that compound results quarter over quarter."
          />
          <ImageBanner
            img="/figma/dashboard-overview.png"
            pre="Helping Businesses Make"
            accent="Better Decisions"
            body="One source of truth, surfaced the moment leadership needs it."
          />
        </Section>

        {/* Channel split — cursor driven */}
        <Section title="Channel split" hint="move cursor left → right: the nearest logo expands" two>
          <ChannelSplit label="Channel Split" />
          <ChannelSplit label="Ad Spend Mix" />
        </Section>

        {/* Integrations */}
        <Section title="Integration list" hint="each logo tints to brand blue on row hover">
          <IntegrationCard
            rows={[
              { name: "Meta Ads", meta: "Paid social", icon: <Target size={18} /> },
              { name: "Google Analytics", meta: "Attribution", icon: <Activity size={18} /> },
              { name: "LinkedIn", meta: "B2B reach", icon: <Users size={18} /> },
            ]}
          />
          <IntegrationCard
            rows={[
              { name: "HubSpot", meta: "CRM sync", icon: <RefreshCw size={18} /> },
              { name: "Looker", meta: "BI layer", icon: <Eye size={18} /> },
              { name: "Zapier", meta: "Automation", icon: <Wrench size={18} /> },
            ]}
          />
        </Section>
      </div>
    </div>
  );
}
