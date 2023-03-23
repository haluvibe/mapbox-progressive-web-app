import React, { FC } from "react";
import {
  FlexColumn,
  Card,
  CardContent,
  FlexRow,
  Box,
} from "./DesignSystem/Library";
import RouteDetailsCard from "./RouteDetailsCard";
import { Divider, Skeleton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMapContext } from "./MapContext";

interface Props {}

const RouteDetails: FC<Props> = ({}: Props): JSX.Element => {
  const { palette } = useTheme();
  const mapContext = useMapContext();

  return (
    <FlexColumn gap={2} flexWrap={"nowrap"} sx={{ maxHeight: "45vh" }}>
      <>
        {mapContext?.isLoading && (
          <Card bgColor={palette.background.default}>
            <CardContent padding={"SM"} spacing={"SM"}>
              <Skeleton width={175} height={22} />
              <Divider />
              <FlexRow>
                <FlexColumn flexGrow={1}>
                  <Skeleton width={100} height={22} />
                  <Skeleton width={75} height={22} />
                </FlexColumn>
                <FlexColumn flexGrow={1}>
                  <Skeleton width={100} height={22} />
                  <Skeleton width={75} height={22} />
                </FlexColumn>
              </FlexRow>
            </CardContent>
          </Card>
        )}
        {!mapContext?.isLoading && mapContext?.routeData && (
          <Box key={mapContext.routeData.id} sx={{ flexShrink: 0 }}>
            <RouteDetailsCard
              name={`Route 1`}
              distance={`${mapContext.routeData.totalDistance} km`}
              travelTime={`${mapContext.routeData.totalTime} mins`}
            />
          </Box>
        )}
      </>
    </FlexColumn>
  );
};

export default RouteDetails;
