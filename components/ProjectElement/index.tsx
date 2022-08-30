/* eslint-disable @next/next/no-img-element */
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, FC } from "react";
import styles from "./styles.module.css";

export const ProjectElement: FC<{
  projectName: string;
  projectDescription: string;
  projectStack: string;
  backgroundImage: string;
  route: string;
  style?: CSSProperties;
}> = ({
  projectName,
  projectDescription,
  projectStack,
  backgroundImage,
  route,
  style,
}) => {
  return (
    <Link href={route} passHref>
      <a
        target="_blank"
        referrerPolicy="no-referrer"
        style={{ height: "fit-content", width: "fit-content" }}
      >
        <Box
          className={styles.projectContainer}
          position={"relative"}
          borderRadius="5px"
          width={"fit-content"}
          padding={"0"}
          textAlign={"center"}
          transition="0.3s ease"
        >
          <picture className={styles.projectImageContainer}>
            <img alt={projectName} src={backgroundImage} />
          </picture>
          <Box
            className={styles.projectTextContainer}
            transition={"0.4s ease"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
          >
            <Heading
              color={"#000"}
              marginTop={"1 0px"}
              fontWeight={"bold"}
              fontSize={{ base: "1.1rem", lg: "1.3rem" }}
            >
              {projectName}
            </Heading>
            <Text
              color={"#000"}
              marginTop={"1 0px"}
              fontSize={{ base: "1rem", lg: "1.1rem" }}
            >
              {projectDescription}
            </Text>
            <Text
              fontWeight={"bold"}
              color={"#000"}
              marginTop={"1 0px"}
              fontSize={{ base: "0.8rem", lg: "0.9rem" }}
            >
              {projectStack}
            </Text>
          </Box>
        </Box>
      </a>
    </Link>
  );
};
