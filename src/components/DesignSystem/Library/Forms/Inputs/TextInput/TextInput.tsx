import React, { ForwardedRef, forwardRef } from "react";
import { BaseInput, BaseInputProps } from "../BaseInput";

export type TextInputProps = Omit<
  BaseInputProps,
  "multiline" | "rows" | "maxRows" | "minRows" | "type"
>;

export const TextInput = forwardRef(
  (props: TextInputProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <BaseInput ref={ref} type={"text"} {...props} />;
  }
);

TextInput.displayName = "TextInput";
