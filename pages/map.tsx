import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import {
  Drawer,
  Body1,
  ArrowBackIcon,
  FlexRow,
  CloseIcon,
} from "../src/components/DesignSystem/Library";
import VehicleDetails from "../components/VehicleDetails";
import { useRouter } from "next/router";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MapboxMap from "../src/components/MapboxMap";
import TripDetails from "../src/components/TripDetails";
import RouteDetails from "../src/components/RouteDetails";
import { useMapContext } from "../src/components/MapContext";
import { usePhoto } from "../providers/PhotoProvider";

interface Props {}

const Map: FC<Props> = ({}: Props): JSX.Element => {
  const mapContext = useMapContext();
  const photoContext = usePhoto();

  const refVehicleDrawer = useRef<HTMLDivElement>(null);
  const refTripDrawer = useRef<HTMLDivElement>(null);
  const refRouteDrawer = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));
  console.log("🚀 ~ file: map.tsx:17 ~ largeScreen:", largeScreen);
  const [isVehicleDetailsOpen, setIsVehicleDetailsOpen] = useState(true);
  const [isRouteDetailsOpen, setIsRouteDetailsOpen] = useState(false);
  const [isTripDetailsOpen, setIsTripDetailsOpen] = useState(false);
  const [routeDrawerHeight, setRouteDrawerHeight] = useState(0);
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

  const onShowRoutes = async () => {
    setIsTripDetailsOpen(false);
    setIsRouteDetailsOpen(true);
    mapContext?.showRoutes();
  };

  const onCloseRoutes = () => {
    setIsTripDetailsOpen(true);
    mapContext?.clearRoutes();
    setIsRouteDetailsOpen(false);
  };

  useEffect(() => {
    if (!refRouteDrawer.current) {
      return;
    }

    const observer = new ResizeObserver((entry) =>
      setRouteDrawerHeight(entry[entry.length - 1].contentRect.height)
    );
    observer.observe(refRouteDrawer.current);

    return () => {
      observer.disconnect();
    };
  }, [refRouteDrawer.current]);

  const { paddingLeft, paddingBottom } = useMemo(
    () => ({
      paddingLeft:
        (largeScreen && isVehicleDetailsOpen
          ? refVehicleDrawer.current?.getBoundingClientRect().width
          : 0) ?? 0,
      paddingBottom:
        (isTripDetailsOpen
          ? refTripDrawer.current?.getBoundingClientRect().height
          : routeDrawerHeight) ?? 0,
    }),
    [isVehicleDetailsOpen, isTripDetailsOpen, routeDrawerHeight]
  );

  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <MapboxMap paddingBottom={paddingBottom} paddingLeft={paddingLeft} />
      <Drawer
        ref={refVehicleDrawer}
        variant={"persistent"}
        open={isVehicleDetailsOpen}
        size={largeScreen ? "medium" : "full"}
        anchor={"left"}
        header={
          <FlexRow>
            <ArrowBackIcon cursor={"pointer"} onClick={onVehicleDetailsBack} />
            <Body1>Vehicle details</Body1>
            <Box
              sx={{
                height: "24px",
                width: "24px",
                ":hover": {
                  backgroundColor: "rgba(0,0,0,0.1)",
                },
              }}
              onClick={photoContext.loadMockData}
            />
          </FlexRow>
        }
      >
        <VehicleDetails onPlanTrip={onPlanTrip} />
      </Drawer>
      <Drawer
        ref={refTripDrawer}
        variant={"persistent"}
        open={isTripDetailsOpen}
        anchor={"bottom"}
        header={
          <FlexRow>
            <ArrowBackIcon onClick={onTripDetailsBack} cursor={"pointer"} />
            <Box
              sx={{
                height: "24px",
                width: "24px",
                ":hover": {
                  backgroundColor: "rgba(0,0,0,0.1)",
                },
              }}
              onClick={mapContext?.loadMockAddresses}
            />
          </FlexRow>
        }
      >
        <TripDetails onShowRoutes={onShowRoutes} />
      </Drawer>
      <Drawer
        ref={refRouteDrawer}
        variant={"persistent"}
        open={isRouteDetailsOpen}
        anchor={"bottom"}
        header={<CloseIcon cursor={"pointer"} onClick={onCloseRoutes} />}
      >
        <RouteDetails />
      </Drawer>
    </Box>
  );
};

export default Map;
