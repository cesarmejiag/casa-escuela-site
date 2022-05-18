import styles from "../styles/BackgroundColor.module.css";
import useWindowSize from "../hooks/useWindowSize";

const BackgroundColor = ({
  cSrcD,
  cSrcM,
  cColor,
  cHeight,
  cHeight2 = "100%",
  children,
  cPosition,
}) => {
  const { mobile } = useWindowSize();
  const position =
    cPosition === "bottom" ? `${styles.bottom}` : `${styles.top}`;

  let styleBack;
  if (cSrcD || cSrcM) {
    styleBack = !mobile
      ? { backgroundImage: `url(${cSrcD})`, height: cHeight }
      : { backgroundImage: `url(${cSrcM})`, height: cHeight2 };
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
