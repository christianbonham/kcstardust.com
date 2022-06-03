import { ReactElement, PropsWithChildren } from 'react';

import LayoutOneColumn from '@/components/LayoutOneColumn';
import Marquee from '@/components/Marquee';
import { Row, Column } from '@/components/Row';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function InstructionalDesign(props: PropsWithChildren<{}>) {
  return (
    <>
      <Marquee
        title="Instructional Design and UX Development Services"
        description="We provide world-class instructional design and
          UX design and development services through all phases of development."
      />
      <Row bgColor="white">
        <Column>
          <div className="kcs">
            <h1>Our Process</h1>
            <h2 className="flair">
              Engaging and enjoyable distance learning experiences for your team
              or business.
            </h2>

            <h2>Business Analysis and Training Consultation</h2>
            <p>
              Understand how team education and training can best be integrated
              in your business. Find out how distance learning can help you
              achieve your business goals.
            </p>

            <h2>Content development</h2>
            <p>
              Create engaging and effective learning materials and content. We
              can develop your education and training material from the ground
              up, or work with material you already have.
            </p>

            <h2>Test Driven Design and Development</h2>
            <p>
              In the best eLearning experiences, design and development
              continues after go-live. By tracking the behavior of learners
              through your courses, we can evaluate and implement design changes
              to improve the performance of your training.
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
