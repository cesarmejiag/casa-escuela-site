import styles from "../styles/header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="holder">
        <div className="container-fluid">
          <nav>
            <div className="row">
              <div className="col-4">
                <Link href="/be-our-guest">
                  <a>Be our guest</a>
                </Link>
                <Link href="/happenings">
                  <a>Happenings</a>
                </Link>
                <Link href="/residencies">
                  <a>Residencies</a>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/">
                  <a className={styles.logo}>
                    <Image
                      src="/images/logo.svg"
                      layout="responsive"
                      width={205}
                      height={20}
                    />
                  </a>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/about">
                  <a>About</a>
                </Link>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
                <Link href="#">
                  <a>Shop</a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
