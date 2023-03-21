import React, { FC } from "react";
import { Box } from "@mui/material";
import {
  ContainedButton,
  Divider,
  Subtitle2,
  Body2,
  Body1,
  FlexColumn,
} from "../src/components/DesignSystem/Library";
import PrimeMoverVehicleImg from "../assets/images/prime-mover.png";
import Image from "next/image";
import Camera from "./Camera";

interface Props {
  toggleDrawers: () => void;
}

const VehicleDetails: FC<Props> = ({ toggleDrawers }: Props): JSX.Element => {
  return (
    <>
      <FlexColumn gap={2}>
        <Camera />
        <ContainedButton onClick={toggleDrawers}>Plan a trip</ContainedButton>
        <Box sx={{ my: 3 }}>
          <Divider />
        </Box>
        <Subtitle2>Vehicle details</Subtitle2>
        <FlexColumn>
          <Body2>Registration number</Body2>
          <Body1>7MAZ7</Body1>
        </FlexColumn>
        <FlexColumn>
          <Body2>State</Body2>
          <Body1>QLD</Body1>
        </FlexColumn>
        <FlexColumn>
          <Body2>Class</Body2>
          <Body1>Class 2 heavy vehicle</Body1>
        </FlexColumn>
        <FlexColumn>
          <Body2>Vehicle</Body2>
          <Body1>Prime mover</Body1>
          <Image
            style={{
              objectFit: "contain",
              width: "auto",
              height: "120px",
            }}
            src={PrimeMoverVehicleImg}
            alt={"Vehicle representing a prime mover"}
            placeholder={"blur"}
          />
        </FlexColumn>
        <FlexColumn>
          <Body2>VIN</Body2>
          <Body1>345234235235DFDF234</Body1>
        </FlexColumn>
        <FlexColumn>
          <Body2>Engine no.</Body2>
          <Body1>23423523523</Body1>
        </FlexColumn>
      </FlexColumn>
    </>
  );
};

export default VehicleDetails;
