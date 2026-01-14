import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kamogelo.</h1>
        <p className={styles.description}>
          Full stack developer specializing in building scalable web applications using <strong>JavaScript, React, Node.js, Express.js,</strong> <br />
<strong>Python, and MongoDB.</strong>
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
