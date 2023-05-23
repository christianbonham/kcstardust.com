import { ReactElement } from 'react';
import Script from 'next/script';

import Contact from '@/contact/Contact';
import Header from '@/header/Header';
import HtmlHead from '@/HtmlHead';
import PageBed from './PageBed';
import PageBackground from './PageBackground';
import SiteFooter from '@/footer/SiteFooter';
import LegalFooter from '@/footer/LegalFooter';
import Space from '@/splash/Space';
import Splash from '@/splash/Splash';
import Transition from '@/layout/Transition';

interface ILayoutBasicProps {
  children?: ReactElement;
  hasSplash?: boolean;
  title: string;
  metaDescription: string;
  showContact?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function LayoutOneColumn(props: ILayoutBasicProps) {
  const {
    children,
    hasSplash = false,
    metaDescription,
    showContact = true,
    title,
  } = props;
  return (
    <PageBed>
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
    </PageBed>
  );
}
