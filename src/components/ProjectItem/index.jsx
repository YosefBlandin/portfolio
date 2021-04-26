import React from 'react';
import {
  Article,
  PrimarySection,
  SecondarySection,
  TechnologiesP,
  Title,
  Img,
} from './styles';
import AnchorOrLink from '../AnchorOrLink';

const ProjectItem = ({
  img,
  alt,
  title,
  technologies,
  description,
  secondaryDescription,
  buttonColor,
}) => (
  <Article>
    <PrimarySection>
      <Img src={img} alt={alt} />
      <Title>{title}</Title>
      <TechnologiesP>
        Technologies:
        {technologies}
      </TechnologiesP>
    </PrimarySection>
    <SecondarySection>
      <p>{description}</p>
      <p>{secondaryDescription}</p>
      <AnchorOrLink isAnchor buttonColor={buttonColor}>
        View Project
      </AnchorOrLink>
    </SecondarySection>
  </Article>
);
export default ProjectItem;
