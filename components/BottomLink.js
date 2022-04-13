import styles from "../styles/BottomLink.module.css";

import PropTypes from "prop-types";
import Link from "next/link";

const BottomLink = ({ path, text, paddingStyle = 0}) => {
  let paddingClass = '';

  if (paddingStyle === 1) {
    paddingClass = ` ${styles.padding1}`;
  } else if (paddingStyle === 2) {
    paddingClass = ` ${styles.padding2}`;
  } else if (paddingStyle === 3) {
    paddingClass = ` ${styles.padding3}`;
  }

  return (
    <div className={`${styles.bottomLink}${paddingClass}`}>
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

BottomLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  paddingStyle: PropTypes.number
};

export default BottomLink;
