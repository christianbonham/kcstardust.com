// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Grecaptcha from '@/components/Grecaptcha';

export default function ContactForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const values = {
      name: form.name.value,
      email: form.email.value,
      to: form.to.value,
      subject: form.subject.value,
      query: form.query.value,
    };
    console.log('submit', values);

    const res = await fetch('/api/email', {
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const result = await res.json();
    console.log('result', result);
  };

  /*  const renderIframe = () => {
    return (
      <iframe
        src="http://www.kcstardust.com/contact.php"
        title="KC Stardust Contact Form"
      />
    );
  }; */

  const renderForm = () => {
    return (
      <>
        <h2>Drop Us a Line</h2>
        <p>
          If you would want us to hit the ground running, please let us know
          what what you are interested in. We will be happy to respond with the
          information you need.
        </p>
        <form id="id-form" onSubmit={handleSubmit}>
          <input type="hidden" name="to" id="to" value="spam@kcstardust.com" />
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

          <button>Submit</button>

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

  return <div id="contact-form">{renderForm()}</div>;
}
