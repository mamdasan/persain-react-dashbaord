import * as React from "react";
import { Drawer, Container } from "@mui/material";

interface Options {
  text: string;
  url: string;
}

export interface DrawerProps {
  options: Options[];
}

export const PRDDrawer = (props: DrawerProps) => {

  const optionsRender = [];
  for (const option of props.options) {
    optionsRender.push(
      <Container>
        text: {option.text}
        url: {option.url}
      </Container>
    );
  }

  return (
    <Container>
      <Drawer />
      {optionsRender}
    </Container>
  );
};
