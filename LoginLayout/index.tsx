import { FC } from "react";
import styles from "./styles.module.css";

export const LoginLayout: FC<{ title: string }> = ({ children, title }) => {
  return (
    <section className={styles.loginLayout}>
      <section className={styles.loginLayoutFirstSection}>
        <h2 className={styles.loginLayoutFirstSectionTitle}>{title}</h2>
        {children}
      </section>
      <section className={styles.loginLayoutSecondSection}>
        Build the world in which you want to live
      </section>
    </section>
  );
};
