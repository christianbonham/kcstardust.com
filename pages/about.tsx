import { ReactElement, PropsWithChildren } from 'react';
import Link from 'next/link';

import LayoutOneColumn from '@/components/LayoutOneColumn';
import Marquee from '@/components/Marquee';
import { Row, Column } from '@/components/Row';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function About(props: PropsWithChildren<{}>) {
  return (
    <>
      <Marquee
        title="About Us"
        subheader="Let's get to know each other better."
        description="We are a team of technology professionals based in Seattle, we
        provide world-class digital transformation services to business of
        all sizes. We've been around the block. Let us show you."
      />
      <Row rowColor="white" contentColor="white">
        <Column>
          <div className="kcs">
            <div className="bio">
              <div className="icons">
                <Link href="https://www.linkedin.com/in/christian-bonham/">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 
                    5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 
                    0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 
                    1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
              <h2>Christian Bonham</h2>
              <p>
                I bridge the gap between designers and developers. I have
                considerable experience developing high performance modular
                layout design systems for large enterprise web sites. My passion
                is usability, and my focus is on making the journey as intuitive
                as possible.
              </p>
              <p>
                After studying computer science at UC Santa Barbara, I started
                my career in UX/UI and Front-end development at Cisco Systems. I
                would spend the next 20 years collaborating with a large cross
                function team on every major project on Cisco.com. When I left
                Cisco I was leading a dozen engineers all over the world,
                working hand in hand with digital marketing designers,
                developing and supporting code for more than 2 million pages.
              </p>
            </div>
            <div className="bio">
              <div className="bio-header">
                <div className="icons">
                  <Link href="https://www.linkedin.com/in/-kristen-cooper/">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 
                      5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 
                      0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 
                      1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
                <h2>Kristen Cooper</h2>
              </div>
              <p>
                I am a learning & development professional with over a decade of
                experience. I began my journey into training & development in
                2012 creating large scale professional development workshops and
                evaluating training programs. Over the years I have worked with
                companies to help develop business processes, launch new teams,
                and train staff. I studied instructional design and e-learning
                development at the University of Washington, and have since
                worked with organizations as both a freelance consultant and
                in-house learning experience designer.
              </p>
            </div>
          </div>
        </Column>
      </Row>
    </>
  );
}

About.getLayout = function (page: ReactElement) {
  return (
    <LayoutOneColumn
      title="About Us"
      metaDescription="KC Stardust, company bio, leadership team"
    >
      <About>{page}</About>
    </LayoutOneColumn>
  );
};
