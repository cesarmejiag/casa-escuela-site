import styles from "../styles/BottomLink.module.css";

import PropTypes from "prop-types";
import Link from "next/link";

const BottomLink = ({ path, text }) => {
  return (
    <div className={styles.bottomLink}>
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

BottomLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BottomLink;
