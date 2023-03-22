import React, { FC } from "react";
import { Card, CardContent, ExternalLink } from "./DesignSystem/Library";
import { Box } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

interface Props {
  name: string;
}

const WelcomeCard: FC<Props> = ({ name }: Props): JSX.Element => {
  return (
    <Box py={3}>
      <Box
        sx={{
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "24px",
          letterSpacing: "-0.15px",
          mb: 1,
        }}
      >
        Hello, {name} 👋
      </Box>
      <Box
        sx={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "0.15px",
          color: "rgba(0, 0, 0, 0.6)",
        }}
      >
        Welcome to the National Heavy Vehicle Regulator portal.{" "}
        <ExternalLink>Learn More</ExternalLink>
      </Box>
    </Box>
  );
};

export default WelcomeCard;
