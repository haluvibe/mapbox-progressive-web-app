import React from "react";
import { Flex, FlexProps } from "../Flex";

export type FlexColumnProps = Omit<FlexProps, "flexDirection">;

export const FlexColumn = React.forwardRef(
  ({ flexWrap = "wrap", gap = 1, ...BoxProps }: FlexColumnProps, ref) => {
    return (
      <Flex
        ref={ref}
        flexDirection={"column"}
        flexWrap={flexWrap}
        gap={gap}
        {...BoxProps}
      />
    );
  }
);

FlexColumn.displayName = "FlexColumn";
