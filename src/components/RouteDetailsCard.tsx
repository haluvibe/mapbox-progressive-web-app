import React, { FC } from "react";
import {
  Body1,
  Body2,
  Card,
  CardContent,
  FlexColumn,
  FlexRow,
} from "./DesignSystem/Library";
import { Box, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  name: string;
  distance: string;
  travelTime: string;
  secondary?: boolean;
}

const RouteDetailsCard: FC<Props> = ({
  name,
  distance,
  travelTime,
  secondary,
}: Props): JSX.Element => {
  const { palette } = useTheme();

  return (
    <Card bgColor={palette.background.default}>
      <CardContent padding={"SM"} spacing={"SM"}>
        <Box
          sx={(theme) => ({
            color: secondary ? palette.secondary.light : palette.primary.light,
            fontWeight: 700,
          })}
        >
          {name}
        </Box>
        <Divider />
        <FlexRow>
          <FlexColumn flexGrow={1}>
            <Body2>Distance</Body2>
            <Body1>{distance}</Body1>
          </FlexColumn>
          <FlexColumn flexGrow={1}>
            <Body2>Time to travel</Body2>
            <Body1>{travelTime}</Body1>
          </FlexColumn>
        </FlexRow>
      </CardContent>
    </Card>
  );
};

export default RouteDetailsCard;
