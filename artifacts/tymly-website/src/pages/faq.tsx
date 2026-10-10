import { ArrowRight } from 'lucide-react';
import { ActionLink, PageHero } from '../components/site/marketing-elements';
import { SiteLayout } from '../components/site/site-layout';
import { siteConfig } from '../site-config';

const questions = [
  {
    question: 'What is Tymly today?',
    answer:
      'Tymly is a desktop countdown timer for event operators. Choose a duration preset, start the timer and monitor the countdown display.',
  },
  {
    question: 'Which durations can I choose?',
    answer:
      'Common examples are 30, 45, 60 and 90 minutes. The available presets may depend on the current product build.',
  },
  {
    question: 'Does Tymly manage a full event programme?',
    answer:
      'Not today. Programme management is a future possibility, not a current capability.',
  },
  {
    question: 'Can my team receive notifications or see a speaker view?',
    answer:
      'Team notifications and speaker-facing views are part of the wider future vision only. They are not current features.',
  },
  {
    question: 'Is there a mobile app or a download link?',
    answer: siteConfig.downloadUrl
      ? 'A desktop destination is linked on the availability page. No mobile app or app-store listing is presented as available.'
      : 'No verified mobile app or public download link is available to share at this time. See the availability page for an honest update.',
  },
  {
    question: 'Does the contact form send my message?',
    answer: siteConfig.contactEmail
      ? `The form opens your email app with a prepared message addressed to ${siteConfig.contactEmail}. Review and send it there; the website does not send or store the message.`
      : 'The form validates your entries but does not send or store a message until a verified contact recipient is configured.',
  },
];

export function FAQPage() {
  return (
    <SiteLayout path="/faq">
      <PageHero
        eyebrow="Good to know"
        title="A few straight answers."
        intro="What Tymly does today, what is still an idea, and how to check availability."
      />
      <section className="faq-list" aria-label="Frequently asked questions">
        {questions.map(({ question, answer }) => (
          <details key={question} className="faq-item">
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
        <div style={{ marginTop: 35 }}>
          <ActionLink href="/contact">
            Still have a question? <ArrowRight size={16} />
          </ActionLink>
        </div>
      </section>
    </SiteLayout>
  );
}
