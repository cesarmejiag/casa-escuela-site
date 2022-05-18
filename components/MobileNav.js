import styles from "../styles/MobileNav.module.css";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import AppContext from "../components/AppContext";

const NavLink = ({ path, text, target = "_self" }) => {
  const { locale } = useRouter();
  return (
    <Link href={path || "#"}>
      <a className={styles.link} style={styles} target={target}>
        {text[locale]}
      </a>
    </Link>
  );
};

const MobileNav = ({ visible }) => {
  const { shopUrl } = useContext(AppContext);
  const options = [
    { path: "/be-our-guest", text: { en: "Be our guest", es: "Visitanos" } },
    { path: "/happenings", text: { en: "Happenings", es: "Eventos" } },
    { path: "/residencies", text: { en: "Residencies", es: "Residencias" } },
    { path: "/about", text: { en: "About", es: "Nosotros" } },
    { path: "/contact", text: { en: "Contact", es: "Contacto" } },
    { path: shopUrl, text: { en: "Shop", es: "Tienda" }, target: "_blank" },
  ];

  return (
    <div className={`${styles.mobileNav} ${visible && styles.expanded}`}>
      <div className="holder">
        <div className="container-fluid">
          <div className={styles.inner}>
            <ul className={styles.list}>
              {options.map((option, index) => (
                <li key={index}>
                  <NavLink {...option} />
                </li>
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
