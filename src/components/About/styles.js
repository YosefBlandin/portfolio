import styled from 'styled-components';
import { borderRotate } from '../../styles/animations';

export const Article = styled.article`
  position: relative;
  display: grid;
  grid-template-rows: repeat(2,1fr);
  justify-content: center;
  min-height: 400px;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 3px;
  margin-top: 200px;
  background: linear-gradient(to bottom ,#f3f3f3 50%, #000 50%);
  border-radius: 50px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  border: 3px solid white;
`;
export const AvatarContainer = styled.span`
  position: absolute;
  top: -70px;
  right: calc(50% - 75px);
  height: 150px;
  width: 150px;
  padding: 3px;
  &::after {
    position: absolute;
    top: -5px;
    right: calc(50% - 80px);
    content: "";
    width: 150px;
    height: 150px; 
    border-radius: 50%;
    border: 5px solid #5667ff;
    animation: 1.5s ${borderRotate} forwards 1s;
    }
  }
`;
export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
export const PrimarySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  grid-row: 1;
  width: 100%;
  height: 100%;
`;
export const TitlesDiv = styled.div`
  grid-row: 1;
  align-self: center;
`;
export const Title = styled.h5`
  font-size: 1.3rem;
  text-align: center;
`;
export const Subtitle = styled.h6`
  font-size: 1.1rem;
  text-align:center;
  letter-spacing: 1px;
  font-family: 'Raleway', sans-serif;
`;
export const SecondarySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  width: 100%;
  height: 100%;
`;
export const UnorderedList = styled.ul`
  grid-row: 2;
  align-self: center;
  list-style: none;
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: 'Raleway', sans-serif;
`;
export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  height: 30px;
  width: 100%;
`;
export const Icon = styled.a`
  color: black;
  margin: 0 5px;
  margin-top:15px;
  font-size: 2.5rem;
`;
