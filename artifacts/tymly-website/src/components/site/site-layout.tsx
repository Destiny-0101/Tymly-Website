import type { ReactNode } from 'react';
import { PageMetadata } from './page-metadata';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

/** Wraps each route in the same navigation, metadata, and footer. */
export function SiteLayout({ path, children }: { path: string; children: ReactNode }) {
  return (
    <div className="site-shell">
      <PageMetadata path={path} />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
