/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { IoMailOutline } from "react-icons/io5";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../Layout"), {
  ssr: false,
});
import styles from "../styles/Home.module.css";
import { ProjectElement } from "../components/ProjectElement";
import macheteStoreImg from "../public/macheteStore.png";
import weatherImage from "../public/weatherApp.png";
import analysisImage from "../public/analysis.svg";
import dealImage from "../public/deal.svg";
import fitnessImage from "../public/Fitness tracker-bro.svg";
import randmImage from "../public/randm.png";
import randmgraphqlImage from "../public/randmgraphql.png";
import { TitleSectionSplitter } from "../components/TitleSectionSplitter";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { CardInfo } from "../components/CardInfo";

const Home: NextPage = () => {
  const [showNav, setShowNav] = useState(true);
  const topFourProjects = [
    {
      projectName: "R&M with GraphQL By Yosef Blandin",
      projectDescription:
        "Project in which you can see all Rick and Morty's characters and add your favorite to a list",
      projectStack: "Next, React, Redux, GraphQL",
      backgroundImage: randmgraphqlImage.src,
      route: "https://rickandmortygraphql-eight.vercel.app/",
    },
    {
      projectName: "R&M By Yosef Blandin",
      projectDescription:
        "Project in which you can see all Rick and Morty's characters and add your favorite to a list",
      projectStack: "Next, React, Redux",
      backgroundImage: randmImage.src,
      route: "https://rickandmorty-gilt-nine.vercel.app/",
    },
    {
      projectName: "Machete Store",
      projectDescription: "Small project made for a local shop",
      projectStack: "React, Context API",
      backgroundImage: macheteStoreImg.src,
      route: "https://machete-store-yosefblandin.vercel.app/",
    },
    {
      projectName: "Weather App",
      projectStack: "React",
      projectDescription: "React single page application",
      backgroundImage: weatherImage.src,
      route: "https://weatherapp-yosefblandin.vercel.app/",
    },
  ];

  const infoSectionInfo = [
    {
      title: "Learning enthusiast",
      description:
        "I like to read a lot of books to expand my knowledge, and therefore be able to find better solutions to problems",
      img: analysisImage,
    },
    {
      title: "Ownership mindset believer",
      description:
        "The ownership mindset has been a key to my life in order to overcome challenges, to be relentless recognizing my errors learning from them",
      img: dealImage,
    },
    {
      title: "Fitness devotee",
      description:
        "I like to maintain a healthy condition in order to have a better performance mentally and physically",
      img: fitnessImage,
    },
  ];

  return (
    <div
      onWheel={(e) => {
        if (e.deltaY >= 0) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
      }}
    >
      <Head>
        <title>Yosef Blandin</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Software Developer with over 2 years of experience working with Typescript and Next"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Yosef Blandin" />
      </Head>
      <Layout showNav={showNav}>
        <main className={styles.container}>
          <section className={styles.hero}>
            <div className={styles.heroTextContainer}>
              <h1>
                A Web Application must be an unique experience for your users
              </h1>
              <h2>
                <strong>Software Developer</strong> specialized in{" "}
                <strong>TypeScript, Next</strong> and <strong>GraphQL</strong>.
                I like to make scalable frontend applications, applying
                animations, good practices and listening to{" "}
                <strong>users</strong> in order to build{" "}
                <strong>top-notch web experiences</strong>
              </h2>
              <a href="#projects">
                <Button size={"lg"} variant={"primary"} height={{ lg: "60px" }}>
                  Visualize experience
                </Button>
              </a>
            </div>
          </section>
        </main>
        <section className={styles.infoSectionContainer}>
          <div className={styles.cardsInfoContainer}>
            {infoSectionInfo.map((element) => (
              <CardInfo
                key={element.title}
                title={element.title}
                description={element.description}
                src={element.img.src}
              />
            ))}
          </div>
        </section>
        <section id="projects" className={styles.secondSectionContainer}>
          <TitleSectionSplitter title={"Projects"} />
          <div className={styles.topProjectsContainer}>
            {topFourProjects.map((element, index) => (
              <ProjectElement key={index} {...element} />
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
