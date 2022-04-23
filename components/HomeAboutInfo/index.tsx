import { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import yosefImage from "../../public/profileCropped.jpg";

export const HomeAboutInfo: FC<{
  description: string;
}> = ({ description }) => {
  return (
    <article className={styles.homeAboutInfoContainer}>
      <p className={styles.homeAboutInfoText}>&quot;{description}&quot;</p>
      <p className={styles.homeAboutInfoSmallText}>
        ~Yosef Enmanuel Blandin Rios
      </p>
    </article>
  );
};
