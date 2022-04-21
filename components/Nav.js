import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Nav = ({ mobileVisible, onToggleClick }) => {
  const router = useRouter();

  const createLink = (path, text) => {
    const active = router.asPath === path ? ` ${styles.active}` : ``;
    return (
      <Link href={path}>
        <a className={`${styles.link}${active}`}>{text}</a>
      </Link>
    );
  };

  const handleClick = () => onToggleClick();

  return (
    <nav>
      <div className="row align-items-center">
        <div className="col-2 col-md-4">
          <div
            className={`${styles.leftLinks} d-none d-md-flex justify-content-start`}
          >
            {createLink("/be-our-guest", "Be our guest")}
            {createLink("/happenings", "Happenings")}
            {createLink("/residencies", "Residencies")}
          </div>
          <div className="d-flex d-md-none">{createLink("#", "ESP")}</div>
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
            {createLink("/about", "About")}
            {createLink("/contact", "Contact")}
            {createLink("#", "Shop")}
          </div>
          <div className="d-flex d-md-none">
            <button className={`${styles.toggleBtn}${mobileVisible ? ` ${styles.active}` : ''}`} onClick={handleClick}></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
