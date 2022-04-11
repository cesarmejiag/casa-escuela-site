import styles from "../styles/BackgroundColor.module.css";

const BackgroundColor = ({cSrc, cColor,cHeight}) => {
  let styleBack;
  if(cSrc){
    styleBack =  {backgroundImage:`url(${cSrc})`,paddingBottom:cHeight};
     
  }else{
    styleBack =  {background:cColor,paddingBottom:cHeight};
  }
    
  return (
    <div className={styles.colorElement} style={styleBack}>
    </div>
  )
};
export default BackgroundColor;