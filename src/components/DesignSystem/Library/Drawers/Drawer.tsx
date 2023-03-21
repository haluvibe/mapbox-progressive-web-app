import React, { ReactElement, useMemo } from "react";
import { RestrictedVisualProps } from "../types";
import {
  Box,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from "@mui/material";
import { FlexColumn } from "../Layout/FlexColumn";
import { useTheme } from "@mui/material/styles";
import { Flex } from "../Layout/Flex";

export interface DrawerProps
  extends Omit<MuiDrawerProps, RestrictedVisualProps | "anchor"> {
  size: "small" | "medium" | "large" | "full";
  anchor: Omit<MuiDrawerProps["anchor"], "top" | "bottom">;
  header?: ReactElement;
  footer?: ReactElement;
}

const drawerDimensionMap = {
  small: { width: 448, headerHeight: 80, footerHeight: 68 },
  medium: { width: 640, headerHeight: 80, footerHeight: 68 },
  large: { width: 896, headerHeight: 80, footerHeight: 68 },
  full: { width: "100vw", headerHeight: 80, footerHeight: 68 },
};

export const Drawer = ({
  size,
  anchor,
  header,
  footer,
  children,
  ...props
}: DrawerProps) => {
  const { palette } = useTheme();

  const { dimensions, border, p } = useMemo(
    () => ({
      p: 2,
      border: `1px solid ${palette.divider}`,
      dimensions: drawerDimensionMap[size],
    }),
    [palette.divider, size]
  );

  return (
    <MuiDrawer {...props}>
      <FlexColumn
        role={"presentation"}
        flexWrap={"nowrap"}
        gap={0}
        sx={{
          width: dimensions.width,
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        {header && (
          <Flex
            alignItems={"center"}
            sx={{
              height: dimensions.headerHeight,
              flexShrink: 0,
              borderBottom: border,
              p,
            }}
          >
            {header}
          </Flex>
        )}
        <Box
          sx={{
            overflowY: "auto",
            height: "100%",
            p,
          }}
        >
          {children}
        </Box>
        {footer && (
          <Flex
            sx={{
              width: "100%",
              height: dimensions.footerHeight,
              flexShrink: 0,
              boxSizing: "border-box",
              alignItems: "center",
              borderTop: border,
              p,
            }}
          >
            {footer}
          </Flex>
        )}
      </FlexColumn>
    </MuiDrawer>
  );
};

Drawer.displayName = "Drawer";
