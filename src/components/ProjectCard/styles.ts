import styled from "styled-components";

export const Article = styled.article<({ projectImg: string })>`
    width: 100%;
    height: 100%;
    min-height: 400px;
    max-width: 400px;
    max-height: 600px;
    margin: 2rem 0;
    border-radius: 1rem;
    border: 2px solid whitesmoke;
    background: url(${({ projectImg }) => projectImg}) no-repeat center / cover;
    box-shadow: 0 0 10px 3px rgba(220,220,220, 0.9);
    transition: 0.5s;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    &:hover {
        transition: 0.5s;
        transform: scale(1.02);
    }
    @media screen and (min-width: 768px) {
         & {
             margin: 2rem;
         }
     }
`;
export const Opacity = styled.div`
    display: grid;
    grid-template-columns: 230px 1fr;
    grid-template-rows: 200px 1fr 1fr;
    min-height: 500px;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: rgba(0, 0, 0, .2);
    transition: 0.5s;
    &:hover {
        background: rgba(0,0,0, 0);
        transition: 0.5s;
    }
`;
export const Header = styled.header`
    grid-column: 1;
    grid-row: 1;
`;
export const Title = styled.h3`
    padding: 1rem;
    color: black;
    font-size: 1.4rem;
    letter-spacing: 1px;
    backdrop-filter: blur(5px);
    background: rgba(255,255,255, 0.7);
    border-radius: 0.75rem 0 1rem 0;
`
export const Technologies = styled.p`
    padding: 0.5rem;
    width: 90%;
    color: white;
    background: black;
    letter-spacing: 1px;
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 0 0 1rem 0;
`
export const Footer = styled.footer`
    grid-column: 2;
    grid-row: 3;
    align-self: end;
    justify-self: end;
    padding: 1rem;
    backdrop-filter: blur(10px);
    background: rgba(255,255,255, 0.5);
    border-radius: 1rem 0 1rem 0;
    svg {
        color: black;
        font-size: 2.5rem;
    }
`;