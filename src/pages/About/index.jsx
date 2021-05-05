import React, { useState,useRef,useEffect } from 'react';
import useToTop from '../../utils/useToTop'
import Layout from '../../components/Layout'
import {
   Section
  ,Title
  ,Img
  ,ImgContainer
  ,EachSection
  ,SecondSection
  ,ThirdSection
  ,FourSection
  ,ParagraphEnd
  ,Fieldset
  ,SectionForm
  ,Form
  ,Input
  ,Textarea
  ,H6
} from './styles'

import DevWorking from './dev-working';
import avatarImg from '../../assets/avatar.jpeg'
import Pandemic from './pandemic'
import Ideas from './ideas'
import Growth from './growth'

const About = () => {
  const [visibleSecondSection, setVisibleSecondSection] = useState(false);
  const [visibleThirdSection, setVisibleThirdSection] = useState(false);
  const [visibleFourSection, setVisibleFourSection] = useState(false);
  let secondSection = useRef(null);
  let thirdSection = useRef(null);
  let fourSection = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  useToTop();
  useEffect(() => { 
  const observer = new IntersectionObserver((entries) => {
    const { isIntersecting } = entries[0]
    return isIntersecting && setVisibleSecondSection(!visibleSecondSection)
  }, options);
    observer.observe(secondSection.current)
    return () => observer.disconnect(secondSection.current)
  }, [])
  useEffect(() => { 
  const observer = new IntersectionObserver((entries) => {
    const { isIntersecting } = entries[0]
    return isIntersecting && setVisibleThirdSection(!visibleThirdSection)
  }, options);
    observer.observe(thirdSection.current)
    return () => observer.disconnect(thirdSection.current)
  }, [])
  useEffect(() => { 
  const observer = new IntersectionObserver((entries) => {
    const { isIntersecting } = entries[0]
    return isIntersecting && setVisibleFourSection(!visibleFourSection)
  }, options);
    observer.observe(fourSection.current)
    return () => observer.disconnect(fourSection.current)
  }, [])
  return(
  <Layout>
    <Section> 
      <ImgContainer>
        <Img src={avatarImg} alt='Yosef Blandin Avatar' />
      </ImgContainer>
      <Title>I am Yosef Blandin</Title>
      <EachSection>
        <p>I have been learning Front End Development since a year ago.</p>
        <p>When the pandemic was started.</p> 
        <Pandemic />
      </EachSection>
      <SecondSection ref={secondSection}>
        {visibleSecondSection && (
        <EachSection>
          <p>I'm a very optimistic person and so I decided to learn as a self taugh Front End development. I was learning a lot for Platzi, Udemy and Youtube</p>
          <DevWorking/> 
        </EachSection>
        )}
      </SecondSection>
        <ThirdSection ref={thirdSection}>
         {visibleThirdSection && (
          <EachSection>
            <p>I think that the best way for learn anything, is to practice a lot and to keep curiosity about the field.</p>
            <Ideas /> 
          </EachSection>
          )} 
        </ThirdSection>
        <FourSection ref={fourSection}>
          {visibleFourSection && (
            <EachSection>
              <p>I want to keep improving my professional skills and provide better solutions for the company, if the company grows, we too.</p>
              <Growth />
              <p>If you want to contact me, there is a Form.</p>
              <ParagraphEnd>It is a pleasure.</ParagraphEnd>

            </EachSection>
          )}
        </FourSection>
      </Section>
    <SectionForm>
      <Form>
        <H6>Contact me</H6>
        <Fieldset>
          <label htmlFor="name" name="name">Name: </label>
          <Input htmlFor="name" type="name" placeholder="Name" />
          <label htmlFor="email" name="email">Email: </label>
          <Input htmlFor="name" type="email" placeholder="Email" />
          <label htmlFor="message" name="message">Message: </label>
          <Textarea htmlFor="message" type="message" placeholder="Message" />
        </Fieldset>
      </Form>
    </SectionForm>
  </Layout>
  )
}

export default About
