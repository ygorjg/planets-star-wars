import { createGlobalStyle } from "styled-components";
import backgroundImage from "../../src/assets/backgroundImage/glowing-spaceship-orbits.png";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
`;

export default GlobalStyles;
