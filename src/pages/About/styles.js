import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
  text-align: justify;
  line-height: 1.4rem;
  font-weight: 500;
  color: rgb(240,240,240);
  background-color: #000;
  font-family: 'Raleway', sans-serif;
`;
const borderGrowth = keyframes`
  to {
    transform: rotate(365deg);
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
    animation: 1.5s ${borderGrowth} forwards 1.5s
  }
`;

export const Img = styled.img`
  opacity: 0;
  width: 100%;
  height: 100%
  object-fit: cover;
  border-radius: 50%;
  animation: 1s ${textEntry} forwards 1s
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
  animation: 2s ${textEntry} 1.5s forwards;
`;
export const ParagraphOne = styled.p`
  opacity: 0;
  font-weight: 500;
  animation: 2s ${textToUp} 2.5s forwards;
`;
export const ParagraphTwo = styled.p`
  margin: 30px 0;
  text-align: start;
  opacity:0;
  animation: 2s ${textToLeft} 3s forwards;
`;
export const ParagraphTree = styled.p`
`;
export const ParagraphFour = styled.p`
  margin: 30px 0;
  text-align: start;
`;
export const ParagraphSix = styled.p`
  margin: 50px 0;
  text-align: center;
`;
export const ParagraphEnd = styled.p`
  margin: 50px 0 ;
  font-weight: bold;
  text-align: center;
  color: rgb(70,70,70);
`;
export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 80px 0 ;
  padding: 0 20px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 1.4rem;
  font-family: 'Raleway', sans-serif;
`;
export const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;
export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  min-height: 380px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 0 8px 0 rgb(200,200,200);
`;
export const H6 = styled.h6`
  margin-bottom: 20px;
  font-size: 1.2rem;
  text-align: center;
`;
export const Input = styled.input`
  margin: 10px 0;
  padding: 3px 3px;
  height: 25px;
  width: 65%;
  border: none;
  border-bottom: 1px solid rgb(200,200,200);
  outline: none;
  transition: 0.5s;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
export const Textarea = styled.textarea`  
  margin: 10px 0;
  padding: 3px 3px;
  height: 100px;
  width: 65%;
  border: 1px solid rgb(200,200,200);
  outline: none;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
