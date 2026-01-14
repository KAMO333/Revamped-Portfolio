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
                I architect responsive, high-performance user interfaces using React and JavaScript. By leveraging Tailwind CSS, HTML, and CSS, I deliver accessible, SEO-optimized experiences with a focus on efficient state management, component modularity, and frontend performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend & Data Engineering ⚡</h3>
              <p>
                I architect scalable, secure server-side applications specializing in Node.js, Express, Python, and Flask. I design and implement robust RESTful APIs with a focus on high-concurrency and performance. My data expertise includes MongoDB, Redis, and Firebase, allowing me to implement the right persistence strategy for diverse application needs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Systems & Quality Engineering 💡</h3>
              <p>
                As a WeThinkCode_ alumnus, I leverage a deep foundation in Object-Oriented Programming (Python & JavaScript) and System Design to build distributed, resilient architectures. My engineering standard is rooted in Quality Assurance, utilizing Test-Driven Development (TDD), Agile (Scrum) methodologies, and ORMs to ensure code reliability. I maintain high deployment standards through Git version control, Docker containerization, and automated CI/CD pipelines.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
