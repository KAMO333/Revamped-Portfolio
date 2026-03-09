import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kamogelo.</h1>
        <p className={styles.description}>
          I'm a Full Stack Developer building secure, tested web applications
          with <strong>React, Node.js</strong> and <strong>MongoDB.</strong>
          <br />
          Containerised with <strong>Docker</strong> and shipped through{" "}
          <strong>CI/CD</strong> pipelines.
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
