import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import Dowload from '../dowloand/1.txt';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlokLinck}>
        <NavLink className={styles.footerlincks}>hola</NavLink>
        <NavLink className={styles.footerlincks}>hola2</NavLink>
        <NavLink className={styles.footerlincks}>hola3</NavLink>
        <NavLink className={styles.footerlincks}>hola4</NavLink>
        <NavLink className={styles.footerlincks}>hola5</NavLink>
      </div>
      <a href={Dowload} download="document">
        <button className={styles.footerButton} type="submit">
          Dowload
        </button>
      </a>
      <img
        className={styles.imgFooter}
        src="https://sportishka.com/uploads/posts/2021-11/1638003803_2-sportishka-com-p-tkhekvondo-fon-krasivie-sportivnie-foto-2.jpg"
        alt="LOGO IMAGE"
      />
    </footer>
  );
}
export default Footer;
