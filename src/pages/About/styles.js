import styled, { keyframes } from 'styled-components';
import { toUp } from '../../styles/animations.js';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
  text-align: justify;
  line-height: 1.4rem;
  font-weight: 500;
  font-family: 'Raleway', sans-serif;
  svg {
    width: 100%;
    max-width: 600px;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 100px 50px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const borderGrowth = keyframes`
  to {
    transform: rotate(365deg);
  }
`;
export const EachSection = styled.section`
  min-height: 50vh;
  margin: 30px 0;
  opacity: 0;
  line-height: 2rem;
  animation: 1s ${toUp} forwards;
  p {
      margin: 30px 0;
  };
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
    text-align: center;
    grid-column: 1 / 3;
  }; 
  @media screen and (min-width: 1200px) { 
    margin: 30px 100px;
    grid-column: 1 / 5
  }
`;

export const SecondSection = styled.div`
  min-height: 20vh;
  @media screen and (min-width: 768px) {
    grid-column: 1/3;
  }
  @media screen and (min-width: 1200px) {
    grid-column: 1/4;
  }
`;
export const ThirdSection = styled.div`
  min-height: 20vh;
  @media screen and (min-width: 768px) {
    grid-column: 1/3;
  }
  @media screen and (min-width: 1200px) {
    grid-column: 2 / 5;
  }
`;
export const FourSection = styled.div`
  min-height: 20vh;
  @media screen and (min-width: 768px) {
    grid-column: 1/3;
  }
  @media screen and (min-width: 1200px) {
    grid-column: 1 / 5;
  }
`;
export const textEntry = keyframes`
  from {
    opacity:0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  max-width: 300px;
  padding: 3px;
   &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border: 5px dashed #5667ff;
    border-radius: 50%;
    animation: 1.5s ${borderGrowth} forwards 0.5s
  }
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
    max-width: 450px;
    justify-self: center;
  }
  @media screen and (min-width: 1200px) {
    grid-column: 1/3
  }
`;

export const Img = styled.img`
  opacity: 0;
  width: 100%;
  height: 100%
  object-fit: cover;
  border-radius: 50%;
  animation: 1s ${textEntry} forwards 1s;
`;

export const textToUp = keyframes`
  from {
    opacity:0;
    transform: translateY(100vh);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const textToLeft = keyframes`
  from {
    opacity:0;
    transform: translateX(100vw);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const Title = styled.h2`
  margin: 50px 0;
  opacity:0;
  text-align: center;
  font-size: 1.5rem;
  animation: 1.3s ${textEntry} 1s forwards;
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
    letter-spacing: 3px;
  }
  @media screen and (min-width: 1024px) {
    text-align: start;
  }
  @media screen and (min-width: 1200px) {
    grid-column: 3 / 5;
    font-size: 2.5rem;
  }
`;
export const ParagraphEnd = styled.p`
  margin: 50px 0 ;
  font-weight: bold;
  text-align: center;
`;

