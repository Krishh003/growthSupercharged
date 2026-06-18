import { ArrowRight } from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span className="brand">GrowthSupercharge (GSC)</span>
          <p>
            High-performance leadership tools for the modern enterprise. Built
            for efficiency, momentum and rapid scaling.
          </p>
        </div>
        <div className="f-right">
          <div className="f-label">Contact</div>
          <p>Get the latest insights on business operations.</p>
          <form className="subscribe" action="#">
            <input type="email" placeholder="email@company.com" aria-label="Email" />
            <button type="button" aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
