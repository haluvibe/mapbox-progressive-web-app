import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import {
  ContainedButton,
  Drawer,
  Divider,
  Subtitle2,
  Body2,
  Body1,
  FlexColumn,
  ArrowBackIcon,
  FlexRow,
} from "../src/components/DesignSystem/Library";
import PrimeMoverVehicleImg from "../assets/images/prime-mover.png";
import Image from "next/image";

interface Props {}

const VehicleDetailsSandbox: FC<Props> = ({}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Drawer
        open={isOpen}
        size={"full"}
        anchor={"left"}
        header={
          <FlexRow>
            <ArrowBackIcon
              cursor={"pointer"}
              onClick={() => setIsOpen(false)}
            />
            <Body1>Vehicle details</Body1>
          </FlexRow>
        }
      >
        <FlexColumn gap={2}>
          <Box sx={{ backgroundColor: "black", height: "150px" }} />
          <ContainedButton>Plan a trip</ContainedButton>
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
                width: "100%",
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
      </Drawer>
    </>
  );
};

export default VehicleDetailsSandbox;
