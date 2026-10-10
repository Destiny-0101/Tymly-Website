import { Link } from 'wouter';

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className="brand"
      aria-label="Tymly home"
      data-testid={footer ? 'link-footer-brand' : 'link-brand'}
    >
      {footer ? (
        <>
          <span className="brand-mark" aria-hidden="true" />
          tymly
        </>
      ) : (
        <img
          className="brand-logo"
          src={`${import.meta.env.BASE_URL}tymly-logo-header.png`}
          alt=""
        />
      )}
    </Link>
  );
}
