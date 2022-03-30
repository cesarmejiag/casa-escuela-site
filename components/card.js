import styles from "../styles/Card.module.css";
import Image from "next/image";

const Card = ({ image, title, text }) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.image}>
          <Image
            src={image}
            width={498}
            height={791}
            layout="responsive"
            quality={100}
          />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Card;
