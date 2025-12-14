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
              <h3>Frontend Development 🎨</h3>
              <p>
I specialize in building responsive, accessible, and optimized user interfaces using React, Redux, JavaScript, HTML, CSS, and Tailwind CSS. I focus on the user experience and interface performance.              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend & Data Management ⚡ </h3>
              <p>
I focus on scalable and efficient server-side applications within the MERN stack (Node.js, Express.js, MongoDB). I design and implement RESTful APIs and leverage core languages like Python and Java. My data experience includes MongoDB, SQL and Firebase for diverse data persistence needs.              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>WeThinkCode_ Graduate 💡</h3>
              <p>
                A graduate of WeThinkCode_, I possess a strong foundation in OOP (Python/Java/JavaScript), System Design, Distributed Systems, and Agile Methodology. My quality engineering focus includes Unit Testing, ORM, Git/version control, and practical experience with Docker, and CI/CD for robust deployment pipelines.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
