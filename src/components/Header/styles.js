import styled, { keyframes } from 'styled-components';
import { Link as LinkAnchor } from 'react-router-dom';

export const MenuButton = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
  height: 25px;
  div {
    border-radius: 20px;  
	}
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Item1 = styled.div`
  height: 3px;
  width: 100%;
  background: #000;
`;

export const Item2 = styled.div`
  height: 3px;
  width: 100%;
  background: #000;
`;
export const Item3 = styled.div`
  height: 3px;
  width: 100%;
  background: #000;
`;

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  @media screen and (min-width: 768px) {
    padding: 15px 14.5%;
  }
  @media screen and (min-width: 1024px) {
    padding: 20px 4.8%;
  }
`;
export const Img = styled.img`
  display: inline-block;
  width: 190px;
  height: 90px;
  @media screen and (min-width: 1200px) {
    width: 220px;
    height: 110px;
    grid-column: 1;
  }
  @media screen and (min-width: 2500px) {
    width: 360px;
    height: 240px;
  }
`;

export const Ul = styled.ul`
  position: fixed;
  display: flex;
  bottom: 0;
  right: -100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 80vw;
  background: rgba(245, 245, 245, 1);
  opacity: 0;
  transition: 0.5s;
  & {
    ${({ menu }) => (menu ? 'opacity: 1;right: 0;' : false)}
  }
  @media screen and (min-width:768px) {
    opacity: 1;
    flex-direction: row;
    position: sticky;  
    height: 100%;
    max-height: 80px;
    width: max-content;
    background: none;
  }
`;

export const Li = styled.li`
  margin: 60px;
  list-style: none;
  color: black;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    margin: 0 25px;
    color: 7b7b7b;
    font-weight: 400;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.1rem;
    margin: 0 45px;
  }
  @media screen and (min-width: 2500px) {
    font-size: 1.7rem;
  }
`;

export const Link = styled(LinkAnchor)`
  text-decoration: none;
`;
