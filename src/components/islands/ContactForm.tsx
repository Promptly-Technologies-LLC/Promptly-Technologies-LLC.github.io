import { useForm, ValidationError } from '@formspree/react';
import '../ContactForm.css';

interface Props {
  formspreeFormId?: string;
}

function ContactFormInner({ formId }: { formId: string }) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <p>Thank you for your email. We&apos;ll be in touch soon!</p>;
  }

  return (
    <form onSubmit={(event) => void handleSubmit(event)}>
      <input id="email" type="email" name="email" placeholder="Email Address" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Project description" />
      <div>
        <button className="button" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
    </form>
  );
}

export default function ContactForm({ formspreeFormId: formId }: Props) {
  return (
    <section className="contact-section" id="contact">
      <div className="headercontainer">
        <h2 className="pt-12 pb-8">Contact</h2>
      </div>
      <div className="contact-container">
        <p>
          We&apos;ll build your made-to-order AI agent, app, or software automation in Python and
          Typescript. Contact us now to get a quote!
        </p>
        {formId ? (
          <ContactFormInner formId={formId} />
        ) : (
          <p className="text-red-600">
            Error: To use the ContactForm component, supply a formspreeFormId in siteproperties.json.
          </p>
        )}
      </div>
    </section>
  );
}
