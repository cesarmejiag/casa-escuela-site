import styles from "../styles/card.module.css";
import Image from "next/image";

const Card = ({ image, title, text }) => {
  return (
    <div className={styles.card}>
      {image && <div className={styles.image}><Image src={image} width={498} height={791} layout="responsive" /></div>}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Card;
