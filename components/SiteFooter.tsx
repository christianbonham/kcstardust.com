import NavList from '@/components/NavList';
import Row from '@/components/Row';

import styles from '@/components/SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <Row id="site-footer-row" classes={styles.row}>
      <div className="col col-L">
        <NavList id="footer-nav" />
      </div>
      <div className="col col-R">
        &nbsp;
        {/*
            <ul id="social">
              <li><a href="https://twitter.com/WeAreKCStardust"><img src="/images/icons/twitter.svg" alt="Twitter"></a></li>
              <li><a href=""><img src="/images/icons/facebook.svg" alt="Facebook"></a></li>
              <li><a href=""><img src="/images/icons/linkedin.svg" alt="LinkedIn"></a></li>
              <li><a href=""><img src="/images/icons/youtube.svg" alt="YouTube"></a></li>
            </ul>
          */}
      </div>
    </Row>
  );
}
