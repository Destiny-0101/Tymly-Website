import { ArrowRight } from 'lucide-react';
import { ActionLink } from '../components/site/marketing-elements';
import { SiteLayout } from '../components/site/site-layout';

export function NotFoundPage() {
  return (
    <SiteLayout path="/404">
      <section className="notfound">
        <div className="big404" aria-hidden="true">404</div>
        <h1>This cue led nowhere.</h1>
        <p>The page may have moved, or the link may be off the running order.</p>
        <ActionLink href="/">
          Back to Tymly <ArrowRight size={16} />
        </ActionLink>
      </section>
    </SiteLayout>
  );
}
