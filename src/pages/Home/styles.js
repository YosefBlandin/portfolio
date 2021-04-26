import styled from 'styled-components';

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-bottom: 50px;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5px 6%;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 15vh;
    margin-top: 5vh;
  }
`;
export const HomeSection = styled.section`
  text-align: center;
  @media screen and (min-width: 1024px) {
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    justify-self: start;
    text-align: start;
  }
`;
export const HomeImg = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 1024px) {
    grid-column: 2;
    width: 100%;
    align-self: center;
    justify-self: end;
  }
  @media screen and (min-width: 1200px) {
    height: 100%;
  }
`;
export const HomeParagraph = styled.p`
  color: #7b7b7b;
  font-weight: bold;
  font-size: 0.65rem;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.6rem;
  } ;
`;
export const HomeTitle = styled.h1`
  font-size: 2rem;
  font-family: 'Raleway', sans-serif;
  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2.6rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 5rem;
  }
`;
export const SecondTitle = styled.h2`
  margin: 20px 0;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 3rem;
  }
`;
