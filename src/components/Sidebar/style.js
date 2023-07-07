import styled from "styled-components";

export const StyledSidebar = styled.div`
    background-color: white;
    min-width: 150px;
    width: 30%;
    padding: 2rem;
    box-shadow: 0px 3px 8px ${({theme}) => theme.colors.gray};

    @media (max-width: 1400px) {
        width: 100%;
    }
`

export const StyledSidebarTitle = styled.h2`
    font-size: 2rem;
    overflow-wrap: break-word;
    overflow:hidden;
    margin-bottom: 4rem;
    overflow: scroll;

`