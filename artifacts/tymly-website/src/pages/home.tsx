import { ArrowRight } from 'lucide-react';
import { ActionLink, Eyebrow, StageIllustration, TimerFeatureCards } from '../components/site/marketing-elements';
import { SiteLayout } from '../components/site/site-layout';

export function HomePage() {
  return (
    <SiteLayout path="/">
      <section className="hero">
        <div className="animate-in">
          <Eyebrow>A clear cue for live events</Eyebrow>
          <h1>Make room for the moment.</h1>
          <p className="hero-copy">
            When the room is live and the schedule is moving, a clear countdown can make all
            the difference. Tymly keeps the time visible, without adding more to your plate.
          </p>
          <div className="hero-actions">
            <ActionLink href="/product">
              Meet the timer <ArrowRight size={16} />
            </ActionLink>
            <ActionLink href="/how-it-works" secondary>
              See how it works
            </ActionLink>
          </div>
          <div className="hero-note">
            <span />A focused desktop timer for event operators
          </div>
        </div>
        <div className="animate-in">
          <StageIllustration />
        </div>
      </section>

      <section className="section section-tint">
        <div className="section-inner">
          <div className="section-heading">
            <Eyebrow>Simple by design</Eyebrow>
            <h2>One job. A little less to think about.</h2>
            <p>
              Tymly’s current product is a desktop countdown timer, built around the small,
              important action of keeping a session on time.
            </p>
          </div>
          <TimerFeatureCards />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-heading">
            <Eyebrow>How it works</Eyebrow>
            <h2>From preset to “we’re right on time.”</h2>
            <p>
              No complicated setup. Just a small, practical tool for the person watching the
              clock.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <span className="step-no">01 / CHOOSE</span>
              <h3>Pick a duration</h3>
              <p>Select a common preset such as 30, 45, 60 or 90 minutes.</p>
            </article>
            <article className="step">
              <span className="step-no">02 / START</span>
              <h3>Start the countdown</h3>
              <p>Set the timer in motion when your session is ready to begin.</p>
            </article>
            <article className="step">
              <span className="step-no">03 / MONITOR</span>
              <h3>Keep time in view</h3>
              <p>Follow the large display while you help the programme move along.</p>
            </article>
          </div>
          <div style={{ marginTop: 34 }}>
            <ActionLink href="/how-it-works">
              Explore the workflow <ArrowRight size={16} />
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="section-inner">
          <div className="cta-panel">
            <div>
              <Eyebrow>Curious about Tymly?</Eyebrow>
              <h2>See what’s here today—and what’s still a next step.</h2>
              <p>We’ll always be clear about what the current timer does and what’s only a future idea.</p>
            </div>
            <ActionLink href="/product">
              Explore the product <ArrowRight size={16} />
            </ActionLink>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
