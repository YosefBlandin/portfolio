import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import styles from "./TextCard.module.css";

export const TextCard: FC<{ text: string | ReactNode }> = ({ text }) => {
  return (
    <article className={styles.textCard}>
      <p className={styles.textCard__text}>{text}</p>
    </article>
  );
};
