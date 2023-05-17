import { ReactElement, PropsWithChildren } from 'react';

import GridRow from '@/GridRow';
import LayoutBasic from '@/LayoutBasic';
import Marquee from '@/Marquee';

function UXRootPage(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: PropsWithChildren<{}>,
): ReactElement {
  return (
    <>
      <Marquee
        title="UX Design and Development Services"
        description="We provide world-class instructional design and
          UX design and development services through all phases of development."
      />
      <GridRow rowColor="white" contentColor="white">
        <div className="kcs">
          <h2 className="flair">
            Accessible, delightful, enterprise quality digital experiences of
            all shapes and sizes.
          </h2>
          <p>
            From hand-written front-end code for bespoke experiences to modular
            layout design systems implemented in your favorite framework we
            framework we provide effective development services uses the latest
            technologies and disciplines.
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
      </GridRow>

      <GridRow rowColor="grey" marginColor="grey" contentColor="grey">
        <div className="kcs">
          <h2>Design Services</h2>
          <p>
            Create and communicate the requirements for your app or digital
            experiences. We create effective design requirements for engineering
            engineering teams. From wireframes to high fidelity functional
            provide the level of detail you need.
          </p>
          <ul>
            <li>UI/UX Requirements Development</li>
            <li>Wireframes &amp; Mockups</li>
            <li>Functional Prototypes</li>
            <li>User Interaction Analysis</li>
            <li>User Journey and Persona Analysis</li>
          </ul>
        </div>
      </GridRow>
    </>
  );
}

UXRootPage.getLayout = function (page: ReactElement) {
  return (
    <LayoutBasic
      hasSplash={false}
      title="UX Development"
      metaDescription="UX Design and Development"
      showContact={true}
    >
      <UXRootPage>{page}</UXRootPage>
    </LayoutBasic>
  );
};

export default UXRootPage;
