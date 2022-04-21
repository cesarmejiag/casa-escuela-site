import styles from "../styles/Section.module.css";

import PropTypes from "prop-types";

import InviewElement from "./InviewElement";
import ImageSwicher from "./ImageSwicher";
import Title from "./Title";

const Section = ({
  id,
  title,
  intro,
  introText,
  imagesSrc,
  mobileImagesSrc,
  footer,
  noHolder = false,
  withMarginTop = false,
  children,
}) => {
  return (
    <section className={styles.section} id={id}>
      <div className={!noHolder ? "holder" : ""}>
        <div className={!noHolder ? "container-fluid" : ""}>
          {(title || intro) && (
            <InviewElement>
              <div
                className={`${styles.header} ${
                  withMarginTop ? styles.marginTop : ""
                }`}
              >
                {title && <Title text={title}></Title>}
                {intro && <div className={styles.intro}>{intro}</div>}
                {introText && (
                  <div className={styles.introText}>{introText}</div>
                )}
              </div>
            </InviewElement>
          )}
          <div className={styles.content}>
            {imagesSrc && (
              <InviewElement>
                <div className={styles.image}>
                  <ImageSwicher imagesSrc={imagesSrc} mobileImagesSrc={mobileImagesSrc} />
                </div>
              </InviewElement>
            )}
            {footer && (
              <InviewElement>
                <div
                  className={styles.footer}
                  dangerouslySetInnerHTML={{ __html: footer }}
                ></div>
              </InviewElement>
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
  introText: PropTypes.string,
  imagesSrc: PropTypes.arrayOf(PropTypes.string),
  mobileImagesSrc: PropTypes.arrayOf(PropTypes.string),
  footer: PropTypes.string,
  noHolder: PropTypes.bool,
  withMarginTop: PropTypes.bool,
};

export default Section;
