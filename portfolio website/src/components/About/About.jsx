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
              <h3>Frontend Development</h3>
              <p>
                I have Frontend experience working with HTML, CSS, Tailwind CSS, JavaScript,
                React.js, and Redux, building responsive and
                optimized websites. 🎨
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I have Backend experience working with Node.js, Express.js,
                MongoDB, Firebase and RESTful APIs, building scalable and
                efficient server-side applications. ⚡🛠️
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>WeThinkCode_ Graduate</h3>
              <p>
               I am a WeThinkCode_ graduate who learned problem-solving with Python, Java, and JavaScript, specializing in OOP, REST APIs, Unit Testing, ORM, System Design, Agile Methodology, Git, and CI/CD. 💡🚀
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
