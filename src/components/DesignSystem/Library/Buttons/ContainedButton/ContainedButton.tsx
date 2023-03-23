import React from "react";
import { BaseButton, BaseButtonProps } from "../BaseButton";

export type ContainedButtonProps = Omit<BaseButtonProps, "variant">;

export const ContainedButton = (props: ContainedButtonProps) => {
  return <BaseButton variant={"contained"} {...props} />;
};

ContainedButton.displayName = "ContainedButton";
