import styled, { keyframes } from "styled-components";

const easeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledCard = styled.div`
    width: 15vw;
    min-height: auto;
    background-color: white;
    margin-bottom: 1rem;
    border-radius: 1.5rem;
    padding: 1.5rem;
    transition: ease 2s;
    animation: ${easeAnimation} 0.5s ease;  
    word-wrap: break-word; 

    @media (max-width: 1400px){
      width: 100%;
    }
`

export const StyledCardTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    overflow: auto;
    word-wrap: break-word;
    max-height: 300px;
    word-wrap: break-word;
`

export const StyledCardDescription = styled.p`
    font-size: 0.8rem;
    margin-bottom: 2rem;
    overflow: auto;
    word-wrap: break-word;
    max-height: 300px;
    
`