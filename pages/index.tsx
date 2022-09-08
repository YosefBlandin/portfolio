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
import petgramImg from "../public/petgram.png";
import weatherImage from "../public/weatherApp.png";
import spacexImage from "../public/spacexPracticeImg.png";
import managementImage from "../public/management.svg";
import { useRouter } from "next/router";
import { TitleSectionSplitter } from "../components/TitleSectionSplitter";
import { ButtonComponent } from "../components/ButtonComponent";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";

const Home: NextPage = () => {
  const [showNav, setShowNav] = useState(true);
  const topFourProjects = [
    {
      projectName: "Machete Store",
      projectDescription: "Small project made for a local shop",
      projectStack: "React JS, Redux",
      backgroundImage: macheteStoreImg.src,
      route: "https://machete-store-yosefblandin.vercel.app/",
    },
    // {
    //   projectName: "Weather App",
    //   projectStack: "Angular",
    //   projectDescription: "Angular single page application",
    //   backgroundImage: weatherImage.src,
    //   route: "https://petgram-yosefblandin.vercel.app/",
    // },
    {
      projectName: "Weather App",
      projectStack: "React",
      projectDescription: "React single page application",
      backgroundImage: weatherImage.src,
      route: "https://weatherapp-yosefblandin.vercel.app/",
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
