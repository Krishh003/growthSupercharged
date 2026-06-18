import type { Metadata } from "next";
import "../motion/motion.css";
import { SiteNav, SiteFooter } from "@/components/motion/SiteChrome";
import { CtaBanner } from "@/components/motion/Motion";
import { Spark, Eye, GridSquare, Zap, Shield } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us — The Architecture of Exponential Growth | Growth Supercharge",
  description:
    "With years of combined experience across industries, our team brings a nuanced approach to business strategy, digital marketing, and operational scaling.",
};

type Principle = {
  icon: React.ReactNode;
  title: string;
  points: { label: string; text: string }[];
};

const DETERMINED: Principle = {
  icon: <Spark size={22} />,
  title: "We Are Determined, Dynamic and Creative:",
  points: [
    { label: "Innovative Thinking", text: "Our team challenges conventional approaches, brings fresh perspectives and unique ideas to drive innovation." },
    { label: "Customer-Centric Approach", text: "We put your customers at the heart of everything we do, generating creative solutions that address their needs and desires." },
    { label: "Experimentation and Iteration", text: "We encourage a culture of experimentation to test new ideas and learn from the results, fostering a continuous cycle of improvement." },
  ],
};
const DEEPER: Principle = {
  icon: <Eye size={22} />,
  title: "We Go Deeper",
  points: [
    { label: "Data-Driven Insights", text: "We leverage advanced analytics to uncover hidden growth opportunities within your existing market and customer base." },
    { label: "Market Intelligence", text: "Our team conducts in-depth market research to identify emerging trends and untapped segments." },
    { label: "Customer Analysis", text: "We delve into customer behavior, preferences, and pain points to develop targeted growth strategies." },
  ],
};
const DISCIPLINE: Principle = {
  icon: <GridSquare size={22} />,
  title: "We Bring Discipline",
  points: [
    { label: "Strategic Framework", text: "Our proprietary framework ensures a disciplined approach to growth planning, ensuring that every initiative aligns with your business objectives." },
    { label: "Performance Metrics", text: "We establish key performance indicators (KPIs) to track progress and measure the effectiveness of your growth initiatives." },
    { label: "Continuous Optimization", text: "We continually refine your growth strategy based on real-time data and evolving market dynamics." },
  ],
};

function Points({ points }: { points: Principle["points"] }) {
  return (
    <div className="mk-principle__list">
      {points.map((p) => (
        <p key={p.label}>
          <b>{p.label}:</b> {p.text}
        </p>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <div className="mk">
      <SiteNav active="/about" />

      {/* Hero banner — full bleed */}
      <section className="mk-about-hero">
        <div className="mk-about-hero__blob" aria-hidden />
        <div className="mk-about-hero__blob mk-about-hero__blob--2" aria-hidden />
        <div className="mk-about-hero__inner">
          <h1>
            The Architecture of <em>Exponential Growth</em>
          </h1>
          <p>
            With over ___ years of combined experience and expertise across
            various industries, our team brings a nuanced approach to business
            strategy, digital marketing, and operational scaling. We understand
            that every business is unique, and we tailor our solutions to meet
            your specific needs, ensuring your growth is accelerated and
            sustainable.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="mk-shell mk-section-pad">
        <div className="mk-ahead">
          <h2>Core Principles</h2>
          <p>The DNA of our operational philosophy.</p>
        </div>
        <div className="mk-principles">
          <div className="mk-principle mk-principles__tall">
            <div className="mk-principle__ic">{DEEPER.icon}</div>
            <h3>{DEEPER.title}</h3>
            <Points points={DEEPER.points} />
            <div className="mk-principle__bar" aria-hidden>
              <span />
            </div>
          </div>
          <div className="mk-principle mk-principle--accent">
            <div className="mk-principle__ic">{DETERMINED.icon}</div>
            <h3>{DETERMINED.title}</h3>
            <Points points={DETERMINED.points} />
          </div>
          <div className="mk-principle">
            <div className="mk-principle__ic">{DISCIPLINE.icon}</div>
            <h3>{DISCIPLINE.title}</h3>
            <Points points={DISCIPLINE.points} />
          </div>
        </div>
      </section>

      {/* Methods in Motion */}
      <section className="mk-shell mk-section-pad">
        <div className="mk-ahead">
          <h2>Methods in Motion</h2>
          <p>See how our framework translates into real-world performance tools for your executive team.</p>
        </div>
        <div className="mk-methods">
          <div className="mk-methods__main">
            <h3>Unified Executive Command</h3>
            <p>
              Our Step 03 &lsquo;Design&rsquo; phase culminates in a singular
              view of your business health, consolidating finance, ops, and
              growth into one portal.
            </p>
            <div className="mk-methods__shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/figma/dashboard-overview.png" alt="Unified executive dashboard" />
            </div>
          </div>
          <div className="mk-method">
            <div className="mk-method__ic">
              <Zap size={20} />
            </div>
            <h3>Real-time Sync</h3>
            <p>Never wait for monthly reports again. Your data flows in live.</p>
            <div className="mk-method__bar" aria-hidden>
              <span />
            </div>
          </div>
          <div className="mk-method">
            <div className="mk-method__ic">
              <Shield size={20} />
            </div>
            <h3>Bank-Grade Security</h3>
            <p>Your proprietary business data is encrypted at rest and in transit.</p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="mk-shell mk-section-pad">
        <div className="mk-team">
          <div className="mk-team__photo">
            <div className="mk-team__name">
              <b>Rohan Kumar, Founder</b>
              <span>OYO | IIT-M</span>
            </div>
          </div>
          <div className="mk-team__body">
            <div className="mk-team__ey">The Team</div>
            <h2>The People of Growth Supercharged</h2>
            <p>
              Rohan led online user acquisition for India and SEA at OYO. He&rsquo;s
              managed performance budgets up to $250K/month across Google, Meta,
              Programmatic and TikTok, built OYO&rsquo;s referral and CRM journeys
              from scratch, and scaled paid acquisition 2.2x / 3x / 1.7x across
              India, Indonesia and Malaysia at CACs of 0.8x / 1.4x / 1.0x. Across
              all of it, he plays the whole board on growth - from strategy, down
              to the single campaign, with a fast, incisive read on where a funnel
              is leaking and which lever actually moves the number.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mk-shell mk-section-pad">
        <CtaBanner
          center
          title="Ready to supercharge?"
          body="Build smarter systems, make better decisions, and unlock your next stage of growth."
          cta="Book a Consultation"
        />
      </section>

      <SiteFooter />
    </div>
  );
}
