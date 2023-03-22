import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  bgColor: string;
  children: ReactNode;
}

const IconContainer: FC<Props> = ({
  bgColor,
  children,
}: Props): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        backgroundColor: bgColor,
        borderRadius: "50%",
        p: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default IconContainer;
