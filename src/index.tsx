import * as React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./global-style";
import { Routes } from "./routes";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Routes />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
