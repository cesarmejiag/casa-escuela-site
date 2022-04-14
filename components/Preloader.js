import styles from "../styles/Preloader.module.css";

import PropTypes from "prop-types";

const Preloader = ({ loading = true }) => {
  let className = styles.preloader;
  className += loading ? ` ${styles.displayed}` : "";

  return (
    <div className={className}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Casa Escuela</h1>
        <h1 className={styles.subtitle}>Welcome Home</h1>
      </div>
    </div>
  );
};

Preloader.propTypes = {
  loading: PropTypes.bool,
};

export default Preloader;
