import { ReactElement } from 'react';
import Script from 'next/script';

import Contact from '@/Contact/Contact';
import Header from '@/header/Header';
import HtmlHead from '@/HtmlHead';
import PageBackground from '@/PageBackground';
import SiteFooter from '@/SiteFooter';
import LegalFooter from '@/LegalFooter';
import Transition from '@/Transition';
import Space from '@/Space';
import Splash from '@/Splash';

interface ILayoutOneColumnProps {
  children?: ReactElement;
  hasSplash?: boolean;
  title: string;
  metaDescription: string;
  showContact?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function LayoutOneColumn(props: ILayoutOneColumnProps) {
  const {
    children,
    hasSplash = false,
    metaDescription,
    showContact = true,
    title,
  } = props;
  return (
    <>
      <HtmlHead title={title} metaDescription={metaDescription} />
      <PageBackground />

      {hasSplash && <Splash />}

      <Header />
      {hasSplash && <Space height="108px" />}

      <main>{children}</main>

      <Transition />

      {showContact && <Contact />}

      <footer>
        <SiteFooter />
        <LegalFooter />
      </footer>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6LfbCpkcAAAAAMqmEguoTF4vpXJNZV4iT870m6Ay"
        strategy="afterInteractive"
      />
    </>
  );
}
