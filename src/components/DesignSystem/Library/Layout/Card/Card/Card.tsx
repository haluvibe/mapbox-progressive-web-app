import React from "react";
import { Card as MuiCard, CardProps as MuiCardProps } from "@mui/material";
import { RestrictedVisualProps } from "../../../types";

export type CardProps = Omit<
  MuiCardProps,
  "variant" | RestrictedVisualProps
> & {
  bgColor?: string;
};

export const Card = ({ bgColor, ...props }: CardProps) => {
  return (
    <MuiCard
      sx={{ backgroundColor: bgColor }}
      variant={"outlined"}
      {...props}
    />
  );
};

Card.displayName = "Card";
