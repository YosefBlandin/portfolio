import React, { useRef } from 'react';
import Layout from '../../components/Layout'
import {
   Section
  ,Title
  ,Img
  ,ImgContainer
  ,ParagraphOne
  ,ParagraphTwo
  ,ParagraphFour
  ,ParagraphSix
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
  let avatar = useRef(null)

  return(
  <Layout>
    <Section> 
      <ImgContainer>
        <Img src={avatarImg} alt='Yosef Blandin Avatar' />
      </ImgContainer>
      <Title>I am Yosef Blandin</Title>
      <ParagraphOne>I have been learning Front End Development since a year ago.</ParagraphOne>
      <ParagraphTwo>When the pandemic was started.</ParagraphTwo> 
      <Pandemic />
      <p>I'm a very optimistic person and so I decided to learn as a self taugh Front End development.</p>
      <ParagraphFour>I was learning a lot for Platzi, Udemy and Youtube</ParagraphFour>
      <DevWorking />

      <p>I think that the best way for learn anything, is to practice a lot and to keep curiosity about the field.</p>
      <Ideas />
      <ParagraphSix>I want to keep improving my professional skills and provide better solutions for the company, if the company grows, we too.</ParagraphSix>
      <Growth />
      <p>If you want to contact me, there is a Form.</p>
      <ParagraphEnd>It is a pleasure.</ParagraphEnd>
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
