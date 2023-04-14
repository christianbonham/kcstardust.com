import { ReactElement, PropsWithChildren } from 'react';

import { Row, Column } from '@/components/Row';
import Billboard from '@/components/Billboard/Billboard';
import BillboardItem from '@/components/Billboard/BillboardItem';
import LayoutOneColumn from '@/components/LayoutOneColumn';

export default function BillboardPage(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: PropsWithChildren<{}>,
): ReactElement {
  return (
    <Row rowColor="white" transparency={false}>
      <Column>
        <Billboard
          delay={3000}
          duration={600}
          imgHeight={720}
          imgWidth={1280}
          numSlices={40}
          rotate="ltr"
        >
          <BillboardItem
            imgSrc="/images/billboard/bold-1280.png"
            imgAlt="Bold Image"
            textColor="light"
          >
            <h1>Big and Bold Marketing Headline</h1>
            <h2>Let us show you how smoothly we can bold you over.</h2>
            <p>
              Learn more about things that are big and bold. We are the industry
              leaders in being large and in charge. Furthermore, you won&apos;t
              find anyone with more boldness in the business.
            </p>
          </BillboardItem>
          <BillboardItem
            imgSrc="/images/billboard/subtle-1280.png"
            imgAlt="Subtle Image"
            textColor="dark"
          >
            <h1>Maybe you Prefer Something a Bit More Subtle</h1>
            <h2>Let us show you how we put the wink in nod.</h2>
            <p>
              Big and bold are not your style? Whichever way you swipe, we have
              you covered on the subtle. Ask around and see what they say...
            </p>
          </BillboardItem>
          <BillboardItem
            imgSrc="/images/billboard/tiger-1280.png"
            imgAlt="Tiger Image"
            textColor="dark"
          >
            <h1>And Then There Is Mega-Fauna</h1>
            <h2>Don&apos;t even get us started with the animals!</h2>
            <p>
              From the smallest of the small to the largest of the large, we
              have you covered. We can even help you tiger up.
            </p>
          </BillboardItem>
          <BillboardItem
            imgSrc="/images/billboard/moose-1280.jpg"
            imgAlt="Moose Image"
            textColor="dark"
          >
            <h1>And Then There Is Mega-Fauna</h1>
            <h2>The crown jewel of the Great Northwest!</h2>
            <p>
              The fastest growing organ in the animal kingdom, the moose is a
              majestic creature. If you want us to help you be a moose, we can
              help you be a moose.
            </p>
          </BillboardItem>
        </Billboard>
      </Column>
    </Row>
  );
}

BillboardPage.getLayout = function (page: ReactElement) {
  return (
    <LayoutOneColumn
      title="UX Development"
      metaDescription="Retro billboard demo page."
      showContact={false}
    >
      <BillboardPage>{page}</BillboardPage>
    </LayoutOneColumn>
  );
};
