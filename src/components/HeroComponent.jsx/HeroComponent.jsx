import React from "react";
import styles from "./HeroComponent.module.css";
import Navbar from "../Navbar/Navbar";
import hero from "../../assets/HeroImg.png";
import letsTalk from "../../assets/LetsTalk.png";

const HeroComponent = () => {
  return (
    <div className={styles.main_container}>
      <Navbar />
      <div>
        <div className={styles.heading}>
          <span className={styles.hero_heading}>
            You don’t have to Fight them Alone.
          </span>
          <div className={styles.sub_heading}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eum
            soluta doloribus assumenda dolorem, perferendis commodi quisquam
            culpa odio iusto molestiae veritatis, ullam vero id dolores eos
            ratione. Nisi, sequi!
          </div>
        </div>
        <div>
          <img src={hero} alt="hero_img" className={styles.hero_img} />
        </div>
        <div className={styles.hero_email_container}>
          <form>
            <label for="email" className={styles.hero_email_text}>
              Enter your eamil address
            </label>
            <input
              type="text"
              name="email"
              className={styles.hero_email_text}
            />
          </form>

          <div className={styles.hero_email_button}>
            <img src={letsTalk} alt="lets Talk Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
