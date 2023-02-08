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
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../Layout"), {
  ssr: false,
});
import styles from "../styles/Home.module.css";
import { ProjectElement } from "../components/ProjectElement";
import { AnimatedText } from "../components/AnimatedText";
import macheteStoreImg from "../public/macheteStore.png";
import weatherImage from "../public/weatherApp.png";
import analysisImage from "../public/analysis.svg";
import dealImage from "../public/deal.svg";
import fitnessImage from "../public/Fitness tracker-bro.svg";
import yosefImage from "../public/yosefphoto.jpg";
import { TitleSectionSplitter } from "../components/TitleSectionSplitter";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardInfo } from "../components/CardInfo";
import { clearTimeout } from "timers";

import { TextCard } from "../components/TextCard";
import Image from "next/image";

const Home: NextPage = () => {
  const [showNav, setShowNav] = useState(true);
  const projects = [
    {
      projectName: "Favorite List Manager",
      projectTitle: "Redux State Management, Easy to use, Simple.",
      projectDescription:
        "You can see all Rick and Morty's characters and add your favorite to a list.",
      projectStack: "Made with Next, React, Redux and GraphQL.",
      route: "https://rickandmortygraphql-eight.vercel.app/",
    },
    {
      projectName: "Clothing Ecommerce",
      projectTitle: "Intuitive. Small. Well user experience.",
      projectDescription:
        "You can find the clothes that you want to buy. (It doesn't have a payment gateway implemented)",
      projectStack: "Made with React and Context API.",
      route: "https://machete-store-yosefblandin.vercel.app/",
    },
    {
      projectName: "Weather Single Page",
      projectTitle: "Informative. Modular. Precise.",
      projectDescription:
        "Find the location you'd like to see the weather or simply see the weather of your current location",
      projectStack: "Made with React.",
      route: "https://weatherapp-yosefblandin.vercel.app/",
    },
  ];

  const infoSectionInfo = [
    {
      title: "Learning enthusiast",
      description:
        "I like to read a lot of books to expand my knowledge, and therefore be able to find better solutions to problems.",
      img: analysisImage,
    },
    {
      title: "Ownership mindset believer",
      description:
        "The ownership mindset has been a key to my life in order to overcome challenges, to be relentless recognizing my errors learning from them.",
      img: dealImage,
    },
    {
      title: "Fitness devotee",
      description:
        "I like to maintain a healthy condition in order to have a better performance mentally and physically.",
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
                src={element.img}
                description={element.description}
              />
            ))}
          </div>
        </section>
        <section id="projects" className={styles.secondSectionContainer}>
          <div className={styles.secondSectionContainer}>
            <AnimatedText
              mediumText={
                <>
                  Less development problems.
                  <br />
                  Faster results
                </>
              }
            />
            <Box
              position={"relative"}
              margin={"0 auto"}
              padding={"120px 0"}
              minHeight={450}
              backgroundColor={"#fff"}
            >
              <Box
                display={"grid"}
                justifyContent={"center"}
                gridTemplateColumns={"repeat(3, 1fr)"}
                gridTemplateRows={"repeat(2, 1fr)"}
                gap="20px"
                margin={"0 auto"}
                maxWidth={{ sm: 900, lg: 1200 }}
              >
                {/* <Image
                  src={yosefImage}
                  alt="Yosef Blandin"
                  style={{
                    borderRadius: "100%",
                  }}
                /> */}
                <TextCard
                  text={
                    <>
                      <strong>Each project</strong> was developed using
                      TypeScript in order to create code more secure and
                      predictable. Additionally we’ve added end to end tests
                      using Cypress in order to make a deliverable with the best
                      quality as posible.
                    </>
                  }
                />
                <TextCard
                  text={
                    <>
                      As Santiago Gonzalez once said:{" "}
                      <strong>
                        “Beautiful code is short and concise, so if you were to
                        give that code to another programmer they would say “oh,
                        that’s well written code.” It’s much like as if you were
                        writing a poem.”
                      </strong>
                    </>
                  }
                />
              </Box>
            </Box>
          </div>
          <h2 className={styles.projectsTitle}>
            <strong>Study cases.</strong> The best way to find the study case
            that is like your dream project.
          </h2>
          <div className={styles.projectsCardsContainer}>
            {projects.map((element, index) => (
              <ProjectElement key={index} {...element} />
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
