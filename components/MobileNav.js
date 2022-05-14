import styles from "../styles/MobileNav.module.css";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import AppContext from "../components/AppContext";

const MobileNav = ({ visible }) => {
  const { shopUrl } = useContext(AppContext);
  const options = [
    { path: "/be-our-guest", label: "Be our guest" },
    { path: "/happenings", label: "Happenings" },
    { path: "/residencies", label: "Residencies" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: shopUrl, label: "Shop", target: "_blank" },
  ];

  const createLink = (path, text, target = "_self") => (
    <Link href={path || "#"}>
      <a className={styles.link} style={styles} target={target}>
        {text}
      </a>
    </Link>
  );

  return (
    <div className={`${styles.mobileNav} ${visible && styles.expanded}`}>
      <div className="holder">
        <div className="container-fluid">
          <div className={styles.inner}>
            <ul className={styles.list}>
              {options.map(({ path, label, target }, index) => (
                <li key={index}>{createLink(path, label, target)}</li>
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
    </div>
  );
};

export default MobileNav;
