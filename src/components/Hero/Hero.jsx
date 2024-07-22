import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Johnry!</h1>
        <p className={styles.description}>
        I'm a 2nd Year BS Computer Science student at Bicol University with experience on computer programming and web development. Reach out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:espiritu.johnry@gmail.com">Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero-image" />
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};
