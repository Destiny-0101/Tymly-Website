import { ArrowRight } from 'lucide-react';
import { ActionLink, PageHero } from '../components/site/marketing-elements';
import { SiteLayout } from '../components/site/site-layout';

export function HowItWorksPage() {
  return (
    <SiteLayout path="/how-it-works">
      <PageHero
        eyebrow="The simple flow"
        title="Three steps. One clear countdown."
        intro="Tymly keeps the current timer workflow deliberately small, so the operator can focus on the room rather than the tool."
      />
      <section className="section section-tint">
        <div className="section-inner">
          <div className="steps">
            <article className="step">
              <span className="step-no">01 / SELECT</span>
              <h3>Choose your duration</h3>
              <p>Pick an available preset for the session. Common examples include 30, 45, 60 and 90 minutes.</p>
            </article>
            <article className="step">
              <span className="step-no">02 / BEGIN</span>
              <h3>Start the timer</h3>
              <p>When the session begins, start the countdown from the operator view.</p>
            </article>
            <article className="step">
              <span className="step-no">03 / WATCH</span>
              <h3>Monitor the display</h3>
              <p>Keep the large countdown visible and follow how much time remains.</p>
            </article>
          </div>
          <div className="callout">
            This guide describes the current timer workflow only. Shared schedules, team
            notifications and speaker-facing views are ideas for the future—not part of this
            flow.
          </div>
          <ActionLink href="/download">
            Check current availability <ArrowRight size={16} />
          </ActionLink>
        </div>
      </section>
    </SiteLayout>
  );
}
