/* eslint-disable @next/next/no-img-element */
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, FC } from "react";
import styles from "./styles.module.css";

export const ProjectElement: FC<{
  projectTitle: string;
  projectName: string;
  projectDescription: string;
  projectStack: string;
  route: string;
  style?: CSSProperties;
}> = ({
  projectTitle,
  projectName,
  projectDescription,
  projectStack,
  route,
  style,
}) => {
  return (
    <Link href={route} passHref>
      <a
        target="_blank"
        referrerPolicy="no-referrer"
        style={{
          height: "fit-content",
          width: "fit-content",
          borderRadius: 30,
        }}
      >
        <article className={styles.projectCard}>
          <section className={styles.projectCard__mainSection}>
            <p className={styles.projectCard__name}>{projectName}</p>
            <h3 className={styles.projectCard__title}>{projectTitle}</h3>
            <p className={styles.projectCard__stack}>{projectStack}</p>
          </section>
          <section className={styles.projectCard__secondarySection}>
            <p className={styles.projectCard__description}>
              {projectDescription}
            </p>
          </section>
        </article>
      </a>
    </Link>
  );
};
