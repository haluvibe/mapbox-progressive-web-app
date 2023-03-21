import React, { FC } from "react";
import { Toolbar, AppBar as MuiAppBar } from "@mui/material";
import NVHRLogo from "./Icons/NVHRLogo";
import { Flex, FlexRow, MenuIcon, RouterLink } from "./DesignSystem/Library";
import { useTheme } from "@mui/material/styles";

interface Props {}

const AppBar: FC<Props> = ({}: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <MuiAppBar
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
      position={"sticky"}
    >
      <Toolbar sx={{ px: 3 }}>
        <FlexRow flexWrap={"nowrap"} width={"100%"}>
          <Flex width={"50%"}>
            <RouterLink>
              <NVHRLogo />
            </RouterLink>
          </Flex>
          <Flex width={"50%"} justifyContent={"flex-end"}>
            <MenuIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
          </Flex>
        </FlexRow>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
