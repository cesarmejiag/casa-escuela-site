import styles from "../styles/BackgroundColor.module.css";
import ScreenSize from "../components/ScreenSize";

const BackgroundColor = ({
  cSrcD,
  cSrcM,
  cColor,
  cHeight,
  children,
  cPosition,
}) => {
  const size = ScreenSize();
  const position =
    cPosition === "bottom" ? `${styles.bottom}` : `${styles.top}`;

  let styleBack;
  if (cSrcD || cSrcM) {
    styleBack =
      size.width > 767
        ? { backgroundImage: `url(${cSrcD})`, height: cHeight }
        : { backgroundImage: `url(${cSrcM})`, height: "100%" };
  } else {
    styleBack = { background: cColor, height: cHeight };
  }

  return (
    <div className={styles.wrapperBackground}>
      <div
        className={`${styles.colorElement} ${position}`}
        style={styleBack}
      ></div>
      {children}
    </div>
  );
};
export default BackgroundColor;
