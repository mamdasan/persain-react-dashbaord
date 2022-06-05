import * as React from "react";
import { Container } from "@mui/material";
import { PRDDrawer } from "./component/PRDDrawer";

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => {
  console.log("process.env.API_ROOT");
  return (
    <Container>
      <PRDDrawer
        options={[
          {
            text: "hi",
            url: "hiUrl",
          },
          {
            text: "hi2",
            url: "hiUrl2",
          },
        ]}
      />
    </Container>
  );
};
