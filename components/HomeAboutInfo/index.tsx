import { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import yosefImage from "../../public/profileCropped.jpg";

export const HomeAboutInfo: FC<{
  description: string;
}> = ({ description }) => {
  return (
    <article className={styles.homeAboutInfoContainer}>
      <div className={styles.yosefImageContainer}>
        <Image
          src={yosefImage}
          layout="responsive"
          alt="Yosef Blandin photo"
          className={styles.yosefImage}
        />
      </div>
      <p>{description}</p>
    </article>
  );
};
