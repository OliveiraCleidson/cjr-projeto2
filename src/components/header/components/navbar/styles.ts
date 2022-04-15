import styled from "styled-components";

export const Container = styled.nav`
    font-weight: bold;
    color: var(--nav-links-color);
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    padding: 1rem 2.5rem;
`

export const Navlinks = styled.ul `
    display: flex;
    list-style-type: none;
    max-width: 100%;
    li:not(:first-child) {
        padding-left: 10px;
    }

    li > a, a:visited {
        text-decoration: none;
        color: var(--nav-links-color);
    }
`