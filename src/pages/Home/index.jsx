import React from 'react';
import {
  MainHome,
  HomeImg,
  HomeSection,
  HomeParagraph,
  HomeTitle,
  SecondTitle,
} from './styles';
import ProjectItem from '../../components/ProjectItem';
import AnchorOrLink from '../../components/AnchorOrLink';
import Layout from '../../components/Layout';
import About from '../../components/About';
import heroImg from '../../assets/hero.svg';
import ecommerceImg from '../../assets/ecommerce.svg';
import chatImg from '../../assets/chat.svg';
import weatherImg from '../../assets/weather.svg';

const Home = () => (
  <Layout>
    <MainHome>
      <HomeImg
        src={heroImg}
        alt="Men standing up see you and an office at the back"
      />
      <HomeSection>
        <HomeParagraph>
          Efficient and effectively components on the page
        </HomeParagraph>
        <HomeTitle>I make awesome web<br /> solutions</HomeTitle>
        <AnchorOrLink buttoncolor="#5667FF" isAnchor href="#projects">
          See my work
        </AnchorOrLink>
      </HomeSection>
    </MainHome>
    <section id="projects">
      <SecondTitle>Top 3 Projects</SecondTitle>
      <ProjectItem
        img={ecommerceImg}
        title="Machete Store SPA"
        technologies="React JS, MongoDB, Node JS, Express"
        description="I made this project designing the interface with React JS and fetching data from MongoDB Atlas Database using Express and Node JS."
        secondaryDescription="You can view the products and add to cart"
        buttoncolor="#92e3a9"
      />
      <ProjectItem
        img={chatImg}
        title="Blandin's Chat PWA"
        technologies="React JS, MongoDB ATLAS,Node JS, Express"
        description="I made this project designing the interface with React JS and using MongoDB for save messages and using it for real time chat."
        secondaryDescription="You can chat as Whatsapp like."
        buttoncolor="#63d1fd"
      />
      <ProjectItem
        img={weatherImg}
        title="Weather SPA"
        technologies="React JS, Open Weather API"
        description="I made this project designing the interface with React JS and fetching data from Open Weather Api that it's provide me it information."
        secondaryDescription="You can search for the city that you want to view how the weather looks like."
        buttoncolor="#5667FF"
      />

    </section>
    <About />
  </Layout>
);

export default Home;
