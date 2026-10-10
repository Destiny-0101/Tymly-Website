import { ArrowRight } from 'lucide-react';
import { ActionLink, PageHero } from '../components/site/marketing-elements';
import { SiteLayout } from '../components/site/site-layout';

export function AboutPage() {
  return (
    <SiteLayout path="/about">
      <PageHero
        eyebrow="Why Tymly"
        title="We’re here for the people behind the show."
        intro="Live events ask a lot of the people making them happen. Tymly began with one practical thought: the tools backstage can feel calmer, clearer and easier to use."
      />
      <section className="prose-content">
        <h2>It starts with a real moment</h2>
        <p>
          In the middle of a programme, someone is always watching the clock. They are keeping
          speakers moving, cues aligned and the room in good shape—all while trying to stay
          present. A tiny bit of clarity can make a busy moment feel more manageable.
        </p>
        <h2>Our mission</h2>
        <p>
          Tymly’s mission is to make useful, approachable tools for people coordinating live
          events. The first step is deliberately focused: a desktop countdown timer with
          duration presets and a large, visible display.
        </p>
        <div className="callout">
          Today, Tymly is a timer—not a complete event-management platform. We’d rather be clear
          about that than promise more than exists.
        </div>
        <h2>Where the idea could go</h2>
        <p>
          Over time, we can imagine tools for programme planning, teams, notifications, speaker
          views, collaboration and integrations. These are future possibilities, not current
          features. We’re listening and learning before deciding what should come next.
        </p>
        <ActionLink href="/contact">
          Share a thought <ArrowRight size={16} />
        </ActionLink>
      </section>
    </SiteLayout>
  );
}
