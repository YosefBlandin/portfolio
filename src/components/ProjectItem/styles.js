import styled from 'styled-components';

export const Article = styled.article`
  width: 90%;
  padding: 3px 0;
  margin: 30px auto;
  max-width: 500px;
  background: #f3f3f3;
  border-radius: 30px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  transition: 0.5s linear;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px 7px rgba(0, 0, 0, 0.15);
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    max-width: 900px;
    padding: 15px 20px;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 50px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1600px;
    padding: 30px 20px;
    margin: 80px auto;
  }
`;
export const PrimarySection = styled.section`
  padding: 0 10px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  @media screen and (min-width: 1024px) {
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
`;
export const Title = styled.h6`
  font-size: 1.3rem;
  margin-bottom: 5px;
  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2.8rem;
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
    font-size: 1.5rem;
  } ;
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
    font-size: 2rem;
  } ;
`;
