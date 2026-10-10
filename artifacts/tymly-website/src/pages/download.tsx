import { ArrowRight } from 'lucide-react';
import { ActionLink, PageHero } from '../components/site/marketing-elements';
import { SiteLayout } from '../components/site/site-layout';
import { siteConfig } from '../site-config';

export function DownloadPage() {
  const downloadAvailable = Boolean(siteConfig.downloadUrl);

  return (
    <SiteLayout path="/download">
      <PageHero
        eyebrow="Availability"
        title="A clear answer about getting Tymly."
        intro={
          downloadAvailable
            ? 'A desktop destination is linked below. Check it for the current Tymly download and access details.'
            : 'We don’t have a verified public download destination or app-store listing to share yet. We won’t send you to a placeholder.'
        }
      />
      <section className="download-card">
        <div>
          <div className="status-label">
            {downloadAvailable ? 'Current status · desktop destination provided' : 'Current status · not configured'}
          </div>
          <h2>{downloadAvailable ? 'Open the Tymly desktop destination.' : 'No public download link yet.'}</h2>
          <p>
            {downloadAvailable
              ? 'A desktop destination has been provided below. Check it for the current download and installation details.'
              : 'Tymly is described here as a desktop countdown timer, but its public delivery method and download location have not been confirmed.'}
          </p>
        </div>
        {downloadAvailable ? (
          <a
            className="button-primary"
            href={siteConfig.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-download-destination"
          >
            Open desktop destination <ArrowRight size={16} />
          </a>
        ) : (
          <span className="button-secondary" aria-disabled="true" data-testid="status-download-unavailable">
            Not available yet
          </span>
        )}
      </section>
      <div style={{ textAlign: 'center', padding: '0 22px 75px', color: '#718099' }}>
        <p>Want to know when access is available?</p>
        <ActionLink href="/contact">
          Contact Tymly <ArrowRight size={16} />
        </ActionLink>
      </div>
    </SiteLayout>
  );
}
