import React, { FC } from "react";
import {
  CloseIcon,
  FlexColumn,
  Card,
  CardContent,
  FlexRow,
} from "./DesignSystem/Library";
import RouteDetailsCard from "./RouteDetailsCard";
import { Divider, Skeleton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMapContext } from "./MapContext";

interface Props {
  onCloseRoutes: () => void;
}

const RouteDetails: FC<Props> = ({ onCloseRoutes }: Props): JSX.Element => {
  const { palette } = useTheme();
  const mapContext = useMapContext();

  return (
    <FlexColumn gap={2} justifyContent={"center"}>
      <CloseIcon cursor={"pointer"} onClick={onCloseRoutes} />
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
        {!mapContext?.isLoading &&
          mapContext?.routeDetails.map((route, index) => {
            const routeIndex = index + 1;
            const distance = (route.routes[0].distance * 0.001).toFixed(1);
            const duration = Math.round(route.routes[0].duration / 60);

            return (
              <RouteDetailsCard
                key={routeIndex}
                name={`Route ${routeIndex}`}
                distance={`${distance} km`}
                travelTime={`${duration} mins`}
                secondary={routeIndex % 2 === 0}
              />
            );
          })}
      </>
    </FlexColumn>
  );
};

export default RouteDetails;
