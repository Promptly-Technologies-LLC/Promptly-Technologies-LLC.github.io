import { useForm, ValidationError } from '@formspree/react';
import '../ContactForm.css';

interface Props {
  formspreeFormId?: string;
}

function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="5.5" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M8 7.5 20 18M8 16.5 20 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CutStrip() {
  return (
    <div className="contact-cut-strip">
      <ScissorsIcon className="contact-scissors contact-scissors-left" />
      <div className="contact-cut-line" />
      <span className="contact-cut-caption">Cut along dashed line</span>
      <div className="contact-cut-line" />
      <ScissorsIcon className="contact-scissors contact-scissors-right" />
    </div>
  );
}

const CONTACT_REASONS = [
  {
    id: 'reason-data',
    label:
      'I need help extracting, collecting, transforming, loading, storing, governing, securing, or learning from data.',
  },
  {
    id: 'reason-collaborate',
    label: 'I want to fund, partner with, or work for Promptly Technologies.',
  },
  {
    id: 'reason-talk',
    label: 'I just want to talk!',
  },
] as const;

function ContactFormInner({ formId }: { formId: string }) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <p className="contact-success">Dispatch received. We&apos;ll be in touch soon!</p>;
  }

  return (
    <form className="contact-form" onSubmit={(event) => void handleSubmit(event)}>
      <fieldset className="contact-reasons">
        <legend>Check all that apply:</legend>
        {CONTACT_REASONS.map((reason) => (
          <label key={reason.id} className="contact-reason" htmlFor={reason.id}>
            <input id={reason.id} type="checkbox" name="reason" value={reason.label} />
            <span>{reason.label}</span>
          </label>
        ))}
      </fieldset>
      <div className="contact-field">
        <label htmlFor="email">Where to send the telegram (your email address):</label>
        <input id="email" type="email" name="email" required autoComplete="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="contact-field">
        <label htmlFor="message">
          Describe your data crisis or ambitious experiment (project details):
        </label>
        <textarea id="message" name="message" rows={5} required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="contact-submit">
        <button className="button" type="submit" disabled={state.submitting}>
          Transmit to headquarters!
        </button>
      </div>
    </form>
  );
}

export default function ContactForm({ formspreeFormId: formId }: Props) {
  return (
    <section className="contact-section" id="contact">
      <div className="headercontainer">
        <h2 className="pt-12 pb-8">Contact</h2>
      </div>
      <div className="contact-dispatch">
        <CutStrip />
        <h3 className="contact-dispatch-headline">
          Calling all researchers, founders, and ball-knowers! Mail this dispatch to Promptly
          Technologies today!
        </h3>
        {formId ? (
          <ContactFormInner formId={formId} />
        ) : (
          <p className="text-alert">
            Error: To use the ContactForm component, supply a formspreeFormId in siteproperties.json.
          </p>
        )}
        <div className="contact-cut-foot" aria-hidden="true" />
      </div>
    </section>
  );
}
