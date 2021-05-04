import styled from 'styled-components';

export const Article = styled.article`
  position: relative;
  width: 90%;
  padding: 3px 0;
  margin: 30px auto;
  max-width: 500px;
  background: #f3f3f3;
  border-radius: 50px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &::after {
    position: absolute;
    top: 0;
    content: '';
    right: calc(50% - 50px);
    width: 100px;
    height: 5px;
    transition: 0.6s;
    opacity: 0.4;
    background: ${({ buttonColor }) => buttonColor};
    border-radius: 30px;
  }
  &:hover {
    transform: scale(1.01);
    &::after {
      opacity: 1;
      width: 150px;
      right: calc(50% - 75px);
      height: 10px;
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    max-width: 900px;
    margin: 50px auto;
    padding: 15px 20px;
    grid-template-columns: repeat(2, 1fr);
    &:hover {
      &::after {
        transform: scale(1.1);
        right: calc(50% - 150px);
      }
    }
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    &:hover {
      &::after {
        transform: scale(1.2);
        right: calc(50% - 76px);
      }
    }
  } ;
  @media screen and (min-width: 2500px) {
    max-width: 2000px;
  }
`;
export const PrimarySection = styled.section`
  padding: 0 10px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  @media screen and (min-width: 1024px) {
  width: 100%;
    padding: 20px 10px;
    align-self: center;
    justify-self: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  @media screen and (min-width: 1024px) {
    height: 300px;
  }
  @media screen and (min-width: 1200px) {
    height: 500px;
  }
  @media screen and (min-width: 2500px) {
    height: 900px;
  }
`;
export const Title = styled.h6`
  font-size: 1.3rem;
  margin-bottom: 5px;
  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 2500px) {
    font-size: 3rem;
  }
`;
export const TechnologiesP = styled.p`
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 0.7rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  @media screen and (min-width: 1024px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.1rem;
  } ;
  @media screen and (min-width: 2500px) {
    font-size: 1.5rem
  }
`;
export const SecondarySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  text-align: center;
  padding: 0 20px;
  color: rgba(0, 0, 0, 0.67);
  font-weight: 500;
  font-family: 'Raleway', sans-serif;
  @media screen and (min-width: 1024px) {
    grid-column: 2;
    align-self: end;
    font-size: 1.15rem;
    justify-self: center;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.3rem;
  } ;
  @media screen and (min-width: 2500px) {
    width: 100%;
    font-size: 2rem
  }
`;
