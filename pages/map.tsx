import React, { FC, useState } from "react";
import {
  Drawer,
  Body1,
  ArrowBackIcon,
  FlexRow,
} from "../src/components/DesignSystem/Library";
import VehicleDetails from "../components/VehicleDetails";
import { useRouter } from "next/router";
import { useMediaQuery, useTheme } from "@mui/material";

interface Props {}

const Map: FC<Props> = ({}: Props): JSX.Element => {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));
  console.log("🚀 ~ file: map.tsx:17 ~ largeScreen:", largeScreen);
  const [isHorizontalDrawerOpen, setIsHorizontalDrawerOpen] = useState(true);
  const [isVerticalDrawerOpen, setIsVerticalDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawers = () => {
    setIsHorizontalDrawerOpen(!isHorizontalDrawerOpen);
    setIsVerticalDrawerOpen(!isVerticalDrawerOpen);
  };

  return (
    <>
      <Drawer
        open={isHorizontalDrawerOpen}
        size={largeScreen ? "medium" : "full"}
        anchor={"left"}
        header={
          <FlexRow>
            <ArrowBackIcon
              cursor={"pointer"}
              onClick={() => router.push("/")}
            />
            <Body1>Vehicle details</Body1>
          </FlexRow>
        }
      >
        <VehicleDetails toggleDrawers={toggleDrawers} />
      </Drawer>
      <Drawer
        open={isVerticalDrawerOpen}
        size={"small"}
        anchor={"bottom"}
        header={
          <FlexRow>
            <ArrowBackIcon cursor={"pointer"} onClick={toggleDrawers} />
            <Body1>Enter your trip details</Body1>
          </FlexRow>
        }
      >
        bottom drawer
      </Drawer>
      <div>hello world</div>
    </>
  );
};

export default Map;
