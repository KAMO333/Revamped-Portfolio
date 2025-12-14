import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kamogelo</h1>
        <p className={styles.description}>
          I am a Full-Stack Engineer specializing in the MERN stack (React, Node.js, MongoDB), delivering solutions with REST APIs, Unit Testing (TDD), and scalable architecture.

Tech Focus: JavaScript, Python, Java, SQL. Interests: TypeScript, Docker, AWS, CI/CD.

A proud graduate of WeThinkCode_. 
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
