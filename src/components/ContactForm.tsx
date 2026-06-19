// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react';
import propertiesJSON from '../customizations/siteproperties.json';
import SiteProperties from '../types/siteproperties';
import './ContactForm.css';

export default function ContactForm() {
  const properties: SiteProperties = propertiesJSON;
  const formId = properties.formspreeFormId;
  const [state, handleSubmit] = formId ? useForm(formId) : [null, null];
  if (state?.succeeded) {
      return <p>Thank you for your email. We'll be in touch soon!</p>;
  }

  // Return component only if we have a formId
  return (
    <section className="contact-section" id="contact">
      <div className="headercontainer">
        <h1 className="pt-12 pb-8">Contact</h1>
      </div>
      <div className="contact-container">
        <p>We'll build your made-to-order AI agent, app, or software automation in Python and Typescript. Contact us now to get a quote!</p>
        {state ? 
          <form onSubmit={handleSubmit}>
              <input
                id="email"
                type="email" 
                name="email"
                placeholder="Email Address"
              />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
              <textarea
                id="message"
                name="message"
                placeholder="Project description"
              />
              <div>
                <button className="button" type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </div>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </form> : <p className="text-red-600">Error: To use the ContactForm component, supply a formspreeFormId in siteproperties.json.</p>
        }
      </div>
    </section>
  );
};