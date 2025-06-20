import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kamogelo</h1>
        <p className={styles.description}>
          Full-Stack developer | Wethinkcode_ student, driven by passion and
          code.
        </p>
        <p className={styles.description}>
          I'm a full-stack developer skilled in React, JavaScript, Node.js,
          Express, and MongoDB, currently expanding into software architecture,
          Python, Java, testing, and mobile dev at Wethinkcode_. 🚀
        </p>
        <a href="mailto:kamosworkemail@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
