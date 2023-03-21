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
  extends Omit<MuiDrawerProps, RestrictedVisualProps> {
  size?: "small" | "medium" | "large" | "full";
  header?: ReactElement;
  footer?: ReactElement;
}

const drawerDimensionMap = {
  small: { width: 448, height: "100vh", headerHeight: 80, footerHeight: 68 },
  medium: { width: 640, height: "100vh", headerHeight: 80, footerHeight: 68 },
  large: { width: 896, height: "100vh", headerHeight: 80, footerHeight: 68 },
  full: { width: "100vw", height: "100vh", headerHeight: 80, footerHeight: 68 },
};

const topDownDimensions = {
  width: "100vw",
  height: "auto",
  headerHeight: 0,
  footerHeight: 0,
};

export const Drawer = ({
  anchor,
  header,
  footer,
  children,
  size = "medium",
  ...props
}: DrawerProps) => {
  console.log("🚀 ~ file: Drawer.tsx:35 ~ size:", size);
  const { palette } = useTheme();

  const { dimensions, border, p } = useMemo(
    () => ({
      p: 2,
      border: `1px solid ${palette.divider}`,
      dimensions:
        anchor === "top" || anchor === "bottom"
          ? topDownDimensions
          : drawerDimensionMap[size],
    }),
    [palette.divider, size]
  );

  return (
    <MuiDrawer anchor={anchor} {...props}>
      <FlexColumn
        role={"presentation"}
        flexWrap={"nowrap"}
        gap={0}
        sx={{
          width: dimensions.width,
          height: dimensions.height,
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
