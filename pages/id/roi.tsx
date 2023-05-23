import { ReactElement, PropsWithChildren } from 'react';

import LayoutOneColumn from '@/layout/LayoutOneColumn';
import Marquee from '@/Marquee';
import { GridRow } from '@/layout/GridRow';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function InstructionalDesign(props: PropsWithChildren<{}>) {
  return (
    <>
      <Marquee
        title="The Value of Instructional Design"
        description="We provide world-class instructional design and
          UX design and development services through all phases of development."
      />
      <GridRow rowColor="white" contentColor="white">
        <div className="kcs">
          <h2 className="flair">What can KC Stardust do for your business?</h2>
          <p className="large">
            We have helped organizations from 5 person startups to the largest
            technology and retail brands in the world create lasting impact
            through training. Let us do the same for you!
          </p>
          <p>
            Developed and launched a library of resources, templates, and
            training development processes that empowered a global technology
            organization to create their own highly effective learning
            experiences, streamline operations of multiple L&D teams, and reduce
            average GTM times of training programs from over 6 months to less
            than 4 weeks.
          </p>
          <i>
            <strong>Estimated ROI: 200-300k per year</strong>
          </i>
          <p>
            Designed and launched a 0-1 global onboarding curriculum for a major
            retail clothing brand. Outcomes of program include: over 98% learner
            approval rating of program, decrease in onboarding costs by over
            90%, and secondary metric effects such as significant reduction in
            IT ticketing times.{' '}
          </p>
          <i>
            <strong>Estimated ROI: 400-500k per year </strong>
          </i>
          <p>
            Helped a top tech organization design and launch a 0-1 global
            fintech training program for cloud architects which resulted in
            increased contract wins for the organization and an increase in
            customer satisfaction ratings.{' '}
          </p>
          <i>
            <strong>Estimated ROI: 1M- 2M per year</strong>
          </i>
        </div>
      </GridRow>
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
