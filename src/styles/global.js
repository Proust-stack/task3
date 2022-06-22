import { createGlobalStyle } from 'styled-components';

import TrebuchetMS_Regular from "../assets/fonts/Trebuchet MS_Regular.ttf";
import TrebuchetMS_Bold from "../assets/fonts/Trebuchet MS_Bold.ttf";
import Exo_ExtraLight from "../assets/fonts/exo2_0_extralight.otf";

export default createGlobalStyle`

@font-face {
    font-family: "Trebuchet MS";
    src: url(${TrebuchetMS_Regular}) format('truetype');
    font-weight: 400;
}
@font-face {
    font-family: "Trebuchet MS";
    src: url(${TrebuchetMS_Bold}) format('truetype');
    font-weight: 700;
}
@font-face {
    font-family: "Exo2.0";
    src: url(${Exo_ExtraLight}) format('opentype');
    font-weight: 250;
}

  html {
    font-size: 10px;
  }
  body {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-family: 'Trebuchet MS', 'Exo2.0', 'Raleway', sans-serif;
  color: #1D1F22;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ::-webkit-scrollbar {
  width: 0;
  line-height: 122%;
  }
}

* {
  box-sizing: border-box;
}
`;
