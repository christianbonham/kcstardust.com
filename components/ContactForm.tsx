// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
// import Grecaptcha from '@/components/Grecaptcha';

export default function ContactForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [disabled, setDisabled] = useState(false);

  const handleResponse = (result: any) => {
    setDisabled(false);
    console.log('result', result);
  };

  const sendPost = async (values: any) => {
    console.log('what', JSON.stringify(values));

    const res = await fetch('/api/email', {
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const result = await res.json();
    handleResponse(result);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setDisabled(true);

    (window as any).grecaptcha.ready(() => {
      (window as any).grecaptcha
        .execute('6LfbCpkcAAAAAMqmEguoTF4vpXJNZV4iT870m6Ay', {
          action: 'submit',
        })
        .then((token: string) => {
          console.log('grecaptcha.execute token', token);
          const form = e.target;
          const values = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            query: form.query.value,
            token: token,
          };
          console.log('submit', values);
          sendPost(values);
        });
    });
  };

  const renderIframe = () => {
    return (
      <iframe
        src="https://kcstardust.com/contact.php"
        title="KC Stardust Contact Form"
        height="600"
      />
    );
  };

  /*
  const renderForm = () => {
    return (
      <>
        <h2>Drop Us a Line</h2>
        <p>
          If you want us to hit the ground running, please let us know
          interested in. We will be happy to respond with the information you
          you need.
        </p>
        <form id="id-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            maxLength={255}
            autoComplete="name"
            placeholder="Your Name"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            maxLength={255}
            autoComplete="email"
            placeholder="Your Email Address"
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="subject"
            name="subject"
            id="subject"
            maxLength={255}
            placeholder="Subject"
          />

          <label htmlFor="query">Question:</label>
          <textarea
            cols={30}
            rows={8}
            name="query"
            id="query"
            placeholder="Your question"
          ></textarea>

          <button disabled={disabled}>Submit</button>

          <p id="recaptcha-terms">
            This site is protected by reCAPTCHA and the Google
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>{' '}
            and
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </form>
        <Grecaptcha />
      </>
    );
  };
  */

  return <div id="contact-form">{renderIframe()}</div>;
}
