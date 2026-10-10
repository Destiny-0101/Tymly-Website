import { Link } from 'wouter';
import { Brand } from './brand';

const footerLinks = [
  { href: '/product', label: 'Product', testId: 'link-footer-product' },
  { href: '/how-it-works', label: 'How it works', testId: 'link-footer-how' },
  { href: '/about', label: 'About Tymly', testId: 'link-footer-about' },
  { href: '/contact', label: 'Contact', testId: 'link-footer-contact' },
  { href: '/download', label: 'Availability', testId: 'link-footer-download' },
  { href: '/faq', label: 'FAQ', testId: 'link-footer-faq' },
  { href: '/privacy', label: 'Privacy', testId: 'link-footer-privacy' },
  { href: '/terms', label: 'Terms', testId: 'link-footer-terms' },
];

/** Shared site footer and routes to all public information pages. */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Brand footer />
          <p className="footer-brand">
            A little more calm for the people making live events happen.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} data-testid={item.testId}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Tymly. Clear time. Calmer cues.
      </div>
    </footer>
  );
}
