import { ReactElement, PropsWithChildren } from 'react';
import Link from 'next/link';

import AuthorBio from '@/AuthorBio/AuthorBio';
import GridRow from '@/layout/GridRow';
import LayoutBasic from '@/layout/LayoutBasic';
import Marquee from '@/marquee/Marquee';

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
      <GridRow rowColor="white" contentColor="white">
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
            <AuthorBio
              name="Christian Bonham"
              title="Engineering Leader | Developer | Program Manager"
            >
              <p>
                I am a veteran developer of more than 25 years. I have used that
                time leading engineering teams and collaborating with designers
                to implementing omni-channel digital marketing experiences. My
                talents include both engineering management and team building,
                as well as the creative and coding chops to lead the
                architectural design and implementation of design systems for
                the web. I have a proven track record of enabling talented teams
                in adopting emerging web technologies and platforms, on millions
                of millions of pages at once, repeatedly over time.
              </p>
              <p>
                My passion is usability, and my focus is on making the journey
                as intuitive for users as possible. My experience is in enabling
                creative teams to efficiently advance brand and business
                objectives, while enabling engineering iteration and cost
                savings. I&apos;m looking forward to hearing about problem You
                have to solve.
              </p>
            </AuthorBio>
          </div>
        </div>
        <div className="kcs">
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
              <AuthorBio
                name="Kristen Cooper"
                title="Talent Development | Instructional Design"
              >
                <p>
                  I am a learning & development professional with over a decade
                  of of experience. I began my journey into training &
                  development in 2012 creating large scale professional
                  development workshops and evaluating training programs. Over
                  the years I have worked with companies to help develop
                  business processes, launch new teams, and train staff. I
                  studied instructional design and e-learning development at the
                  University of Washington, and have worked with organizations
                  as both a freelance consultant and in-house learning
                  experience designer.
                </p>
              </AuthorBio>
            </div>
          </div>
        </div>
      </GridRow>
    </>
  );
}

About.getLayout = function (page: ReactElement) {
  return (
    <LayoutBasic
      title="About Us"
      metaDescription="KC Stardust, company bio, leadership team"
    >
      <About>{page}</About>
    </LayoutBasic>
  );
};
