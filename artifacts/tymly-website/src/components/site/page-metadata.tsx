import { useEffect } from 'react';
import { siteConfig } from '../../site-config';

export const pageMetadata = {
  '/': {
    title: 'Tymly — a calmer countdown for live events',
    description:
      'A simple desktop countdown timer for the people running live events. Choose a duration, start the clock and keep the programme moving.',
  },
  '/about': {
    title: 'About Tymly — made for the people behind the show',
    description:
      'The origin and mission behind Tymly: make the live-event moments that happen backstage feel a little more manageable.',
  },
  '/product': {
    title: 'Tymly timer — a focused desktop countdown',
    description:
      'See what Tymly does today: choose a preset duration, start the countdown and keep a clear eye on time during a live event.',
  },
  '/how-it-works': {
    title: 'How Tymly works — three steps to a clear countdown',
    description:
      'A practical guide to using the Tymly desktop timer: choose a duration, start it and monitor the countdown.',
  },
  '/contact': {
    title: 'Contact Tymly — get in touch about live events',
    description:
      'Questions or thoughts about Tymly? Find the current contact options and a transparent note about message availability.',
  },
  '/download': {
    title: 'Tymly download — availability and access',
    description:
      siteConfig.downloadUrl
        ? 'Open the configured Tymly desktop destination for current access details. No mobile app or app-store listing is presented as available.'
        : 'Check the current availability of Tymly and access details. No mobile app or unverified destination is presented as available.',
  },
  '/faq': {
    title: 'Tymly FAQ — answers about the event timer',
    description:
      'Straightforward answers about Tymly’s current desktop countdown timer, availability and future direction.',
  },
  '/privacy': {
    title: 'Tymly privacy notice — website draft',
    description:
      'A plain-language draft describing the scope of the Tymly marketing website privacy notice, for review before publication.',
  },
  '/terms': {
    title: 'Tymly terms — website draft',
    description:
      'A plain-language starter draft for terms covering the Tymly marketing website, subject to review before publication.',
  },
  '/404': {
    title: 'Page not found — Tymly',
    description:
      'The Tymly page you requested could not be found. Return to the home page or explore the product.',
  },
} as const;

type MetadataPath = keyof typeof pageMetadata;

function setMetaTag(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

/** Updates document title, search description, and social preview text for each route. */
export function PageMetadata({ path }: { path: string }) {
  const metadata = pageMetadata[path as MetadataPath] ?? pageMetadata['/404'];

  useEffect(() => {
    document.title = metadata.title;
    setMetaTag('meta[name="description"]', 'name', 'description', metadata.description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', metadata.title);
    setMetaTag(
      'meta[property="og:description"]',
      'property',
      'og:description',
      metadata.description,
    );
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.title);
    setMetaTag(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      metadata.description,
    );
  }, [metadata]);

  return null;
}
