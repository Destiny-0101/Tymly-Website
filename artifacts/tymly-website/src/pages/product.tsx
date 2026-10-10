import { ArrowRight, Check, Clock3, Monitor, Play } from 'lucide-react';
import { ActionLink, PageHero } from '../components/site/marketing-elements';
import { SiteLayout } from '../components/site/site-layout';

export function ProductPage() {
  return (
    <SiteLayout path="/product">
      <PageHero
        eyebrow="The product today"
        title="A focused timer for the person watching the clock."
        intro="Tymly’s current product is a desktop countdown timer. It’s designed to make one job feel straightforward: set a session duration and keep the remaining time in view."
      />
      <section className="section section-tint">
        <div className="section-inner">
          <div className="feature-grid">
            <article className="feature-card highlight">
              <div>
                <div className="icon-tile"><Clock3 size={22} /></div>
                <h3>Preset durations</h3>
                <p>Choose a common session length without fiddling with a complicated setup.</p>
              </div>
              <div className="mini-presets">
                <span>30 min</span><span>45 min</span><span>60 min</span><span>90 min</span>
              </div>
            </article>
            <article className="feature-card">
              <div className="icon-tile"><Monitor size={22} /></div>
              <h3>Large countdown display</h3>
              <p>Once the timer starts, monitor the visible countdown while the session is underway.</p>
            </article>
            <article className="feature-card">
              <div className="icon-tile"><Play size={22} /></div>
              <h3>Simple operator flow</h3>
              <p>Select a duration, start the timer and follow along. That’s the current experience.</p>
            </article>
            <article className="feature-card">
              <div className="icon-tile"><Check size={22} /></div>
              <h3>Desktop operation</h3>
              <p>A desktop destination is listed on the Availability page. No mobile app or app-store listing has been confirmed.</p>
            </article>
          </div>
          <div className="callout">
            Not current features: programme management, team coordination, notifications,
            speaker views, collaboration tools and third-party integrations. These remain
            future vision.
          </div>
          <ActionLink href="/how-it-works">
            See the three-step workflow <ArrowRight size={16} />
          </ActionLink>
        </div>
      </section>
    </SiteLayout>
  );
}
