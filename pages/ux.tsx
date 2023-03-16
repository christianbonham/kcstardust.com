import { ReactElement, PropsWithChildren } from 'react';

import Marquee from '@/components/Marquee';
import { Row, Column } from '@/components/Row';

import LayoutOneColumn from '@/components/LayoutOneColumn';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function UXDevelopment(props: PropsWithChildren<{}>) {
  return (
    <>
      <Marquee
        title="UX Design and Development Services"
        description="We provide world-class instructional design and
          UX design and development services through all phases of development."
      />
      <Row rowColor="white" contentColor="white">
        <Column>
          <div className="kcs">
            <h2 className="flair">
              Accessible, delightful, enterprise quality digital experiences of
              all shapes and sizes.
            </h2>
            <p>
              From hand-written front-end code for bespoke experiences to
              modular layout design systems implemented in your favorite
              framework we framework we provide effective development services
              uses the latest technologies and disciplines.
            </p>
            <ul className="disciplines">
              <li>
                <span>HTML</span>
              </li>
              <li>
                <span>CSS</span>
              </li>
              <li>
                <span>Javascript</span>
              </li>
              <li>
                <span>Typescript</span>
              </li>
              <li>
                <span>React</span>
              </li>
              <li>
                <span>NextJS</span>
              </li>
              <li>
                <span>NodeJS</span>
              </li>
              <li>
                <span>Adobe Experience Manager</span>
              </li>
            </ul>
            <ul>
              <li>Comprehensive Front-end Development</li>
              <li>REST API Development</li>
              <li>High Performance Animation</li>
              <li>Performance Optimzation</li>
              <li>Accessibility and WAI-ARIA</li>
              <li>Localization</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
        </Column>
      </Row>

      <Row rowColor="grey" marginColor="grey" contentColor="grey">
        <Column>
          <div className="kcs">
            <h2>Design Services</h2>
            <p>
              Create and communicate the requirements for your app or digital
              experiences. We create effective design requirements for
              engineering engineering teams. From wireframes to high fidelity
              functional provide the level of detail you need.
            </p>
            <ul>
              <li>UI/UX Requirements Development</li>
              <li>Wireframes &amp; Mockups</li>
              <li>Functional Prototypes</li>
              <li>User Interaction Analysis</li>
              <li>User Journey and Persona Analysis</li>
            </ul>
          </div>
        </Column>
      </Row>
    </>
  );
}

UXDevelopment.getLayout = function (page: ReactElement) {
  return (
    <LayoutOneColumn
      title="UX Development"
      metaDescription="KC Stardust, 
        instructional design services, 
        learning management system adminstration, 
        ux development services, 
        front-end web devlepment consulting, 
        rapid prototyping,
        data-driven design and development,
        web performance auditing and optimization"
    >
      <UXDevelopment>{page}</UXDevelopment>
    </LayoutOneColumn>
  );
};
