import styles from "../styles/BackgroundColor.module.css";

const BackgroundColor = ({cSrc, cColor,cHeight}) => {
  let styleBack;
  if(cSrc){
    styleBack =  {backgroundImage:`url(${cSrc})`,height:cHeight};
     
  }else{
    styleBack =  {background:cColor,height:cHeight};
  }
    
  return (
    <div className={styles.colorElement} style={styleBack}>
    </div>
  )
};
export default BackgroundColor;