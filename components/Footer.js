import styles from "../styles/Footer.module.css";

import Link from "next/link";
import Image from "next/image";

import Weather from "./Weather";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="holder">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className={styles.logo}>
                    <Image
                      src="/images/icon-ce.svg"
                      layout="responsive"
                      priority
                      width={32}
                      height={21}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <div className={styles.weatherWrapper}>
                    <Weather />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="row">
                <div className="col-6 col-md-4">
                  <div>
                    <Link href="#">
                      <a className="text-uppercase">Location</a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/contact">
                      <a className="text-uppercase">Contact</a>
                    </Link>
                  </div>
                  <div className="instagram-link">
                    <Link href="https://www.instagram.com/casa.escuela/">
                      <a className="text-uppercase" target="_blank">Instagram</a>
                    </Link>
                  </div>
                </div>
                <div className="col-6 col-md-8">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div>
                        <Link href="/terms-conditions">
                          <a className="text-uppercase">Terms and Conditions</a>
                        </Link>
                      </div>
                      <div>
                        <Link href="/privacy-policy">
                          <a className="text-uppercase">Privacy & Policy</a>
                        </Link>
                      </div>
                      <div>
                        <Link href="/covid-policy">
                          <a className="text-uppercase">Covid Policy</a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="text-uppercase">
                        <div>All rights reserved</div>
                        <div>2022©</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media screen and (min-width: 768px) {
          .instagram-link {
            margin-top: 30px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
