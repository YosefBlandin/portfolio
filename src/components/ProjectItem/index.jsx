import React from 'react';
import {
  Article,
  PrimarySection,
  SecondarySection,
  TechnologiesP,
  Title,
  Img,
  SpanForEffect1,
  SpanForEffect2,
  SpanForEffect3,
  SpanForEffect4,
} from './styles';
import AnchorOrLink from '../AnchorOrLink';

const ProjectItem = ({
  img,
  alt,
  title,
  technologies,
  description,
  secondaryDescription,
  buttoncolor,
}) => (
  <Article buttoncolor={buttoncolor}>
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
      <AnchorOrLink isAnchor buttoncolor={buttoncolor}>
        View Project
      </AnchorOrLink>
    </SecondarySection>
  </Article>
);
export default ProjectItem;
