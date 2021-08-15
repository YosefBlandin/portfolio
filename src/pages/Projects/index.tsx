import React from 'react';
import Layout from '../../components/Layout';
import { ProjectCard } from '../../components/ProjectCard';
import { ProjectsContainer } from './styles';

import marvelImg from '../../assets/313.png';
import weatherImg from '../../assets/weather.png';

const projects = [
    {
        title: "Blandin's Marvel",
        technologies: "React, Redux, Material UI, APIs",
        projectImg: marvelImg
    },
    {
        title: "Weather App",
        technologies: "React, Sass, APIs",
        projectImg: weatherImg
    }
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