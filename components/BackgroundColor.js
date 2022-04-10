import styles from "../styles/BackgroundColor.module.css";
import SideCustom from "./SideCustom";

const BackgroundColor = ({cColor,cHeight}) => {
  return (
  <div className={styles.backgroundWrapper}>
    <div className={styles.colorElement} style={{background:cColor,height:cHeight}}>
    </div>

    <SideCustom title="Host an event" abstract="Let the energy of our space help you create unforgettable experiences." src="/images/events-portada.png" caption="Terraza Mérida" link="https://www.google.com/" textlink="Contact us to learn more about booking 
Casa Escuela to host your next event.">
      
    </SideCustom>
  </div>
  )
};
export default BackgroundColor;