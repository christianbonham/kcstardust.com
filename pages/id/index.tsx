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
            We can provide a complete evaluation of all the factors that can
            affect performance. We will look at potential gaps such as
            resources, motivation, knowledge and skills. This paints a clear
            picture of what is holding you back from your business goals. In
            this way, we can tailor your solution to something that will have
            maximum impact for your organization.
          </p>

          <h2>Technical training</h2>
          <p>
            We follow 3 key principles to distill complex technical information
            into something that is easy to digest, apply, and remember:
          </p>
          <ol>
            <li>
              <strong>SHOW DON&apos;T TELL.</strong> Experiential learning is
              our north star. We let learners take the lead with hands-on
              practice.
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
              helping organizations shift their cultures. We can help you
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
