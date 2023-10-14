import styled from "styled-components";

export const StyledGoogleButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 1.5rem;
    background-color: ${({theme}) => theme.colors.sweetBlue};
    color: ${({theme}) => theme.colors.strongBlue};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;
`
