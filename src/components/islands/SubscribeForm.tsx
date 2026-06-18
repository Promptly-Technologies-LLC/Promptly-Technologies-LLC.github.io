import { useEffect, useState } from 'react';
import siteProperties from '../../customizations/siteproperties.json';
import '../SubscribeForm.css';

export default function SubscribeForm() {
  const { convertKitFormId: formId, convertKitDataUid: dataUid } = siteProperties;
  const [message, setMessage] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const status = searchParams.get('status');
    if (status === 'success') {
      setMessage('Success! Now check your email to confirm your subscription.');
    } else if (status === 'failure') {
      setMessage('There was an issue with your subscription. Please try again.');
    }
  }, []);

  useEffect(() => {
    if (document.querySelector('script[src="https://f.convertkit.com/ckjs/ck.5.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="convertkit-form" id="subscribe">
      <p>Subscribe to get notified about new events!</p>
      <form
        action={`https://app.convertkit.com/forms/${formId}/subscriptions`}
        className="seva-form formkit-form"
        method="post"
        data-sv-form={formId}
        data-uid={dataUid}
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      >
        <div data-style="clean">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" />
          <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
            <div className="formkit-field">
              <input className="formkit-input" name="fields[name]" aria-label="Name" placeholder="Name" type="text" />
            </div>
            <div className="formkit-flow-control">
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  required
                  type="email"
                />
              </div>
              <button data-element="submit" className="button" type="submit">
                <div className="formkit-spinner">
                  <div />
                  <div />
                  <div />
                </div>
                <span>Subscribe</span>
              </button>
            </div>
            {message && <div>{message}</div>}
          </div>
        </div>
      </form>
    </div>
  );
}
