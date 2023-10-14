import React from "react";
import styles from "./HeroTabs.module.css";

const HeroTabs = () => {
  return (
    <div className={styles.tabs_container}>
      <div className={styles.tabs}>Home</div>
      <div className={styles.tabs}>Attorneys</div>
      <div className={styles.tabs}>Practicle Areas</div>
      <div className={styles.tabs}>About Us</div>
    </div>
  );
};

export default HeroTabs;
