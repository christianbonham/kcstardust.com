// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import HtmlHead from '@/components/HtmlHead';
import Marquee from '@/components/Marquee';
import Row from '@/components/Row';
import Spacer from '@/components/Space';

export default function Home() {
  return (
    <div>
      <HtmlHead title="Welcome" />
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
      <Spacer height="calc(80vh)" />
      <Marquee
        title="Instructional Design and UX Development Services"
        description="We provide world-class instructional design and
          UX design and development services through all phases of development."
      />

      <Row background="white" flexStyle={{ flexWrap: 'wrap' }}>
        <div className="kcs">
          <h1>Instructional Design</h1>
          <h2 className="flair">
            Engaging and enjoyable e-learning experiences for your team or
            business.
          </h2>
          <p>
            Create asynchronous learning modules and classes for your
            organization or business to deliver instructor-less learning
            experiences.
          </p>
          <p>
            <Link href="id.html">
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
            <Link href="ux.html">
              <a>Learn More</a>
            </Link>
          </p>
        </div>
      </Row>

      <Row background="grey">
        <div className="mL"></div>
        <div className="bed">
          <div className="col col-C">
            <div className="kcs partner-list">
              <div style={{ textAlign: 'center' }}>
                <h3>
                  You are invited to join the group of companies we&apos;ve
                  solved problems with!
                </h3>
              </div>
              <div className="partner-row">
                <div className="partner-col">
                  <Image
                    src="/images/lululemon-trans.png"
                    width="180"
                    height="44"
                    alt="lululemon"
                  />
                </div>
              </div>
              <div className="partner-row">
                <div className="partner-col">
                  <Image
                    src="/images/microsoft-trans.png"
                    width="140"
                    height="32"
                    alt="microsoft"
                  />
                </div>
                <div className="partner-col">
                  <Image
                    src="/images/expedia-trans.png"
                    width="140"
                    height="31"
                    alt="expedia"
                  />
                </div>
              </div>
              <div className="partner-row">
                <div className="partner-col">
                  <Image
                    src="/images/sugar-mnt-logo-slider-385.png"
                    width="140"
                    height="80"
                    alt="sugar mountain"
                  />
                </div>
                <div className="partner-col">
                  <Image
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
                <div className="partner-col">Sunshow Learning</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mR"></div>
      </Row>
    </div>
  );
}
