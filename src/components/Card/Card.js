import React from "react";

import SwiperWrapper from "../SwiperWrapper/SwiperWrapper";

import styles from "./Card.module.css";

const Card = ({ type, data, customStyles, cardsData, link }) => {
  let element = null;

  if (type === "default") {
    element = (
      <div className={styles.cardContent} style={customStyles}>
        <h2 className={styles.cardHeader}>why complend?</h2>
        <div className={styles.cardsWrapper}>
          {data.map((item) => (
            <div
              className={`${styles.card} ${styles[item.className]}`}
              key={item.id}>
              <div className={styles.imgWrapper}>
                <img
                  className={styles.cardImg}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "about") {
    element = (
      <div style={customStyles}>
        <img
          className={styles.bgImg}
          src='/img/AboutProjects/Bottom.svg'
          alt='background cover'
        />
        <div className={styles.aboutContainer}>
          <div className={styles.aboutWrapper}>
            <SwiperWrapper>
              {data.map((item, index) => (
                <div className={styles.aboutContent} key={index}>
                  <div className={styles.aboutImgWrapper}>
                    <img
                      className={styles.aboutImg}
                      src={item.image}
                      alt={"dashboard"}
                      //"/img/AboutProjects/dashboard.png"
                    />
                  </div>
                  <div className={styles.aboutInfo}>
                    <h2 className={styles.aboutTitle}>{item.title}</h2>
                    <p className={styles.aboutText}>{item.description}</p>
                  </div>
                </div>
              ))}
            </SwiperWrapper>
          </div>
        </div>
      </div>
    );
  }

  if (type === "become-member") {
    element = (
      <div className={styles.becomeMemberContainer} style={customStyles}>
        <div className={styles.becomeMemberContent}>
          <div className={styles.becomeMemberInfo}>
            <h2 className={styles.becomeMemberHeader}>Become Member</h2>
            <p className={styles.becomeMemberText}>{data.description}</p>
            <a href={data.link} className={styles.blueButton} target='_blank'>
              Create Account
            </a>
          </div>
          <div className={styles.becomeMemberImgWrapper}>
            <img
              className={styles.becomeMemberImg}
              src={data.image}
              alt={"become member background"}
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === "trading-platform") {
    element = (
      <div className={`${styles.platformContainer}`} style={customStyles}>
        <div className={styles.platformContent}>
          <img
            className={styles.platformBgImg}
            src={"/img/trendingPlatform/Top.svg"}
            alt=''
          />
          <div className={styles.platformInfo}>
            <h1 className={styles.platformTitle}>
              <span>Buy</span>
              <svg
                width='102'
                height='67'
                viewBox='0 0 102 67'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  opacity='0.4'
                  d='M54.25 1L72.75 0.999999C88.35 0.999999 101 15.55 101 33.5C101 51.45 88.35 66 72.75 66L54.25 66C69.85 66 81 51.45 81 33.5C81 15.55 69.85 0.999999 54.25 1Z'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M29.25 0.999999L54.25 0.999998C69.85 0.999997 81 15.55 81 33.5C81 51.45 69.85 66 54.25 66L29.25 66C13.65 66 0.999999 51.45 0.999999 33.5C0.999998 24.5 4.15 16.4 9.25 10.5C14.4 4.65 21.45 0.999999 29.25 0.999999Z'
                  stroke='#FF9900'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M29.25 0.999999C33.8 0.999999 38 2.25 41.6 4.45C50.4 9.8 56 20.8 56 33.5C56 46.2 50.4 57.2 41.6 62.55C38 64.75 33.8 66 29.25 66C21.45 66 14.4 62.35 9.3 56.5C4.15 50.6 0.999999 42.5 0.999999 33.5C0.999998 24.5 4.15 16.4 9.25 10.5C14.4 4.65 21.45 0.999999 29.25 0.999999Z'
                  stroke='#00F59B'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>Sell & Trade</span>
            </h1>
            <div className={styles.platformTitleTwo}>
              <h2>Crypto</h2>
              <a href={link} className={styles.blueButton} target='_blank'>
                Get Started
              </a>
            </div>
            <p className={styles.platformText}>
              Trade, buy, staking and loan cryptocurrency at Complend
            </p>
          </div>
          <div className={styles.platformWrapper}>
            {cardsData.map((item, index) => (
              <div
                className={`${styles.platformBox}`}
                key={index}
                style={{ background: `${item.background}` }}>
                {item.svg}
                <p>{item.title.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return element;
};

export default Card;
