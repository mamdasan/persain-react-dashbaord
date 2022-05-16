import * as React from "react";
import { render } from "react-dom";
import { App } from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";

render(
  <ThemeProvider theme={Theme}>
    <CssBaseline>
      <App userName={"thomas"} lang={"english"} />
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById("root")
);
