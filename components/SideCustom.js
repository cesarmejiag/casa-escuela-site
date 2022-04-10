import  styles from "../styles/SideCustom.module.css";
import Link from "next/link";
import Image from "next/image";

const SideCustom = ({title, abstract,src, caption,link, textlink}) => {
  return (
    <div className={styles.sideCustom}>
      <div className={styles.sideTitle}>{title}</div>
      <div className={styles.sideAbstract}>
        {abstract}
      </div>
      <div className={styles.sideContainer}>
        <div className={styles.sideWrapperImage}>
          <a href="#" className={styles.sideImage}>
              <img src={src} alt={caption} />
          </a>
          <div className={styles.sideCaption}>{caption}</div>
        </div>
        <div className={styles.sideWrapperInformation}>
          <div className={styles.sideAbstractDesktop}>
            {abstract}
          </div>
          <a href={link} className={styles.sideLink}>
            {textlink}
          </a>
        </div>
      </div>
      
    </div>
  )
};

export default SideCustom;
