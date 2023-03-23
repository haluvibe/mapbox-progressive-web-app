// pages/request-camera-permission.tsx
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

const RequestCameraPermission: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { requestCameraPermission, stopCameraStream } = useDevices();

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
        p: 3,
      }}
    >
      <Image
        src="/images/camera-illustrations.png"
        alt="camera"
        width="200"
        height="200"
      />
      <Heading5>Camera</Heading5>
      <Body1 color={"text.secondary"}>
        NHVR App would like to use camera service to take pictures
      </Body1>
      <Box>
        <ContainedButton
          onClick={async () => {
            setIsLoading(true);
            await requestCameraPermission();
            stopCameraStream();
            router.push("/geolocation");
          }}
          disabled={isLoading}
        >
          Allow
        </ContainedButton>
      </Box>
    </Box>
  );
};

export default RequestCameraPermission;
