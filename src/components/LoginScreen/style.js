import styled from "styled-components"

export const StyledLoginScreen = styled.div`
    position: relative;
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.colors.whiteBg};
    box-shadow: 2px 2px 8px ${({theme}) => theme.colors.gray};
    overflow: auto;
`

export const StyledLoginScreenTitle = styled.div`
    margin-top: 2rem;
    font-size: 1.6rem;
    margin: 0 1rem 2rem 1rem;
    text-align: center;
`