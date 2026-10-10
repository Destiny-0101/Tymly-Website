import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { ActionLink, PageHero } from '../components/site/marketing-elements';
import { SiteLayout } from '../components/site/site-layout';
import { siteConfig } from '../site-config';

type ContactValues = {
  name: string;
  email: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const emptyValues: ContactValues = { name: '', email: '', message: '' };

function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Add a little more detail (at least 10 characters).';
  }

  return errors;
}

/** Contact form validates locally. It only opens a mailto hand-off when configured. */
export function ContactPage() {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});

  function updateValue(field: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateContact(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0 || !siteConfig.contactEmail) {
      return;
    }

    const subject = encodeURIComponent(`Message from ${values.name.trim()}`);
    const body = encodeURIComponent(
      `${values.message.trim()}\n\nReply to: ${values.email.trim()}`,
    );

    // The visitor's email application opens; the website does not send or store the message.
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <SiteLayout path="/contact">
      <PageHero
        eyebrow="Get in touch"
        title="A note, a question, an idea?"
        intro={
          siteConfig.contactEmail
            ? `We’d like to hear what live-event coordination looks like from where you stand. Email ${siteConfig.contactEmail} directly or use the message form below.`
            : 'We’d like to hear what live-event coordination looks like from where you stand. Contact details will appear here once a verified destination is available.'
        }
      />
      <section className="section section-tint">
        <div className="section-inner contact-layout">
          <div className="split-copy">
            <h2>Good tools begin with listening.</h2>
            <p>
              Tell us what you’re curious about, or what would make a timer useful in the
              middle of a live programme.
            </p>
            <div className="callout">
              {siteConfig.contactEmail
                ? 'A verified recipient is configured. After validation, the form opens your email application with a prepared message. It is not sent or stored by this website.'
                : 'There is no verified contact inbox or message backend configured yet. Your message will not be sent or stored by this website today.'}
            </div>
            {siteConfig.contactEmail && (
              <p className="contact-address">
                <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
              </p>
            )}
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(event) => updateValue('name', event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'error-name' : undefined}
                data-testid="input-contact-name"
              />
              {errors.name && <p id="error-name" className="form-error">{errors.name}</p>}
            </div>

            <div className="field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => updateValue('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'error-email' : undefined}
                data-testid="input-contact-email"
              />
              {errors.email && <p id="error-email" className="form-error">{errors.email}</p>}
            </div>

            <div className="field">
              <label htmlFor="contact-message">What’s on your mind?</label>
              <textarea
                id="contact-message"
                name="message"
                value={values.message}
                onChange={(event) => updateValue('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'error-message' : undefined}
                data-testid="input-contact-message"
              />
              {errors.message && (
                <p id="error-message" className="form-error">{errors.message}</p>
              )}
            </div>

            <button className="button-primary" type="submit" data-testid="button-contact-submit">
              {siteConfig.contactEmail ? 'Continue to email' : 'Validate message'}
              <ArrowRight size={16} />
            </button>
            <p className="form-note" data-testid="status-contact">
              {siteConfig.contactEmail
                ? 'Your email application will open with the message addressed. Review and send it there; Tymly does not receive or store this form.'
                : 'This form validates your details only. Until a verified recipient or backend is configured, no message is sent or stored.'}
            </p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
