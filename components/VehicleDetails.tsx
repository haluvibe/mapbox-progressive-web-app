import React, { FC, useEffect, useState } from "react";
import { Box, Skeleton } from "@mui/material";
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
import { usePhoto } from "../providers/PhotoProvider";

interface Props {
  toggleDrawers: () => void;
}

const VehicleDetails: FC<Props> = ({ toggleDrawers }: Props): JSX.Element => {
  const { photo, isLoading, hasLoaded } = usePhoto();

  return (
    <>
      <FlexColumn gap={2}>
        <Camera />
        {photo && (
          <>
            <ContainedButton onClick={toggleDrawers} disabled={isLoading}>
              Plan a trip
            </ContainedButton>
            <Box sx={{ my: 3 }}>
              <Divider />
            </Box>
            <Subtitle2>Vehicle details</Subtitle2>
          </>
        )}

        {photo && isLoading && (
          <FlexColumn>
            <FlexColumn>
              <Skeleton variant="rectangular" width={210} height={20} />
              <Skeleton variant="rectangular" width={210} height={20} />
            </FlexColumn>
            <FlexColumn>
              <Skeleton variant="rectangular" width={50} height={20} />
              <Skeleton variant="rectangular" width={50} height={20} />
            </FlexColumn>
            <FlexColumn>
              <Skeleton variant="rectangular" width={130} height={20} />
              <Skeleton variant="rectangular" width={130} height={20} />
            </FlexColumn>
            <FlexColumn>
              <Skeleton variant="rectangular" width={210} height={20} />
              <Skeleton variant="rectangular" width={210} height={20} />
              <Skeleton variant="rectangular" width={"100%"} height={120} />
            </FlexColumn>
            <FlexColumn>
              <Skeleton variant="rectangular" width={50} height={20} />
              <Skeleton variant="rectangular" width={50} height={20} />
            </FlexColumn>
            <FlexColumn>
              <Skeleton variant="rectangular" width={130} height={20} />
              <Skeleton variant="rectangular" width={130} height={20} />
            </FlexColumn>
          </FlexColumn>
        )}
        {photo && hasLoaded && (
          <>
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
          </>
        )}
      </FlexColumn>
    </>
  );
};

export default VehicleDetails;
