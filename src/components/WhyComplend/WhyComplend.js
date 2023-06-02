import React from "react";
import styles from "./WhyComplend.module.css";

export const WhyComplend = ({ data, images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader} data-aos="fade-up" data-aos-delay="20">
          why complend?
        </div>
        <div className={styles.cardsWrapper}>
          {data.map((item) => (
            <div
              className={`${styles.card} ${styles.green}`}
              data-aos="fade-up"
              data-aos-delay="20"
              key={item.id}
            >
              <div className={styles.imgWrapper} data-aos="fade-up" data-aos-delay="20">
                <img className={styles.cardImg} src={item.image} alt="img" />
              </div>
              <div className={styles.cardInfo} data-aos="fade-up" data-aos-delay="20">
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={images?.bottom} className={styles.bottom} alt="" />
    </div>
  );
};
