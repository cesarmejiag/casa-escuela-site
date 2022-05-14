import styles from "../styles/Nav.module.css";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import AppContext from "../components/AppContext";

const NavLink = ({ path, text, target = "_self" }) => {
  const router = useRouter();
  const active = router.asPath === path ? ` ${styles.active}` : ``;
  return (
    <Link href={path || "#"}>
      <a className={`${styles.link}${active}`} target={target}>
        {text}
      </a>
    </Link>
  );
};

const LangLink = () => {
  const router = useRouter();
  const text = router.locale === "en" ? "ESP" : "ENG";
  const locale = router.locale === "en" ? "es" : "en";
  return (
    <Link href={router.pathname} locale={locale}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
};

const Nav = ({ mobileVisible, onToggleClick }) => {
  const { shopUrl } = useContext(AppContext);
  const handleClick = () => onToggleClick();

  return (
    <nav
      className={`${styles.nav}${
        mobileVisible ? ` ${styles.mobileVisible}` : ""
      }`}
    >
      <div className="holder">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-2 col-md-4">
              <div
                className={`${styles.leftLinks} d-none d-md-flex justify-content-start`}
              >
                <NavLink path="/be-our-guest" text="Be our guest" />
                <NavLink path="/happenings" text="Happenings" />
                <NavLink path="/residencies" text="Residencies" />
              </div>
              <div className="d-flex d-md-none">
                <LangLink />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <Link href="/">
                <a className={styles.logo}>
                  <Image
                    layout="responsive"
                    height={20}
                    width={205}
                    src="/images/logo.svg"
                    priority
                  />
                </a>
              </Link>
            </div>
            <div className="col-2 col-md-4">
              <div
                className={`${styles.rightLinks} d-none d-md-flex justify-content-end`}
              >
                <NavLink path="/about" text="About" />
                <NavLink path="/contact" text="Contact" />
                <NavLink path={shopUrl} text="Shop" target="_blank" />
                <LangLink />
              </div>
              <div className="d-flex d-md-none">
                <button
                  className={`${styles.toggleBtn}${
                    mobileVisible ? ` ${styles.active}` : ""
                  }`}
                  onClick={handleClick}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
