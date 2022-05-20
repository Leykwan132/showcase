import React from "react";
import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconUrl, iconText, linkUrl }) => (
  <div className={styles.featureCard}>
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      {" "}
      <img src={iconUrl} alt="icon" className={styles.featureImg} />
    </a>
    <p className={styles.featureText}>{iconText}</p>
  </div>
);
const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology, React
            Native.{" "}
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard
            iconUrl={assets.react}
            iconText="React Native"
            linkUrl="https://reactnative.dev/"
          />
          <FeatureCard
            iconUrl={assets.javascript}
            iconText="Javascript"
            linkUrl="https://www.javascript.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
