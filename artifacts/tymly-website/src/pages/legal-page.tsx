import { PageHero } from '../components/site/marketing-elements';
import { SiteLayout } from '../components/site/site-layout';
import { siteConfig } from '../site-config';

type LegalPageKind = 'privacy' | 'terms';

/** Starter legal copy for the marketing website, not the desktop timer product. */
export function LegalPage({ kind }: { kind: LegalPageKind }) {
  const isPrivacy = kind === 'privacy';
  const path = `/${kind}`;
  const title = isPrivacy
    ? 'A plain-language privacy starting point.'
    : 'A straightforward starting point for website terms.';
  const draftLabel = isPrivacy ? 'privacy notice' : 'terms of use';

  return (
    <SiteLayout path={path}>
      <PageHero
        eyebrow={`${isPrivacy ? 'Privacy' : 'Terms'} · draft for review`}
        title={title}
        intro={`This is a starter draft for the Tymly marketing website only. It needs review and confirmation before it is treated as a final ${draftLabel}.`}
      />
      <article className="prose-content">
        <div className="callout">
          <strong>Draft for review—not legal advice.</strong> This copy is limited to the
          marketing website. It does not make claims about how the desktop timer handles data,
          and it should be reviewed before publication.
        </div>
        {isPrivacy ? <PrivacySections /> : <TermsSections />}
        <p>
          <small>
            Draft status: prepared for review. No effective date or legal entity details have
            been asserted.
          </small>
        </p>
      </article>
    </SiteLayout>
  );
}

function PrivacySections() {
  const contactDescription = siteConfig.contactEmail
    ? 'If you use the contact form, your browser opens your email application with the message addressed to the configured contact email. Tymly does not send or store the message through this website.'
    : 'If you use the contact form, the browser validates the fields locally. With no verified recipient or backend configured, the message is not sent or stored by this website.';

  return (
    <>
      <h2>What this draft covers</h2>
      <p>
        This draft concerns information you may provide while browsing the Tymly marketing
        website, such as details entered into the contact form. {contactDescription}
      </p>
      <h2>Website technical information</h2>
      <p>
        The website may rely on standard hosting and browser technologies to display pages and
        maintain basic functionality. The exact hosting logs, analytics, cookies and retention
        practices have not been verified for this draft. Before publishing a final notice, those
        details should be confirmed with the site operator and hosting provider.
      </p>
      <h2>Links and future product</h2>
      <p>
        The download page links to a separate Tymly destination. Review that destination’s privacy
        practices before interacting with it. This marketing website draft does not describe data
        handling inside the Tymly desktop product; that needs a separate, verified explanation if
        applicable.
      </p>
      <h2>Questions and updates</h2>
      <p>
        A general contact address is listed on the Contact page. Confirm that it is monitored for
        privacy requests before treating it as a privacy contact. This draft should also be
        updated with verified website practices and an effective date.
      </p>
    </>
  );
}

function TermsSections() {
  const contactDescription = siteConfig.contactEmail
    ? 'The form validates entries in the browser and opens the visitor’s email app with a prepared message to the configured address. The visitor must review and send it; the site does not send or store it.'
    : 'The form currently validates entries in the browser only. There is no configured recipient or backend, so it should not be treated as a submitted support request.';

  return (
    <>
      <h2>Website scope</h2>
      <p>
        This draft is intended to cover use of the Tymly marketing website and its public
        information pages. It is not a licence or agreement for the desktop timer, whose
        availability and terms have not been confirmed here.
      </p>
      <h2>Informational content</h2>
      <p>
        Website copy is provided to explain Tymly’s current stated capabilities and future
        vision. Availability may change, and pages should be kept accurate. No paid plan, price,
        customer endorsement or product guarantee is offered by this draft.
      </p>
      <h2>Contact form</h2>
      <p>{contactDescription}</p>
      <h2>External links and review</h2>
      <p>
        The Download page links to a separate destination, which may have its own terms. This
        starter copy requires review to confirm the website operator, applicable jurisdiction,
        effective date, hosting, and any other required provisions before publication.
      </p>
    </>
  );
}
