import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`



html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

:root {
    --nav-links-color: #fff;
    --button-hover-color: #878584;
    --backoffice-menu-bg: #343a40;
    --table-head-bg: #e9ecef;
    --nav-link-hover-color: #f79800;
    --footer-color: #e3e3e3;
    --dark-layer: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6));
    --edit-button-color: #ffa207;
    --delete-button-color: #dc3545;
    --pagination-active-bg: #007bff;
    }

body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
`;
 
export default GlobalStyle;