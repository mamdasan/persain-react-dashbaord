import * as React from "react";
import { Container } from "@mui/material";

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => {
  return <Container>{props.lang}</Container>;
};
