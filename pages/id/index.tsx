import { ReactElement, PropsWithChildren } from 'react';

import LayoutOneColumn from '@/components/LayoutOneColumn';
import Marquee from '@/components/Marquee';
import { Row, Column } from '@/components/Row';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function InstructionalDesign(props: PropsWithChildren<{}>) {
  return (
    <>
      <Marquee
        title="Instructional Design Services"
        description="We provide world-class instructional design and
          UX design and development services through all phases of development."
      />
      <Row rowColor="white" contentColor="white">
        <Column>
          <div className="kcs">
            <h1>Our Specialties</h1>
            <h2 className="flair">
              Engaging and enjoyable distance learning experiences for your team
              or business.
            </h2>
            <h2>Business analysis and L&D strategy consultation</h2>
            <p>
              Is training really the solution to your problem? Are you getting
              the full picture of why you are falling short of your business
              goals? Does your company have blind spots when it comes to
              supporting your employee learning, growth, and retention? We offer
              full spectrum performance evaluation for businesses and can help
              you develop a strategy to hit your performance metrics. We will
              never sell you a solution we do not believe will provide value to
              your organization.
            </p>

            <h2>Technical training</h2>
            <p>
              We use a combination of storytelling techniques and the socratic
              method to help distill complex&emdash;some might say,
              boring&emdash; technical information into easily digestible and
              experiences that engage learners@apos; long-term memories.
            </p>

            <h2>Soft skills & leadership development</h2>
            <p>
              We have created training programs covering dozens of highly sought
              after professional development topics such as customer engagement,
              building cross-functional partnerships, effective team
              collaboration, crucial conversations, storytelling, public
              speaking, building influence, leading through change, and more!
              Allow us to bring our vast experience in these domains to your
              organization and uplevel your workforce.
            </p>

            <h2>Data driven design and development</h2>
            <p>
              In the best learning experiences, design and development continues
              after go-live. We can help you tie your learning to organizational
              metrics, and can evaluate and implement design changes to improve
              the performance of your training
            </p>

            <h2>Full learner experience journeys</h2>
            <p>
              Did you know that all learning experiences have 5 phases? Learning
              is never a @rsquo;one and done@rsquo; event. We specialize in
              helping helping organizations shift their culture into one that
              fosters their talend development journey. We can help you
              determine the right tactics to ensure program success and support
              continuousperformance improvement.
            </p>
          </div>
        </Column>
      </Row>
    </>
  );
}

InstructionalDesign.getLayout = function (page: ReactElement) {
  return (
    <LayoutOneColumn
      title="Instructional Design"
      metaDescription="KC Stardust, 
      instructional design services, 
      learning management system adminstration."
    >
      <InstructionalDesign>{page}</InstructionalDesign>
    </LayoutOneColumn>
  );
};
