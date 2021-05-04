import { keyframes } from 'styled-components';

export const borderRotate = keyframes`
  0% {
    border: 5px dashed #5667ff;
    transform: rotate(0);
  }
  100% {
    border: 5px dashed #5667ff;
    transform: rotate(-100deg);
  }
`;
export const toUp = keyframes`
  from {
    opacity:0;
    transform: translateY(100vh)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;
