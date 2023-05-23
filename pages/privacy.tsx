import { ReactElement, PropsWithChildren } from 'react';

import GridRow from '@/layout/GridRow';
import LayoutBasic from '@/layout/LayoutBasic';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Privacy(props: PropsWithChildren<{}>) {
  return (
    <>
      <GridRow contentColor="white" transparency="margin">
        <h1>Privacy Policy</h1>

        <h2>What information do we collect?</h2>
        <p>
          We collect information from you when you register on our site, place
          an order, subscribe to our newsletter, respond to a survey or fill out
          a form.
        </p>
        <p>
          When ordering or registering on our site, as appropriate, you may be
          asked to enter your: name or e-mail address. You may, however, visit
          our site anonymously.
        </p>

        <h2>What do we use your information for?</h2>
        <p>
          Any of the information we collect from you may be used in one of the
          following ways:
        </p>
        <ul>
          <li>
            To personalize your experience (your information helps us to better
            respond to your individual needs)
          </li>
          <li>
            To improve our website (we continually strive to improve our website
            offerings based on the information and feedback we receive from you)
          </li>
          <li>
            To improve customer service (your information helps us to more
            effectively respond to your customer service requests and support
            needs)
          </li>
          <li>
            To administer a contest, promotion, survey or other site feature
          </li>
          <li>
            To send periodic emails (The email address you provide for order
            processing, may be used to send you information and updates
            pertaining to your order, in addition to receiving occasional
            company news, updates, related product or service information, etc.)
          </li>
        </ul>
        <p>
          Note: If at any time you would like to unsubscribe from receiving
          future emails, we include detailed unsubscribe instructions at the
          bottom of each email.
        </p>

        <h2>How do we protect your information?</h2>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information when you enter, submit, or access your
          personal information.
        </p>

        <h2>Do we use cookies?</h2>
        <p>
          Yes. (Cookies are small files that a site or its service provider
          transfers to your computers hard drive through your Web browser [if
          you allow] that enables the sites or service providers systems to
          recognize your browser and capture and remember certain information.)
        </p>
        <p>
          We use cookies to understand and save your preferences for future
          visits.
        </p>

        <h2>Do we disclose any information to outside parties?</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information. This does not include trusted
          third parties who assist us in operating our website, conducting our
          business, or servicing you, so long as those parties agree to keep
          this information confidential. We may also release your information
          when we believe release is appropriate to comply with the law, enforce
          our site policies, or protect ours or others rights, property, or
          safety. However, non-personally identifiable visitor information may
          be provided to other parties for marketing, advertising, or other
          uses.
        </p>

        <h2>Third party links</h2>
        <p>
          Occasionally, at our discretion, we may include or offer third party
          products or services on our website. These third party sites have
          separate and independent privacy policies. We therefore have no
          responsibility or liability for the content and activities of these
          linked sites. Nonetheless, we seek to protect the integrity of our
          site and welcome any feedback about these sites.
        </p>

        <h2>Terms and Conditions</h2>
        <p>
          Please also visit our Terms and Conditions section establishing the
          use, disclaimers, and limitations of liability governing the use of
          our website at https://avbc.com/terms.
        </p>

        <h2>Your Consent</h2>
        <p>By using our site, you consent to our privacy policy.</p>

        <h2>Changes to our Privacy Policy</h2>
        <p>
          If we decide to change our privacy policy, we will update the Privacy
          Policy modification date below.
        </p>
        <p>This policy was last modified on June 3, 2020.</p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          attorneys
        </p>
        <p>
          KC Stardust
          <br />
          14419 Greenwood Ave
          <br />
          Suite 420
          <br />
          Seattle, WA 98133
        </p>
      </GridRow>
    </>
  );
}

Privacy.getLayout = function (page: ReactElement) {
  return (
    <LayoutBasic
      title="Privacy Policy"
      metaDescription="KC Stardust privacy policy"
      showContact={false}
    >
      <Privacy>{page}</Privacy>
    </LayoutBasic>
  );
};
