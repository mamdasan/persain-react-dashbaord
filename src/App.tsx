import * as React from "react";
import { Container, Drawer } from "@mui/material";

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => {
  return (
    <Container>
      <Drawer />
      {props.lang} go ds as sadsad sad saf sdaf asdfasd
      {props.userName}
    </Container>
  );
};
