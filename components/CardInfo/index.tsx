/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./styles.module.css";

export const CardInfo: FC<{
  title: string;
  description: string;
  src: any;
}> = ({ title, description, src }) => {
  return (
    <article className={styles.cardInfo} key={title}>
      <img src={src.src} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};
