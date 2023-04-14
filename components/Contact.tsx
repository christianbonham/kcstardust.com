import ContactForm from '@/components/ContactForm';
import ContactIcons from '@/components/ContactIcons';
import { Row, Column } from '@/components/Row';

export default function Contact() {
  return (
    <>
      <Row
        rowColor="white"
        contentColor="white"
        contentWidth="sm"
        transparency={true}
      >
        <Column>
          <div className="kcs" id="contact">
            <h1>Contact us</h1>
            <h2>Help us, Help You</h2>
            <p>
              Contact us directly from your device, or send us an email message
              using the form. We are ready to start solving problems!
            </p>
          </div>
        </Column>
      </Row>
      <Row rowColor="white" contentWidth="sm" transparency={true}>
        <Column noPadding={true}>
          <ContactIcons />
        </Column>
      </Row>

      <Row
        rowColor="white"
        contentWidth="sm"
        contentColor="white"
        transparency={true}
      >
        <Column noPadding={true}>
          <div className="kcs">
            <ContactForm />
          </div>
        </Column>
      </Row>
    </>
  );
}
