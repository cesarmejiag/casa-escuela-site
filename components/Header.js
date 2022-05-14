import styles from "../styles/Header.module.css";
import { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = ({ shopUrl }) => {
  const [visible, setVisible] = useState(false);

  return (
    <header className={styles.header}>
      <Nav
        mobileVisible={visible}
        onToggleClick={() => setVisible(!visible)}
        shopUrl={shopUrl}
      />
      <MobileNav visible={visible} shopUrl={shopUrl} />
    </header>
  );
};

export default Header;
