import styles from "../styles/Section.module.css";

import PropTypes from "prop-types";

import InviewElement from "./InviewElement";
import ImageSwicher from "./ImageSwicher";
import AnimText from "./AnimText";
import BottomLink from "./BottomLink";

const Section = ({
  id,
  title,
  intro,
  introText,
  imagesSrc,
  mobileImagesSrc,
  imageCaption,
  footer,
  link,
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
                {title && <AnimText text={title} type="title" />}
                {intro && <AnimText text={intro} />}
                {introText && (
                  <div
                    className={styles.introText}
                    dangerouslySetInnerHTML={{ __html: introText }}
                  ></div>
                )}
              </div>
            </InviewElement>
          )}
          <div className={styles.content}>
            {imagesSrc && (
              <InviewElement>
                <div className={styles.image}>
                  <ImageSwicher
                    imagesSrc={imagesSrc}
                    mobileImagesSrc={mobileImagesSrc}
                    imageCaption={imageCaption}
                  />
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
            {link && link.text && link.href && <BottomLink {...link} />}
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
  imagesSrc: PropTypes.arrayOf(PropTypes.object),
  mobileImagesSrc: PropTypes.arrayOf(PropTypes.object),
  imageCaption: PropTypes.string,
  footer: PropTypes.string,
  link: PropTypes.object,
  noHolder: PropTypes.bool,
  withMarginTop: PropTypes.bool,
};

export default Section;
