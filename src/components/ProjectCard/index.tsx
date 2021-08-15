import React from 'react';
import { MdInfoOutline } from "react-icons/md";
import { Article, Opacity, Header, Title, Technologies, Footer } from './styles';

export const ProjectCard = ({ title, technologies, projectImg }) => {
    return (
        <Article projectImg={projectImg}>
            <Opacity>
                <Header>
                    <Title>{title}</Title>
                    <Technologies>{technologies}</Technologies>
                </Header>
                <Footer>
                    <MdInfoOutline />
                </Footer>
            </Opacity>
        </Article>
    )
}