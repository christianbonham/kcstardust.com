import Head from 'next/head';

import Header from '@/components/Header';
import PageBackground from '@/components/PageBackground';
import PageFooter from '@/components/PageFooter';
import Splash from '@/components/Splash';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function LayoutOneColumn(props: any) {
  const { children } = props;
  return (
    <>
      <Head>
        <meta
          key="description"
          name="description"
          content="KC Stardust, 
            instructional design services, 
            learning management system adminstration, 
            ux development services, 
            front-end web devlepment consulting, 
            rapid prototyping,
            data-driven design and development,
            web performance auditing and optimization"
        />
      </Head>
      <PageBackground />
      <Splash />
      <Header />
      <main>{children}</main>

      <PageFooter />
    </>
  );
}
