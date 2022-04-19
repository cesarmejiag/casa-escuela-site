import styles from "../styles/BottomLink.module.css";

import PropTypes from "prop-types";
import Link from "next/link";
import InviewElement from "./InviewElement";

const BottomLink = ({ path, text, target = "_self", paddingStyle = 0 }) => {
  let paddingClass = "";

  if (paddingStyle === 1) {
    paddingClass = ` ${styles.padding1}`;
  } else if (paddingStyle === 2) {
    paddingClass = ` ${styles.padding2}`;
  } else if (paddingStyle === 3) {
    paddingClass = ` ${styles.padding3}`;
  } else if (paddingStyle === 4) {
    paddingClass = ` ${styles.padding4}`;
  }

  return (
    <div className={`${styles.bottomLink}${paddingClass}`}>
      <InviewElement>
        <Link href={path}>
          <a target={target}>{text}</a>
        </Link>
      </InviewElement>
    </div>
  );
};

BottomLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  target: PropTypes.string,
  paddingStyle: PropTypes.number,
};

export default BottomLink;
