import React from 'react';
import Layout from '../../components/Layout';
import { ProjectCard } from '../../components/ProjectCard';
import { ProjectsContainer } from './styles';

import marvelImg from '../../assets/marvel.jpg';
import rickAndMortyImg from '../../assets/rickAndMorty.jpg';
import weatherImg from '../../assets/weatherApp.jpg';

const projects = [
    {
        title: "Blandin's Marvel",
        technologies: "React, Redux, Material UI, APIs",
        projectImg: marvelImg
    },
    {
        title: "Blandin's Rick and Morty",
        technologies: "React, Sass, APIs",
        projectImg: rickAndMortyImg
    },
    {
        title: "Weather App",
        technologies: "React, Sass, APIs",
        projectImg: weatherImg
    },
    {
        title: "Weather App",
        technologies: "React, Sass, APIs",
        projectImg: weatherImg
    },
    {
        title: "Weather App",
        technologies: "React, Sass, APIs",
        projectImg: weatherImg
    },
    {
        title: "Weather App",
        technologies: "React, Sass, APIs",
        projectImg: weatherImg
    },
]





const Projects = () => {
    return (
        <Layout>
            <ProjectsContainer>
                {projects.map((props) => <ProjectCard {...props}/>)}
            </ProjectsContainer>
        </Layout>
    )
}


export default Projects