// pages/request-Geolocation-permission.tsx
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Box, ContainedButton } from "../src/components/DesignSystem/Library";
import { useDevices } from "../providers/DevicesProvider";
import { useRouter } from "next/router";

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
      <h1>Request Geolocation Permission</h1>
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
