import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer className={styles.container} id = "contact">
      <div className={styles.text}>
        <h2 >Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
            <a href="mailto:espiritu.johnry@gmail.com">espiritu.johnry@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="email-icon" />
            <a href="linkedin.com">linkedin.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon" />
            <a href="mailto:espiritu.johnry@gmail.com">github.com/espiritujohnry</a>
        </li>
      </ul>
    </footer>
  );
};
