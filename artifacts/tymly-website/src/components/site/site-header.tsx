import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { Brand } from './brand';

const navigationItems = [
  { href: '/product', label: 'Product' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

/** Shared top navigation, including the small-screen collapsible menu. */
export function SiteHeader() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="site-header">
      <Brand />
      <nav className="nav-links" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={location === item.href ? 'active' : ''}
            data-testid={`link-nav-${item.href.slice(1)}`}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/download" className="nav-cta" data-testid="link-nav-download">
          Get Tymly <ArrowRight size={15} />
        </Link>
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        data-testid="button-mobile-menu"
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      {menuOpen && (
        <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-testid={`link-mobile-${item.href.slice(1)}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" data-testid="link-mobile-contact">
            Contact
          </Link>
          <Link href="/download" className="nav-cta" data-testid="link-mobile-download">
            Get Tymly <ArrowRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}
