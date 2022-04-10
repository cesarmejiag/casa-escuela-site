import styles from "../styles/MobileNav.module.css";

import Link from "next/link";
import Image from "next/image";

const MobileNav = ({ visible }) => {
  const options = [
    { path: "/be-our-guest", label: "Be our guest" },
    { path: "/happenings", label: "Happenings" },
    { path: "/residencies", label: "Residencies" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "#", label: "Shop" },
  ];
  const createLink = (path, text) => (
    <Link href={path}>
      <a className={styles.link}>{text}</a>
    </Link>
  );

  return (
    <div className={`${styles.mobileNav} ${visible && styles.expanded}`}>
      <div className="container-fluid">
        <div className={styles.inner}>
          <ul class={styles.list}>
            {options.map(({ path, label }) => (
              <li>{createLink(path, label)}</li>
            ))}
          </ul>
          <div className={styles.bottom}>
            <div>
              <Image
                src="/images/icon-ce.svg"
                width={32}
                height={21}
                priority
              />
            </div>
            <div className={styles.text}>
              Your sanctuary
              <br /> in the heart of Merida
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
