import styles from "../styles/header.module.css";
import { useState } from "react";
import Nav from "./nav";
import MobileNav from "./mobile-nav";

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className={styles.header}>
      <div className="holder">
        <div className="container-fluid">
          <Nav onToggleClick={() => setVisible(!visible)} />
          <MobileNav visible={visible} />
        </div>
      </div>
    </header>
  );
};

export default Header;
