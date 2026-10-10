import type { ReactNode } from 'react';
import { Link } from 'wouter';
import { Clock3, Monitor } from 'lucide-react';

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="page-hero">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p className="intro">{intro}</p>
    </div>
  );
}

export function ActionLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={secondary ? 'button-secondary' : 'button-primary'}
      data-testid={`link-action-${href.slice(1)}`}
    >
      {children}
    </Link>
  );
}

/** Decorative timer illustration; it is not a product screenshot. */
export function StageIllustration() {
  return (
    <div
      className="stage-visual"
      role="img"
      aria-label="A countdown display framed by the curtains of a softly lit event stage"
    >
      <div className="stage-halo" />
      <div className="stage-beam" />
      <div className="stage-curtain left" />
      <div className="stage-curtain right" />
      <div className="stage-floor" />
      <div className="floating-tag top">
        On the clock
        <small>One clear view of time</small>
      </div>
      <div className="stage-screen">
        <div className="screen-top">
          <span>SESSION TIMER</span>
          <span className="screen-dot" />
        </div>
        <div className="timer-digits">42:18</div>
        <div className="screen-controls">
          <span className="screen-pill">30 min</span>
          <span className="screen-pill">45 min</span>
          <span className="screen-pill">60 min</span>
        </div>
        <div className="screen-button">Start timer</div>
      </div>
      <div className="floating-tag bottom">
        Ready when you are
        <small>Choose. Start. Keep an eye on time.</small>
      </div>
    </div>
  );
}

export function TimerFeatureCards() {
  return (
    <div className="feature-grid">
      <article className="feature-card highlight">
        <div>
          <div className="icon-tile">
            <Clock3 size={22} />
          </div>
          <h3>A clock you can see</h3>
          <p>A large countdown display gives the operator a clear view of how much time remains.</p>
        </div>
        <div className="mini-presets">
          <span>30 min</span>
          <span>45 min</span>
          <span>60 min</span>
          <span>90 min</span>
        </div>
      </article>
      <article className="feature-card">
        <div className="icon-tile">
          <Monitor size={22} />
        </div>
        <h3>A simple operator flow</h3>
        <p>
          Choose a duration preset, start the timer, then keep an eye on the countdown as the
          event unfolds.
        </p>
      </article>
    </div>
  );
}

