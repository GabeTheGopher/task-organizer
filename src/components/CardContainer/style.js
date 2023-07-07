import styled from "styled-components";

export const StyledCardContainer = styled.div.attrs(props => ({
    color:props.color,
    background:props.background,
}))`
    min-width: 150px;
    width: 30%;
    background-color: ${props => props.background};
    box-shadow: 1px 1px 3px gray;
    border-radius: 0 0 1rem 1rem;
    border-top: 5px solid ${props => props.color};
    color: ${props => props.color};
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media (max-width: 950px) {
        width: 100%;
    }
`

export const StyledCardContainerTitle = styled.div`
    font-size: 1rem;
    margin-bottom: 1rem;
`