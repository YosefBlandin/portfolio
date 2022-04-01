import { FC } from "react";
import styles from "./styles.module.css";

export const ProjectElement: FC<{
  projectName: string;
  projectCategory: string;
  backgroundColor: string;
  backgroundImage: string;
}> = ({ projectName, projectCategory, backgroundColor, backgroundImage }) => {
  return (
    <article
      style={{
        backgroundColor: backgroundColor,
      }}
      className={styles.projectElementContainer}
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className={styles.projectElementBackground}
      ></div>
      <div className={styles.projectElementText}>
        <h5>{projectName}</h5>
        <p>Category: {projectCategory}</p>
      </div>
    </article>
  );
};
