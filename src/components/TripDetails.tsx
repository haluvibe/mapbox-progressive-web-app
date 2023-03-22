import React, { FC } from "react";
import {
  ArrowBackIcon,
  ContainedButton,
  FlexColumn,
  TextInput,
} from "./DesignSystem/Library";
import { Box } from "@mui/material";

interface Props {
  onShowRoutes: () => void;
  onTripDetailsBack: () => void;
}

const TripDetails: FC<Props> = ({
  onTripDetailsBack,
  onShowRoutes,
}: Props): JSX.Element => {
  return (
    <FlexColumn gap={2} justifyContent={"center"} height={"100%"}>
      <ArrowBackIcon onClick={onTripDetailsBack} cursor={"pointer"} />
      <Box fontWeight={700}>Enter your trip details</Box>
      <TextInput label={"Enter source address"} />
      <TextInput label={"Enter destination address"} />
      <ContainedButton onClick={onShowRoutes}>Show routes</ContainedButton>
    </FlexColumn>
  );
};

export default TripDetails;
