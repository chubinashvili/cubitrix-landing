import React, { useState, useEffect } from "react";
import styles from "./DashboardHeader.module.css";

export const DashboardHeader = ({
  handleConnect,
  handleGetStarted,
  dashboardHeaderImages,
  account,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <header
      className={`${styles.dashboardHeaderContainer} ${animate ? styles.animate : ""}`}
    >
      <img
        src={dashboardHeaderImages?.rocket}
        className={styles.dashboardHeaderRocketImg}
      />
      <div className={styles.dashboardHeader}>
        <img
          src={dashboardHeaderImages?.dots}
          className={styles.dashboardHeaderDotsImg}
        />
        <div className={styles.dashboardHeaderTop}>
          <h1>Buy</h1>
          <h1>Sell & Trade</h1>
        </div>
        <div className={styles.dashboardHeaderBottom}>
          <h1>Crypto</h1>
          <p>Trade, buy, staking and loan cryptocurrency at Complend</p>
        </div>
        <img src={dashboardHeaderImages?.man} className={styles.dashboardHeaderManImg} />
        <img
          src={dashboardHeaderImages?.planet}
          className={styles.dashboardHeaderPlanetImg}
        />
      </div>
      <img
        src={dashboardHeaderImages?.dotsRight}
        className={styles.dashboardHeaderDotsRightImg}
      />
      {/* <div className={styles.dashboardButtons}>
        {!account && (
          <Button
            label={"Connect Wallet"}
            size={"btn-lg"}
            type={"btn-primary"}
            arrow={"arrow-none"}
            element={"button"}
            onClick={handleConnect}
            customStyles={{ margin: "0" }}
          />
        )}
        <Button
          label={"Get Started"}
          size={"btn-lg"}
          type={"btn-secondary"}
          arrow={"arrow-none"}
          element={"button"}
          onClick={handleGetStarted}
          customStyles={{ margin: "0" }}
        />
      </div> */}
      <img
        src={dashboardHeaderImages?.bottom}
        className={styles.dashboardHeaderBottomImg}
      />
    </header>
  );
};
