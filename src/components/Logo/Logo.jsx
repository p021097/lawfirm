import React from "react";
import logo from "../../assets/Logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <img src={logo} alt="logoimg" />
    </div>
  );
};

export default Logo;
