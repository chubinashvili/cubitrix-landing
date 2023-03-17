import { Logo } from "../../svg";

import styles from "./Navbar.module.css";

function Navbar({ handleLaunchApp }) {
  return (
    <div className={styles.navBarContent}>
      <div className={styles.navBarlogo}>
        <div>
          <Logo />
        </div>
        <span>COMPLAND</span>
      </div>
      <div className={styles.navBarBtn}>
        <button onClick={handleLaunchApp}>Lounch App</button>
      </div>
    </div>
  );
}

export default Navbar;
