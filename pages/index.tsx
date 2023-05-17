/* eslint-disable @next/next/no-img-element */
import { ReactElement, PropsWithChildren } from 'react';
import Link from 'next/link';

import LayoutBasic from '@/LayoutBasic';
import Marquee from '@/Marquee';
import GridRow from '@/GridRow';
import Spacer from '@/Space';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Home(props: PropsWithChildren<{}>) {
  return (
    <div>
      <Spacer height="calc(80vh)" />
      <a id="services" style={{ display: 'block', height: '120px' }}></a>
      <Marquee
        title="Instructional Design and UX Development Services"
        description="We provide world-class instructional design and
          UX design and development services through all phases of development."
      />

      <GridRow rowColor="white" contentColor="white" dropShadow="bottom">
        <div className="kcs">
          <h1>Instructional Design</h1>
          <h2 className="flair">
            Engaging and enjoyable learning experiences for your team or
            business.
          </h2>
          <p>
            Organizations spend hundreds of billions of dollars on training
            globally every year, yet only 12% of employees say they apply new
            skills learned in learning and development programs to their jobs.
          </p>
          <h3>We are here to change that.</h3>
          <p>
            Let us set your organization up for success with enjoyable (and data
            driven!) learning experiences that produce real results.
          </p>
          <p>
            <Link href="/id">
              <a>Learn More</a>
            </Link>
          </p>
        </div>
        <hr />
        <div className="kcs">
          <h1>User Experience Development</h1>
          <h2 className="flair">
            Accessible, delightful and reliable user interface development at
            any scale.
          </h2>
          <p>
            We provide design and development services to create requirements,
            and implement user interfaces and digital experiences for your site
            or app.
          </p>
          <p>
            <Link href="/ux">
              <a>Learn More</a>
            </Link>
          </p>
        </div>
      </GridRow>

      <GridRow
        rowColor="grey"
        contentColor="grey"
        contentWidth="md"
        dropShadow="top"
      >
        <div className="kcs partner-list">
          <div style={{ textAlign: 'center' }}>
            <h3>
              You are invited to join the group of companies we&apos;ve
              partnered with!
            </h3>
          </div>
          <div className="partner-row">
            <div className="partner-col">
              <img
                src="/images/lululemon-trans.png"
                width="180"
                height="44"
                alt="lululemon"
              />
            </div>
          </div>
          <div className="partner-row">
            <div className="partner-col">
              <img
                src="/images/microsoft-trans.png"
                width="140"
                height="32"
                alt="microsoft"
              />
            </div>
            <div className="partner-col">
              <img
                src="/images/expedia-trans.png"
                width="140"
                height="31"
                alt="expedia"
              />
            </div>
          </div>
          <div className="partner-row">
            <div className="partner-col">
              <img
                src="/images/sugar-mnt-logo-slider-385.png"
                width="140"
                height="80"
                alt="sugar mountain"
              />
            </div>
            <div className="partner-col">
              <img
                src="/images/beechers-logo.svg"
                width="140"
                height="86"
                alt="beecher's handmade cheese"
              />
            </div>
          </div>
          <div className="partner-row">
            <div className="partner-col" style={{ fontSize: '1.25em' }}>
              Arpegi
            </div>
          </div>
          <div className="partner-row">
            <div className="partner-col">Napoli Communications</div>
          </div>
          <div className="partner-row">
            <div className="partner-col">Sunshower Learning</div>
          </div>
        </div>
      </GridRow>
    </div>
  );
}

Home.getLayout = function (page: ReactElement) {
  const meta =
    'KC Stardust, instructional design services, learning management system adminstration, ux development services, front-end web devlepment consulting, rapid prototyping, data-driven design and development, web performance auditing and optimization';
  return (
    <LayoutBasic
      hasSplash={true}
      showContact={true}
      title="Welcome!"
      metaDescription={meta}
    >
      <Home>{page}</Home>
    </LayoutBasic>
  );
};
