import { ReactElement, PropsWithChildren } from 'react';

import LayoutBasic from '@/layout/LayoutBasic';
import Marquee from '@/marquee/Marquee';
import { GridRow } from '@/layout/GridRow';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function InstructionalDesign(props: PropsWithChildren<{}>) {
  return (
    <>
      <Marquee
        title="Learning Development and Instructional Design Services"
        description="We provide world-class instructional design and
          UX design and development services through all phases of development."
      />
      <GridRow rowColor="white" contentColor="white">
        <div className="kcs">
          <h1>Our Specialties</h1>
          <h2 className="flair large">
            Engaging and enjoyable learning experiences that produce real
            results.
          </h2>
          <h2>Learning &amp; Development Strategy Consulting</h2>
          <p>
            Is training really the solution to your problem? Do you have the
            full picture of why you&apos;re falling short of your business
            goals?
          </p>
          <p>
            Through full spectrum evaluation, we can help you identify blind
            spots and develop a strategy to achieve your performance metrics. We
            will never sell you a solution if we do not believe it will provide
            value to your organization.
          </p>

          <h2>Technical training</h2>
          <h2 className="flair">
            Complex technical information that is easy to digest, apply and
            remember.
          </h2>
          <ol>
            <li>
              <strong>SHOW DON&apos;T TELL.</strong>Experiential learning is our
              north star. We let learners take the lead with hands-on practice.
            </li>
            <li>
              <strong>REDUCE BARRIERS.</strong> We eliminate friction between
              training and application. We optimize design and modality for
              immediate on-the-job use.
            </li>
            <li>
              <strong>KEEP IT REAL.</strong> We use scenario-based storytelling
              to ground technical concepts in the real world and engage
              long-term memory.
            </li>
          </ol>

          <h2>Soft skills & leadership development</h2>
          <p>
            We have created training programs covering dozens of highly sought
            after professional development topics such as customer engagement,
            cross-functional partnerships, team collaboration, crucial
            conversations, storytelling, and more! Allow us to bring our
            experience in these domains to uplevel your workforce.
          </p>

          <h2>Data driven design and development</h2>
          <p>
            In the best learning experiences, design and development continue
            after go-live. We can help tie your learning to organizational
            metrics and implement design changes to improve training
            performance.
          </p>

          <h2>Full learner experience journeys</h2>
          <p>
            {`Did you know that all learning experiences have 5 phases? Learning
              is never a \u2018one and done\u2019 event. We specialize in
              helping helping organizations shift their cultures. We can help you
              determine the right tactics to ensure program success and support
              continuous performance improvement.`}
          </p>
        </div>
      </GridRow>
    </>
  );
}

InstructionalDesign.getLayout = function (page: ReactElement) {
  return (
    <LayoutBasic
      title="Instructional Design"
      metaDescription="KC Stardust, 
      instructional design services, 
      learning management system adminstration."
    >
      <InstructionalDesign>{page}</InstructionalDesign>
    </LayoutBasic>
  );
};
