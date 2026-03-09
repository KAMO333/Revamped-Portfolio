import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Engineering 🎨</h3>
              <p>
                I build performant, mobile-friendly frontends with React and
                JavaScript, with strong fundamentals in HTML5 and CSS3. I use
                Tailwind CSS to keep interfaces clean, consistent and responsive
                without fighting the stylesheet, with a current interest in
                TypeScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend & Data Engineering ⚡</h3>
              <p>
                On the backend I work with Node.js and Express.js to design
                RESTful APIs, wiring them up to MongoDB and keeping data
                persistent and reliable. I've also worked with Redis for caching
                with a current interest in PostgreSQL as I deepen my
                understanding of relational databases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>WeThinkCode_ Alumnus 💡</h3>
              <p>
                WeThinkCode_ trained me through a peer-to-peer, industry-aligned
                curriculum covering the full software development lifecycle. I
                built production-ready systems using Git, GitHub Actions, Docker
                and CI/CD pipelines from day one. I completed the
                Service-Oriented Architecture elective, learning service
                decomposition, inter-service communication using message queues
                and asynchronous design patterns - giving me a foundation in how
                real microservices systems are built. I keep my code reliable
                with automated testing and ship with confidence through CI/CD
                pipelines on every project.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
