import styles from './Contact.module.css';
import ContactForm from '@/contact/ContactForm';
import ContactIcons from '@/contact/ContactIcons';
import GridRow from '@/layout/GridRow';

export default function Contact() {
  return (
    <>
      <GridRow
        contentColor="white"
        contentWidth="sm"
        rowColor="white"
        transparency="margin"
      >
        <div className={styles.intro} id="contact">
          <h1>Contact us</h1>
          <p>
            Contact us directly from your device, or send us an email message
            using the form. We are ready to start solving problems!
          </p>
        </div>
      </GridRow>
      <GridRow
        contentColor="transparent"
        contentPadding="none"
        contentWidth="sm"
        rowColor="white"
        transparency="margin"
      >
        <ContactIcons />
      </GridRow>
      <GridRow
        contentColor="white"
        contentWidth="sm"
        rowColor="white"
        transparency="margin"
      >
        <ContactForm />
      </GridRow>
    </>
  );
}
