import React, { ForwardedRef, forwardRef, RefObject } from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { FormControl } from "../FormControl";
import { RestrictedVisualProps } from "../../../types";
import { UseGridItemStyles, useGridItemStyles } from "../../../";

export type BaseInputProps = UseGridItemStyles &
  Omit<
    MuiTextFieldProps,
    | "variant"
    | "children"
    | "margin"
    | "color"
    | "size"
    | "fullWidth"
    | "select"
    | "SelectProps"
    | "defaultValue"
    | RestrictedVisualProps
  >;

export const BaseInput = forwardRef(
  ({ span, ...props }: BaseInputProps, ref: ForwardedRef<HTMLDivElement>) => {
    const sx = useGridItemStyles(span);
    return (
      <>
        <FormControl sx={sx}>
          <MuiTextField inputRef={ref} {...props} fullWidth />
        </FormControl>
      </>
    );
  }
);

BaseInput.displayName = "BaseInput";
