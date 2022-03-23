import styles from "../styles/section.module.css";
import PropTypes from "prop-types";

const Section = ({ id, title, children }) => {
  return (
    <section className={styles.section} id={id}>
      <div className="holder">
        <div className="container-fluid">
          {title && (
            <div className={styles.header}>
              <h2 className={styles.title}>{title}</h2>
            </div>
          )}
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Section;
