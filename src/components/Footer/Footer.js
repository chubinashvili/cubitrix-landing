import { useState } from "react";
import { Logo } from "../../svg";

import styles from "./Footer.module.css";

const Footer = ({ handleSubmit, email, setEmail, data }) => {
  const [error, setError] = useState("");
  const handleSubscribe = () => {
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      handleSubmit();
      setError("");
    } else {
      setError("email is invalid");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <div>
            <Logo />
          </div>
          <span>COMPLEND</span>
        </div>
        <div className={styles.footerForm}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter email adress"
              value={email}
              onChange={(e) => {
                if (e.target.value.length) {
                  setError("");
                }
                setEmail(e.target.value);
              }}
            />
            <button type="submit" onClick={handleSubscribe}>
              Subscribe News
            </button>
          </div>
          {error && <p className={styles.footerFormError}>{error}</p>}
        </div>
        <div className={styles.footerIcons}>
          {data?.map((item, index) => (
            <a
              className={styles.ftIcon}
              onClick={item.onClick}
              key={index}
              href={item?.link}
              target="_blank">
              {item.svg}
            </a>
          ))}
        </div>
      </div>
      <p>© 2023 All rights reserved</p>
    </div>
  );
};

export default Footer;
