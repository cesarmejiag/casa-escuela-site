import styles from "../styles/hero.module.css";
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
                width={1803}
                height={840}
                quality={100}
                objectFit="cover"
                objectPosition="center center"
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
