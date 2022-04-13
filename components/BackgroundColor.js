import styles from "../styles/BackgroundColor.module.css";
import ScreenSize from "../components/ScreenSize";

const BackgroundColor = ({cSrcD, cSrcM, cColor,cHeight, children}) => {
  const size = ScreenSize();

  let styleBack;
  if(cSrcD || cSrcM){
    styleBack = size.width > 767 ? {backgroundImage:`url(${cSrcD})`,height:cHeight} : {backgroundImage:`url(${cSrcM})`,height:cHeight};
     
  }else{
    styleBack =  {background:cColor,height:cHeight};
  }
    
  return (
    <div className={styles.wrapperBackground}>
      <div className={styles.colorElement} style={styleBack}>
      </div>
      {children}
    </div>
  )
};
export default BackgroundColor;