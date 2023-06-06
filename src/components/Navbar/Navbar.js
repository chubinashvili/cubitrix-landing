import { Logo } from "../../svg";

import styles from "./Navbar.module.css";

function Navbar({ link }) {
  return (
    <div className={styles.navBarContent}>
      <div className={styles.navbarWrapper}>
        <div className={styles.navBarlogo}>
          <div>
            <Logo />
          </div>
          <h3>COMPLEND</h3>
        </div>
      </div>
      <div className={styles.navBarBtn}>
        <a href={link} target="_blank">
          Connect Wallet
        </a>
      </div>
    </div>
  );
}

export default Navbar;
