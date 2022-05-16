import * as React from "react";
// import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import { App } from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";

// const container = document.getElementById("root");
//
// const root = createRoot(container);
//
// root.render(
//     <ThemeProvider theme={Theme}>
//         <CssBaseline>
//             <App userName={"json"} lang={"english"} />
//         </CssBaseline>
//     </ThemeProvider>
// );
render(
  <ThemeProvider theme={Theme}>
    <CssBaseline>
      <App userName={"json"} lang={"english"} />
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById("root")
);
