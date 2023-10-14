import styled, { keyframes } from "styled-components";

const fillAnimation = keyframes`
  0% {
    width: 0%;
    background-color: #b16821;
    color: #b16821;
}
50% {
    width: 50%;
    background-color: #a93a39;
    color: #a93a39;
  }
  100% {
    width: 100%;
    background-color: #3a6fa2;
    color: #3a6fa2;
}
`;


const colorChangeAnimation = keyframes`
  0% {
    color: #b16821;
}
50% {
    color: #a93a39;
  }
  100% {
    color: #3a6fa2;
}
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 3rem;
  overflow: hidden;
  border-radius: 5px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: 0;
  background-color: #3498db;
  animation: ${fillAnimation} 2s ease-in-out forwards;
`;

export const StyledLoadingText = styled.span`
  font-size: 2rem;
  animation: ${colorChangeAnimation} 2s infinite;
`;
