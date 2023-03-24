import { Box, BoxProps } from "@mui/material";
import React from "react";

export type FlexProps = Omit<BoxProps, "display" | "ref">;

export const Flex = React.forwardRef((props: FlexProps, ref) => {
  return <Box ref={ref} display={"flex"} {...props} />;
});

Flex.displayName = "Flex";
