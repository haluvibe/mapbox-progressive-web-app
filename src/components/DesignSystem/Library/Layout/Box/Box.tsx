import React, { forwardRef, useMemo } from "react";
import MuiBox, { BoxProps as MuiBoxProps } from "@mui/material/Box";
import { RestrictedBoxProps } from "../../types";
import { Properties } from "csstype";

export interface BoxProps extends Omit<MuiBoxProps, keyof RestrictedBoxProps> {
  overflowX?: Properties["overflowX"];
  overflowY?: Properties["overflowY"];
}
export const Box = forwardRef(
  ({ overflowX, overflowY, sx, ...props }: BoxProps, ref) => {
    const styles = useMemo(
      () => ({
        overflowX,
        overflowY,
        ...sx,
      }),
      [overflowX, overflowY, sx]
    );
    return <MuiBox ref={ref} sx={styles} {...props} />;
  }
);
