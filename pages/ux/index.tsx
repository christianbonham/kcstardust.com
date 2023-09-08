import { ReactElement, PropsWithChildren } from 'react';

import GridRow from '@/layout/GridRow';
import LayoutBasic from '@/layout/LayoutBasic';
import Marquee from '@/marquee/Marquee';

function UXRootPage(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: PropsWithChildren<{}>,
): ReactElement {
  return (
    <>
      <Marquee
        title="UX Design and Development Services"
        description="We provide world-class User Experience design and
          development services through all phases of development."
      />
      <GridRow rowColor="white" contentColor="white">
        <div className="kcs">
          <h1>UX Development Services</h1>
          <h2 className="flair">
            Accessible, delightful, enterprise quality digital experiences of
            all shapes and sizes.
          </h2>
          <p>
            From hand-written front-end code for bespoke experiences to modular
            layout design systems implemented in your favorite framework, we
            provide effective development services uses technologies and
            disciplines.
          </p>
          <ul className="disciplines">
            <li>
              <span>HTML5</span>
            </li>
            <li>
              <span>CSS3</span>
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
          <h1>Design Services</h1>
          <h2 className="flair">
            Engineering aware design requirements for your apps and digital
            experiences.
          </h2>
          <p>
            We create effective design requirements that enable engineering
            teams to thrive. From wireframes and high fidelity functional
            prototypes, to fully realized design systems, we provide the level
            of detail you need.
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
