import Link from "next/link";
import "./motion/motion.css";
import {
  HeroBlock,
  CtaBanner,
  NumberedCard,
  FillCard,
  FillChartCard,
  BarChartCard,
  ChannelSplit,
  WordRotator,
  Spark,
  TrendUp,
  Target,
  Activity,
  BarChart,
  CheckCircle,
  ArrowRight,
} from "@/components/motion/Motion";

/* Live Home page composed from the motion kit. Replaces the static-PNG home;
   the original is preserved in components/_StaticHomeBackup.tsx. */

const NAV = [
  { href: "/", label: "Home", active: true },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

function SiteNav() {
  return (
    <header className="mk-nav">
      <div className="mk-nav__in">
        <Link href="/" className="mk-nav__brand">
          Growth Supercharge
        </Link>
        <nav className="mk-nav__links">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} className={l.active ? "is-active" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="mk-btn mk-btn--blue">
          Book Consultation
          <ArrowRight size={15} />
        </Link>
      </div>
    </header>
  );
}

function DashRow({
  icon,
  name,
  meta,
}: {
  icon: React.ReactNode;
  name: string;
  meta: string;
}) {
  return (
    <div className="mk-dash__row">
      <span className="mk-dash__ic">{icon}</span>
      <div>
        <div className="mk-dash__nm">{name}</div>
        <div className="mk-dash__mt">{meta}</div>
      </div>
    </div>
  );
}

const SOLVES = [
  "Revenue & Growth Intelligence",
  "Unified Data & Reporting Dashboards",
  "Workflow Automation & AI Agents",
  "CRM & Marketing Attribution Systems",
  "Team Productivity Infrastructure",
  "Custom Reporting Stacks",
];

export default function Home() {
  return (
    <div className="mk">
      <SiteNav />

      {/* Hero bento */}
      <section className="mk-shell">
        <div className="mk-hero-bento">
          <div className="mk-hero-col">
            <HeroBlock />
            <div className="mk-duo">
              <BarChartCard label="Growth Velocity" />
              <FillCard
                tone="green"
                icon={<Spark size={20} />}
                stat="+28%"
                title="Ops Efficiency"
              />
            </div>
          </div>
          <div className="mk-hero-col">
            <div className="mk-build">
              <span>
                Building{" "}
                <b>
                  <WordRotator
                    words={["Systems.", "Scale", "Visibility.", "Advantage", "Momentum"]}
                  />
                </b>
              </span>
            </div>
            <div className="mk-dash">
              <div className="mk-dash__top">
                <span>Marketing ROI</span>
                <TrendUp size={16} />
              </div>
              <DashRow icon={<Target size={18} />} name="Meta Ads" meta="3.4x ROI" />
              <DashRow icon={<TrendUp size={18} />} name="LTV Tracking" meta="Active" />
              <DashRow icon={<Activity size={18} />} name="KPI" meta="Active" />
              <ChannelSplit label="Channel Split" bare />
            </div>
          </div>
        </div>
      </section>

      {/* What we solve for */}
      <section className="mk-shell mk-section-pad">
        <div className="mk-shead">
          <div className="mk-shead__ey">What We Solve For</div>
          <h2>Cohesive Structures &amp; Operational Architecture</h2>
        </div>
        <div className="mk-feat">
          <FillCard
            tone="green"
            icon={<Spark size={22} />}
            title="Growth Consulting"
            body="Strategic roadmap development to identify bottlenecks and unlock untapped revenue streams through systemic optimisation."
          />
          <FillChartCard
            tone="green"
            icon={<BarChart size={22} />}
            title="Business Intelligence"
            body="Advanced data modeling and visualisation that turns raw operational data into actionable insights for executive teams."
          />
          <div className="mk-everything">
            <h3>Everything you need to run a smarter business.</h3>
            <div className="mk-everything__grid">
              {SOLVES.map((s) => (
                <div className="mk-everything__li" key={s}>
                  <CheckCircle size={16} />
                  {s}
                </div>
              ))}
            </div>
          </div>
          <FillCard
            tone="blue"
            icon={<Target size={22} />}
            title="Growth Infrastructure"
            body="Custom-built reporting stacks and automation flows that create a stable foundation for scale."
          />
        </div>
      </section>

      {/* Who we are — GSC Framework */}
      <section className="mk-shell mk-section-pad">
        <div className="mk-shead mk-shead--split">
          <div>
            <div className="mk-shead__ey">Who We Are</div>
            <h2>The GSC Framework</h2>
          </div>
          <p>
            At Growth Supercharged, we go beyond the surface to deliver
            transformative growth. Our mission is simple: help businesses scale
            ambitiously. We combine growth strategy, analytics, automation, and
            operational infrastructure to help brands predict what&apos;s next in an
            increasingly competitive market, and scale up.
          </p>
        </div>
        <div className="mk-num-grid">
          <NumberedCard
            n="01"
            title="Experienced Team and Network"
            body="Our team brings a wealth of experience from premier educational institutions and leading companies, with an extensive client network and resource pool."
          />
          <NumberedCard
            n="02"
            title="End-to-End Growth Solutions"
            body="From digital marketing to scaling operations, we provide comprehensive solutions for your growth challenges."
          />
          <NumberedCard
            n="04"
            title="Dynamic and Disciplined Processes"
            body="A disciplined approach to growth planning, ensuring that every initiative aligns with your overall business objectives."
          />
          <NumberedCard
            n="03"
            title="Data-Driven Insights"
            body="Every decision is backed by data to ensure you are on the right track for maximum ROI."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mk-shell mk-section-pad">
        <CtaBanner
          variant="light"
          title="Ready to build your growth infrastructure?"
          body="Join elite organisations scaling with systemic precision and operational clarity."
          cta="Book a Consultation"
          tags={["Custom Deployments", "Enterprise Security"]}
        />
      </section>

      {/* Footer */}
      <footer className="mk-foot">
        <div className="mk-foot__in">
          <div>
            <div className="mk-foot__brand">Growth Supercharge (GSC)</div>
            <p>
              High-performance leadership tools for the modern enterprise. Built
              for efficiency, momentum and rapid scaling.
            </p>
          </div>
          <div>
            <div className="mk-foot__label">Contact</div>
            <p>Get the latest insights on business operations.</p>
            <form className="mk-foot__form" action="#">
              <input type="email" placeholder="email@company.com" aria-label="Email" />
              <button type="button" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
