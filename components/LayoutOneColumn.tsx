import { ReactElement } from 'react';

import Contact from '@/components/Contact';
import Header from '@/components/Header';
import HtmlHead from '@/components/HtmlHead';
import PageBackground from '@/components/PageBackground';
import SiteFooter from '@/components/SiteFooter';
import LegalFooter from '@/components/LegalFooter';
import Space from '@/components/Space';
import Splash from '@/components/Splash';

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

      <Space height="96px" />
      {showContact && <Contact />}
      <Space height="128px" />

      <footer>
        <SiteFooter />
        <LegalFooter />
      </footer>
    </>
  );
}
