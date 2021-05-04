import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 50px;
  color: white;
  margin: 30px auto;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: 'Raleway', 'sans-serif';
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background: ${({ buttoncolor }) => buttoncolor || 'black'};
  transition: 0.5s;
  &:hover {
    background: black;
  }
  @media screen and (min-width: 1024px) {
    margin: 30px 0;
    width: 250px;
    height: 60px;
  }
  @media screen and (min-width: 2500px) {
    width: 400px;
    height: 100px;
    margin: 50px 0;
    font-size: 1.6rem;
  }
`;
export const Link = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 50px;
  color: white;
  margin: 30px auto;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: 'Raleway', 'sans-serif';
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background: ${({ buttoncolor }) => buttoncolor || '#5667ff'};
  @media screen and (min-width: 1024px) {
    margin: 30px 0;
    width: 250px;
    height: 56px;
  }
`;
