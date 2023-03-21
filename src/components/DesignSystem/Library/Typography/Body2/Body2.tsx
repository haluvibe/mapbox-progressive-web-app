import React from "react";
import { BaseTypography, BaseTypographyProps } from "../BaseTypography";

export type Body2Props = Omit<BaseTypographyProps, "variant">;
export const Body2 = (props: Body2Props) => (
  <BaseTypography {...props} variant={"body2"} color={"text.primary"} />
);
