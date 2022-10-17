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
import typingImage from "../public/typing.svg";
import randmImage from "../public/randm.png";
import { TitleSectionSplitter } from "../components/TitleSectionSplitter";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { CardInfo } from "../components/CardInfo";

const Home: NextPage = () => {
  const [showNav, setShowNav] = useState(true);
  const topFourProjects = [
    {
      projectName: "R&M By Yosef Blandin",
      projectDescription:
        "Project in which you can see all Rick and Morty's characters and add your favorite to a list",
      projectStack: "Next JS, React JS, Redux",
      backgroundImage: randmImage.src,
      route: "https://rickandmorty-gilt-nine.vercel.app/",
    },
    {
      projectName: "Machete Store",
      projectDescription: "Small project made for a local shop",
      projectStack: "React JS, Redux",
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
      title: "Evaluation of your requirements",
      description:
        "It is crucial to have a clear understanding of your requirements in order to provide a solution molded for you",
      img: analysisImage,
    },
    {
      title: "Strong communication",
      description:
        "I was a client years ago and I like to have an assertive communication in order to know the progress and what steps we are going to take afterwards",
      img: dealImage,
    },
    {
      title: "Specialized",
      description:
        "I have worked with many web technologies such as Typescript, React, Next, Angular, Bootstrap, Sass, Formik, HTML, CSS",
      img: typingImage,
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
        <title>Building World Class Front End systems - Yosef Blandin</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Bring to life your designs with a professional Front End Developer with over 2 years of experience working with JavaScript using React, Next and Angular"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Yosef Blandin" />
      </Head>
      <Layout showNav={showNav}>
        <main className={styles.container}>
          <section className={styles.hero}>
            <div className={styles.heroTextContainer}>
              <h1>Developing the Frontend of the World</h1>
              <h2>
                Experience working with top tier technologies such as React JS,
                Next JS, Typescript and more
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
