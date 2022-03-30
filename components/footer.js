import styles from "../styles/Footer.module.css";
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
                    <Image src="/images/icon-ce.svg" width={32} height={21} />
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
                <div className="col-4">
                  <div>Location</div>
                  <div>Contact</div>
                </div>
                <div className="col-4">
                  <div>Terms and Conditions</div>
                  <div>Privacy & Policy</div>
                </div>
                <div className="col-4">
                  <div>All rights reserved</div>
                  <div>2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
