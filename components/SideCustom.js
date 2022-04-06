import  styles from "../styles/SideCustom.module.css";
import Link from "next/link";
import Image from "next/image";

const SideCustom = ({pageTitle, abstract, image, caption,description,text,path}) => {
  return (
    <div className={styles.sideCustom}>
      <h2 className={styles.title}>{pageTitle}</h2>
      <div className={styles.abstracts}>
        {abstract}
      </div>
      <div className={styles.image}>
        <Image
            src={image}
            width={498}
            height={791}
            layout="responsive"
            quality={100}
          />
          <div className={styles.captionText}>{caption}</div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionText}>
          {description}
        </div>
        <Link className={styles.linkReference} href={path}>
          {text}
        </Link>
      </div>
    </div>
  )
};

export default SideCustom;
