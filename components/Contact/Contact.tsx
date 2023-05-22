import styles from './Contact.module.css';
import ContactForm from '@/Contact/ContactForm';
import ContactIcons from '@/Contact/ContactIcons';
import GridRow from '@/GridRow';

export default function Contact() {
  return (
    <>
      <GridRow
        contentColor="white"
        contentPadding={false}
        contentWidth="sm"
        rowColor="white"
        transparency="margin"
      >
        <div className={styles.intro} id="contact">
          <h1>Contact us</h1>
          <h2>Help us, Help You</h2>
          <p>
            Contact us directly from your device, or send us an email message
            using the form. We are ready to start solving problems!
          </p>
        </div>
      </GridRow>
      <GridRow
        contentPadding={false}
        contentWidth="sm"
        rowColor="white"
        transparency="margin"
      >
        <ContactIcons />
      </GridRow>
      <GridRow
        contentColor="white"
        contentPadding={false}
        contentWidth="sm"
        rowColor="white"
        transparency="margin"
      >
        <ContactForm />
      </GridRow>
    </>
  );
}