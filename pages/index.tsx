import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../Layout";
import { CarouselWords } from "../components/CarouselWords";
import heroImage from "../public/hero.svg";
import styles from "../styles/Home.module.css";
import { ProjectElement } from "../components/ProjectElement";
import ecommerceImage from "../public/ecommerce.svg";
import socialMediaImage from "../public/socialMedia.svg";
import weatherImage from "../public/weather.svg";
import managementImage from "../public/management.svg";
import { HomeAboutInfo } from "../components/HomeAboutInfo";

const Home: NextPage = () => {
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
                Front-end Engineer <br /> foccussed on building web solutions
              </h1>
              <CarouselWords />
              <button className={styles.heroTextButton}>see experience</button>
            </div>
          </section>
          <h2 className={styles.topProjectsTitle}>Top tier four projects</h2>
          <div className={styles.topProjectsContainer}>
            <ProjectElement
              backgroundImage={ecommerceImage.src}
              backgroundColor="#F6E7D8"
              projectName="Yosef's Store"
              projectCategory="E-commerce"
            />
            <ProjectElement
              backgroundImage={socialMediaImage.src}
              backgroundColor="#C8E3D4"
              projectName="Marvelnstagram"
              projectCategory="Social Media Platform"
            />
            <ProjectElement
              backgroundImage={weatherImage.src}
              backgroundColor="#ffedc5"
              projectName="Weather App"
              projectCategory="React Native App"
            />
            <ProjectElement
              backgroundImage={managementImage.src}
              backgroundColor="#e0d6ff"
              projectName="Blandin's Users Manager"
              projectCategory="Management"
            />
          </div>
          <HomeAboutInfo
            description="I do like to push
        myself out of the confort zone, I've had some problems to solve and in
        those moments, I feel like I'm learning and improving my professional
        abilities. I enjoy to work with a team and to be helpful as much as posible, we are more productive together."
          />
        </main>
      </Layout>
    </div>
  );
};

export default Home;
