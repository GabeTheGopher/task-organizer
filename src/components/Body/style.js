import styled from "styled-components";

export const StyledBody = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: space-around;

    width: 70%;
    height: 100%;

    @media (max-width: 1400px) {
        width: 100%;
    }
    @media (max-width: 950px) {
        flex-direction: column;
        height: auto;
        gap: 30px;
    }
`

export const StyledBodyTitle = styled.h2`
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-end;
`