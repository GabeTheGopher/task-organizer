import styled from "styled-components"

export const StyledContainer = styled.div`
    position: relative;
    width: 95vw;
    height: 95vh;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.colors.whiteBg};
    box-shadow: 2px 2px 8px ${({theme}) => theme.colors.gray};
    overflow: auto;
`