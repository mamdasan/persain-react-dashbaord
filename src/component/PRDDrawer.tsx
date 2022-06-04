import * as React from "react";
import { Drawer, Container } from "@mui/material";
import { useState } from "react";

interface Options {
  text: string;
  url: string;
}

export interface DrawerProps {
  options: Options[];
}

export const PRDDrawer = (props: DrawerProps) => {
  const [open, setOpen] = useState(false);

  const optionsRender = [];
  for (const option of props.options) {
    optionsRender.push(
      <Container>
        text: {option.text}
        url: {option.url}
      </Container>
    );
  }

  return <Drawer anchor={"right"} variant={"permanent"} open={open}>
    {optionsRender}
  </Drawer>;
};
