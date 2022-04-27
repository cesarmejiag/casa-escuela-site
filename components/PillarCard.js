import styles from "../styles/PillarCard.module.css";

import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";

const PillarCard = ({ id, title, text }) => {
  return (
    <div className={`${styles.pillarCard} ${styles[`bg-${id}`]}`}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.text}>
          <BlockContent blocks={text} />
        </div>
      </div>
    </div>
  );
};

PillarCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PillarCard;
