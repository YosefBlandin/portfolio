import styled from "styled-components";


export const SectionContainer = styled.section`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    animation: fadeIn 1.5s forwards 1.5s;
    @keyframes fadeIn {
        to {
            opacity: 0;
        }
    }
`;

export const Title = styled.section`
    color: black;
    font-weight: 500;
    font-size: 2rem;
    @keyframes fadeIn {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`