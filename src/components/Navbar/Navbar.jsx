import React from "react";
import Logo from "../Logo/Logo";
import HeroTabs from "../HeroTabs/HeroTabs";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.main_container}>
      <Logo />
      <HeroTabs />
      <div className={styles.contactnow_container}>
        <div className={styles.contactnow_wrapper}>Contact Now</div>
      </div>
    </div>
  );
};

export default Navbar;
