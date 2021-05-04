import React from 'react'
import { 
  Article, 
  Avatar,
  Icon,
  PrimarySection,
  Title,
  Subtitle,
  TitlesDiv,
  SecondarySection,
  SocialList,
  UnorderedList,
  AvatarContainer,
} from './styles.js'
import AnchorOrLink from '../AnchorOrLink'

import avatarImg from '../../assets/avatar.jpeg'

const About =  () => {
  return (
    <Article>
      <AvatarContainer>
        <Avatar src={avatarImg} alt="Yosef Blandin avatar" />     
      </AvatarContainer>
      <PrimarySection>
        <TitlesDiv>
          <Title>Yosef Blandin</Title>
          <Subtitle>Front End Developer</Subtitle>
        </TitlesDiv> 
        <SocialList>
            <Icon href="https://github.com/YosefBlandin" className="fab fa-github-square"/>
            <Icon href="https://www.linkedin.com/in/yosef-blandin-a587241b0/" className="fab fa-linkedin"/>
            <Icon href="https://www.instagram.com/yosef_blandinw/" className="fab fa-instagram-square"/>
            <Icon href="https://twitter.com/yosef_rios" className="fab fa-twitter-square" />
         </SocialList>
      </PrimarySection>
      <SecondarySection>
        <UnorderedList>        
          <li>Planificated and efficient</li>
          <li>Knowledge applied to projects</li>
          <li>Profitable working with React JS</li>
        </UnorderedList>
        <AnchorOrLink isLink={true} to="/about">Know more</AnchorOrLink>
      </SecondarySection>
    </Article>
  )
}
export default About
