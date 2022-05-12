import type { NextPage } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../Layout";
import { CarouselWords } from "../components/CarouselWords";
import heroImage from "../public/yosefAvatar.svg";
import styles from "../styles/Home.module.css";
import { ProjectElement } from "../components/ProjectElement";
import ecommerceImage from "../public/ecommerce.svg";
import socialMediaImage from "../public/socialMedia.svg";
import weatherImage from "../public/weather.svg";
import managementImage from "../public/management.svg";
import { HomeAboutInfo } from "../components/HomeAboutInfo";
import axios from "axios";

const Home: NextPage<{ projects: string[] }> = ({ projects }) => {
  console.log("Projects", projects);
  const topFourProjects = [
    {
      projectName: "Yosef's Store",
      projectCategory: "E-commerce",
      backgroundColor: "#90908a",
      backgroundImage: ecommerceImage.src,
      route: "/projects/yosefStore",
    },
    {
      projectName: "Marvelnstagram",
      projectCategory: "Social Media Platform",
      backgroundColor: "#837666",
      backgroundImage: socialMediaImage.src,
      route: "/projects/marvelnstagram",
    },
    {
      projectName: "Weather App",
      projectCategory: "React App",
      backgroundColor: "#eadbc8",
      backgroundImage: weatherImage.src,
      route: "/projects/weatherApp",
    },
    {
      projectName: "Blandin's Users Manager",
      projectCategory: "Management",
      backgroundColor: "#e98a54",
      backgroundImage: managementImage.src,
      route: "/projects/blandinsUsersManager",
    },
  ];
  const homeAboutInfo = `I do like to push
	myself out of the confort zone, I've had some problems to solve and in
	those moments, I feel like I'm learning and improving my professional
	abilities. I enjoy to work with a team and to be helpful as much as posible, we are more productive together.`;
  return (
    <div>
      <Head>
        <title>Yosef Blandin</title>
      </Head>
      <Layout>
        <main className={styles.container}>
          <section className={styles.hero}>
            <div className={styles.heroImageContainer}>
              <Image
                src={heroImage}
                width="500px"
                height="500px"
                alt="Hero laptop and smartphone interconnected"
                objectFit="contain"
                className={styles.heroImage}
              />
            </div>
            <div className={styles.heroTextContainer}>
              <h1>
                Frontend Engineer <br /> foccussed on building web solutions
              </h1>
              <CarouselWords />
              <button className={styles.heroTextButton}>see experience</button>
            </div>
          </section>
          <h2 className={styles.topProjectsTitle}>Top projects</h2>
          <div className={styles.topProjectsContainer}>
            {topFourProjects.map((element, index) => (
              <ProjectElement key={index} {...element} />
            ))}
          </div>
          <HomeAboutInfo description={homeAboutInfo} />
        </main>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getProjects {
        getProjects {
          id,
          projectName,
          image,
          introduction,
          description,
          url,
          techStack
        }
      }
    `,
  });
  console.log("BAM NIGGI", data);
  return {
    props: {
      projects: data?.getProjects,
    },
  };
}

export default Home;
