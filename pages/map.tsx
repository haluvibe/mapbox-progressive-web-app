import React, { FC, useState } from "react";
import {
  Drawer,
  Body1,
  ArrowBackIcon,
  FlexRow,
  FlexColumn,
  CloseIcon,
  TextInput,
  ContainedButton,
} from "../src/components/DesignSystem/Library";
import VehicleDetails from "../components/VehicleDetails";
import { useRouter } from "next/router";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import RouteDetailsCard from "../src/components/RouteDetailsCard";
import MapboxMap from "../src/components/MapboxMap";
import TripDetails from "../src/components/TripDetails";
import RouteDetails from "../src/components/RouteDetails";
import { routeData } from "../src/data/routeData";
import { useMapContext } from "../src/components/MapContext";

interface Props {}

const Map: FC<Props> = ({}: Props): JSX.Element => {
  const mapContext = useMapContext();

  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));
  console.log("🚀 ~ file: map.tsx:17 ~ largeScreen:", largeScreen);
  const [isVehicleDetailsDrawerOpen, setIsVehicleDetailsOpen] = useState(true);
  const [isRouteDetailsOpen, setIsRouteDetailsOpen] = useState(false);
  const [isTripDetailsOpen, setIsTripDetailsOpen] = useState(false);
  const router = useRouter();

  const onVehicleDetailsBack = () => {
    router.push("/home");
  };

  const onPlanTrip = () => {
    setIsVehicleDetailsOpen(false);
    setIsTripDetailsOpen(true);
  };

  const onTripDetailsBack = () => {
    setIsVehicleDetailsOpen(true);
    setIsTripDetailsOpen(false);
  };

  const onShowRoutes = () => {
    mapContext?.addRoutes(routeData as any);
    setIsTripDetailsOpen(false);
    setIsRouteDetailsOpen(true);
  };

  const onCloseRoutes = () => {
    mapContext?.clearRoutes();
    setIsTripDetailsOpen(true);
    setIsRouteDetailsOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <MapboxMap />
      <Drawer
        open={isVehicleDetailsDrawerOpen}
        size={largeScreen ? "medium" : "full"}
        anchor={"left"}
        header={
          <FlexRow>
            <ArrowBackIcon cursor={"pointer"} onClick={onVehicleDetailsBack} />
            <Body1>Vehicle details</Body1>
          </FlexRow>
        }
      >
        <VehicleDetails onPlanTrip={onPlanTrip} />
      </Drawer>
      <Drawer open={isTripDetailsOpen} anchor={"bottom"}>
        <TripDetails
          onTripDetailsBack={onTripDetailsBack}
          onShowRoutes={onShowRoutes}
        />
      </Drawer>
      <Drawer
        variant={"persistent"}
        open={isRouteDetailsOpen}
        anchor={"bottom"}
      >
        <RouteDetails onCloseRoutes={onCloseRoutes} />
      </Drawer>
    </Box>
  );
};

export default Map;
