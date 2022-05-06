/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function PageHeader() {
  return (
    <>
      <div id="sticky-trigger"></div>
      <header id="header" className="nav-mode">
        <picture id="header-bg">
          <source
            srcSet="images/milkyway/1650x112-100.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="images/milkyway/1024x112-100.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcSet="images/milkyway/768x112-100.jpg"
            media="(min-width: 360px)"
          />
          <img src="images/milkyway/360x112-100.jpg" alt="" />
        </picture>
        <div id="primary-header">
          <div className="row-margin"></div>
          <div id="logo-row" className="row white">
            <div className="mL"></div>
            <div className="bed">
              <div className="col"></div>
              <div id="logo" className="col">
                <Link href="/index.html">
                  <a>
                    <img src="images/logo-48px.svg" alt="KC Stardust" />
                  </a>
                </Link>

                <ul id="intro-nav">
                  <li>
                    <Link href="index.html#services">Services</Link>
                  </li>
                  <li>
                    <Link href="about.html">About</Link>
                  </li>
                  <li>
                    <Link href="#contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col"></div>
            </div>
            <div className="mR"></div>
          </div>
          <div className="row-margin"></div>
        </div>

        <div id="nav-row" className="row">
          <div className="mL"></div>
          <div className="bed">
            <div className="col col-C">
              <ul id="nav">
                <li>
                  <Link href="index.html#services">Services</Link>
                </li>
                <li>
                  <Link href="about.html">About</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mR"></div>
        </div>
      </header>
    </>
  );
}
