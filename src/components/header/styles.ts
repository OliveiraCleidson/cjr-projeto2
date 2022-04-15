import styled from "styled-components";

export const Container = styled.header`
    max-width: 100vw;
    background: var(--dark-layer), url(/assets/banner-img.jpg);
    background-size: cover;
    color: var(--nav-links-color);

  > *{
    padding: 0rem 2.5rem;
  }
  
  .banner {
    display: flex;
    flex-direction: column;
    height: 15rem;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  .menu {
    background: var(--backoffice-menu-bg);
    line-height: 3rem;
    font-size: 0.9rem;
  }

  .menu ul{
    display: flex;
    list-style-type: none;
  }

  .menu ul li {
    margin-right: 2rem;
  }
`