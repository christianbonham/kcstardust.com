import { ReactElement } from 'react';

import Contact from '@/components/Contact';
import Header from '@/components/Header';
import HtmlHead from '@/components/HtmlHead';
import PageBackground from '@/components/PageBackground';
import PageFooter from '@/components/PageFooter';
import Space from '@/components/Space';
import Splash from './Splash';

interface ILayoutOneColumnProps {
  children?: ReactElement;
  hasSplash?: boolean;
  title: string;
  metaDescription: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function LayoutOneColumn(props: ILayoutOneColumnProps) {
  const { children, hasSplash = false, metaDescription, title } = props;
  return (
    <>
      <HtmlHead title={title} metaDescription={metaDescription} />
      <PageBackground />
      {hasSplash && <Splash />}
      <Header />
      <Space height="108px" />
      <main>{children}</main>
      <Space height="96px" />
      <Contact />
      <Space height="128px" />
      <PageFooter />
    </>
  );
}
