import styles from "../styles/Section.module.css";
import PropTypes from "prop-types";
import ImageSwicher from "./ImageSwicher";

const Section = ({ id, title, intro, imagesSrc, footer, noHolder = false, children }) => {
  return (
    <section className={styles.section} id={id}>
      <div className={!noHolder ? 'holder' : ''}>
        <div className={!noHolder ? 'container-fluid' : ''}>
          {(title || intro) && (
            <div className={styles.header}>
              {title && <h2 className={styles.title}>{title}</h2>}
              {intro && <div className={styles.intro}>{intro}</div>}
            </div>
          )}
          <div className={styles.content}>
            {imagesSrc && (
              <div className={styles.image}>
                <ImageSwicher imagesSrc={imagesSrc} />
              </div>
            )}
            {footer && (
              <div
                className={styles.footer}
                dangerouslySetInnerHTML={{ __html: footer }}
              ></div>
            )}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  intro: PropTypes.string,
  imagesSrc: PropTypes.arrayOf(PropTypes.string),
  footer: PropTypes.string,
  noHolder: PropTypes.bool
};

export default Section;
