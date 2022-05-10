import ContactForm from '@/components/ContactForm';
import Row from '@/components/Row';

export default function Contact() {
  const handleClick = () => {
    console.log('handleclick');
  };

  return (
    <Row
      background="white"
      colStyle={{ flexWrap: 'wrap' }}
      marginTransparency={true}
    >
      <div className="kcs">
        <h1>Contact us</h1>
        <h2>Help us, Help You</h2>
        <p>
          Contact us directly from your device, or send us an email message
          using the form. We are ready to start solving problems!
        </p>
        <a id="contact"></a>
        <div id="contact-icons">
          <ul>
            <li id="call-icon">
              <a href="tel:206-588-5802">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    className="shape-path"
                    d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 
                      12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 
                      1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 
                      0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 
                      2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 
                      6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"
                  ></path>
                </svg>
                <div className="caption">call</div>
              </a>
            </li>
            <li id="sms-icon">
              <a href="sms:206-588-5802">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    className="shape-path"
                    d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 
                        2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"
                  ></path>
                </svg>
                <div className="caption">text</div>
              </a>
            </li>
            <li id="juice-icon">
              <a id="juice-link" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    className="shape-path"
                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 
                        2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                  ></path>
                </svg>
                <div className="caption">email</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </Row>
  );
}
