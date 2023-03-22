// pages/request-Geolocation-permission.tsx
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  Body1,
  Box,
  ContainedButton,
  Heading5,
} from "../src/components/DesignSystem/Library";
import { useDevices } from "../providers/DevicesProvider";
import { useRouter } from "next/router";
import Image from "next/image";

const RequestGeolocationPermission: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { requestGeolocationPermission, geolocationData, stopCameraStream } =
    useDevices();

  useEffect(() => {
    if (geolocationData) {
      router.push("/home");
    }
  }, [geolocationData]);

  useEffect(() => {
    stopCameraStream();
    return () => {
      stopCameraStream();
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Image
        src="/images/location-illustrations.png"
        alt="camera"
        width="200"
        height="200"
      />
      <Heading5>Geolocation</Heading5>
      <Body1 color={"text.secondary"}>
        NHVR App would like to use location service to use in maps
      </Body1>
      <Box>
        <ContainedButton
          onClick={async () => {
            setIsLoading(true);
            await requestGeolocationPermission();
          }}
          disabled={isLoading}
        >
          Allow
        </ContainedButton>
      </Box>
    </Box>
  );
};

export default RequestGeolocationPermission;
