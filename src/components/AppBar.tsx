import React, { FC } from "react";
import { Toolbar, AppBar as MuiAppBar } from "@mui/material";
import NVHRLogo from "./Icons/NVHRLogo";
import {
  Body1,
  Flex,
  FlexRow,
  MenuIcon,
  RouterLink,
} from "./DesignSystem/Library";
import { useTheme } from "@mui/material/styles";

interface Props {}

const AppBar: FC<Props> = ({}: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <MuiAppBar
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
      elevation={1}
      position={"sticky"}
    >
      <Toolbar sx={{ p: 3 }}>
        <FlexRow flexWrap={"nowrap"} width={"100%"} justifyContent={"center"}>
          <Flex width={"50%"}>
            <RouterLink>
              <NVHRLogo />
            </RouterLink>
            <Body1>version 0.01</Body1>
          </Flex>
          <Flex width={"50%"} justifyContent={"flex-end"} alignItems={"center"}>
            <MenuIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
          </Flex>
        </FlexRow>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
