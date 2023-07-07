import styled from "styled-components";

export const StyledActionCardSection = styled.div.attrs(props => ({
    color:props.color,
    background:props.background,
}))`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${props => props.background};
    border-radius: 0.5rem;
    padding: 1rem 0.5rem;
    align-items: center;
`

export const StyledActionText = styled.div`
    font-size: 1rem;
`