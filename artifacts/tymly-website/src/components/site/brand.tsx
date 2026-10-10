import { Link } from 'wouter';

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className="brand"
      aria-label="Tymly home"
      data-testid={footer ? 'link-footer-brand' : 'link-brand'}
    >
      <span className="brand-mark" aria-hidden="true" />
      tymly
    </Link>
  );
}
