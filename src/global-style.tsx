import styled, { createGlobalStyle, css } from "styled-components";
import normalizeCss from "!raw-loader!normalize.css";
import RobotoRegular from "./assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "./assets/fonts/Roboto-Bold.ttf";

export const Layout = styled.div`
  padding: 5rem 20rem;
`;

export enum Colors {
  background = "#D3D3D3",
  brandBlue = "#1A66B0",
  lightGrey = "#999999",
  brandLight1 = "#4069a8",
  brandLight2 = "#809bc5",
  brandLight3 = "#c6e4f2",
  brandLight4 = "#deedf7",
  brandSecondary = "#4F0066",
  lightPink = "#B99AA6",
  brandBorder = "#cce4f3",
  error = "#ea1313",
  errorLight = "#fff6f6",
  inactive = "#8d9093",
  inactiveLight = "#f9f9f9",
  success = "#00c878",
  warning = "#ffbe1e",
  brandGreen = "#5DAB63",
  lightPantoneGreen = "rgb(154 185 173)",
  brandOrange = "#FD823E",
  darkGrey = "#414141",
  veryLightGreen = "#F4F6EA",
  veryLightPurple = "#D3BFE4",
}

export const flyoutStyles = css`
  background-color: #fff;
  border-radius: 0.4rem;
  box-shadow: 0 0.3rem 0.6rem #00378b33;
  background-clip: padding-box;
`;

export enum Breakpoints {
  minTablet = "min-width: 768px",
  minDesktop = "min-width: 992px",
  minWideDesktop = "min-width: 1200px",
}

// from https://dev.to/hankchizljaw/a-modern-css-reset-6p3
const modernReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class]:not(.sbdocs),
  ol[class]:not(.sbdocs) {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class]:not(.sbdocs),
  ol[class]:not(.sbdocs),
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  ul[class]:not(.sbdocs),
  ol[class]:not(.sbdocs) {
    list-style: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalizeCss};
  ${modernReset};

  @font-face {
    font-family: Roboto Regular; 
    font-style: normal;
    font-weight: 900;
    src: url(${RobotoRegular});
  }

  @font-face {
    font-family: Roboto Bold; 
    font-style: normal;
    font-weight: 900;
    src: url(${RobotoBold});
  }
 
  html {
    font-family: Roboto Regular;
    font-size: 62.5%;
    line-height: 1.42857143;
    color: ${Colors.lightGrey};
    @media (${Breakpoints.minTablet}) {
      width: 100vw;
      overflow-x: hidden;
    }
  }

  h1 {
    font-family: Roboto Bold;
    color: black;
  }

  body {
    /* background-color: ${Colors.veryLightGreen}; */
    font-size: 1.5rem;
  }

`;
