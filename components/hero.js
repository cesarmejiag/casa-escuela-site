import styles from "../styles/Hero.module.css";
import Image from "next/image";
import PropTypes from "prop-types";

const Hero = ({ id, imageSrc, text }) => {
  return (
    <section className={styles.hero} id={id}>
      <div className="holder">
        <div className="container-fluid">
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <Image
                src={imageSrc}
                layout="fill"
                quality={100}
                objectFit="cover"
                objectPosition="center center"
                priority
              />
            </div>
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Hero;
