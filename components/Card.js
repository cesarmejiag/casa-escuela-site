import styles from "../styles/Card.module.css";

import BlockContent from "@sanity/block-content-to-react";
import Image from "next/image";

import { getImages } from "../utils/utils";

const Card = ({ image, title, text, type2 }) => {
  const width = type2 ? 629 : 498;
  const height = type2 ? 737 : 791;

  return (
    <div className={styles.card}>
      {type2 && <h3 className={styles.title2}>{title}</h3>}
      {image && (
        <div className={styles.image}>
          <Image
            src={getImages(image)}
            width={width}
            height={height}
            layout="responsive"
            quality={100}
            priority
          />
        </div>
      )}
      {!type2 && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.text}>
        <BlockContent blocks={text} />
      </div>
    </div>
  );
};

export default Card;
