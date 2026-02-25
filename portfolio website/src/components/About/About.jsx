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
                I architect responsive, high-performance user interfaces
                specialising in React.js and JavaScript(ES6+). By leveraging
                Tailwind CSS, I deliver accessible, SEO-optimized experiences
                with a focus on component modularity and frontend performance
                (built on a foundation of HTML and CSS){" "}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend & Data Engineering ⚡</h3>
              <p>
                I architect scalable server-side applications specialising in
                Node.js, Express.js, and Python/Flask. I design robust RESTful
                APIs with a focus on security and performance, utilizing
                MongoDB/Mongoose, Redis, and Firebase for diverse persistence
                strategies
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>WeThinkCode_ Alumnus 💡</h3>
              <p>
                As a WeThinkCode_ alumnus with elective specialization in
                Systems Integration, I leverage a foundation in Object-Oriented
                Programming (Java, Python, and JavaScript (ES6+)) and System
                Design to build resilient, connected architectures. My
                engineering standard is rooted in Test-Driven Development (TDD)
                and Agile methodologies. I maintain high deployment standards
                through Git, GitHub, and GitLab, using SQL (SQLite), ORMs,
                Docker containerization, and automated CI/CD pipelines to ensure
                high-reliability, integrated code.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
