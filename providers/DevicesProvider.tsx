import React, { useState, useContext, useCallback, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

interface DevicesProviderProps {
  children: React.ReactNode;
}

interface DevicesContextValue {
  cameraStream: MediaStream | null;
  geolocationData: GeolocationPosition | null;
  requestCameraPermission: () => Promise<void>;
  requestGeolocationPermission: () => Promise<void>;
  startCameraStream: () => Promise<void>;
  stopCameraStream: () => void;
}

const DevicesContext = React.createContext<DevicesContextValue | null>(null);

export const useDevices = () => {
  const context = useContext(DevicesContext);

  if (!context) {
    throw new Error("useDevices must be used within a DevicesProvider");
  }

  const {
    cameraStream,
    geolocationData,
    requestCameraPermission,
    requestGeolocationPermission,
    startCameraStream,
    stopCameraStream,
  } = context;

  return {
    cameraStream,
    geolocationData,
    requestCameraPermission,
    requestGeolocationPermission,
    startCameraStream,
    stopCameraStream,
  };
};

const DevicesProvider: React.FC<DevicesProviderProps> = ({ children }) => {
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  const [geolocationData, setGeolocationData] =
    useState<GeolocationPosition | null>(null);
  const [hasCameraPermission, setHasCameraPermission] =
    useState<boolean>(false);

  const requestCameraPermission = useCallback(async () => {
    if (hasCameraPermission) {
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
        },
      });
      setCameraStream(stream);
      setHasCameraPermission(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  }, [hasCameraPermission]);

  const startCameraStream = useCallback(async () => {
    if (!cameraStream) {
      if (!hasCameraPermission) {
        await requestCameraPermission();
      } else {
        // Reuse the previous cameraStream
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
          },
        });
        setCameraStream(stream);
      }
    }
  }, [cameraStream, hasCameraPermission, requestCameraPermission]);

  const stopCameraStream = useCallback(() => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraStream(null);
    }
  }, [cameraStream]);

  const requestGeolocationPermission = useCallback(async () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => setGeolocationData(position),
      (error) => console.error("Error getting location:", error)
    );
  }, []);

  const contextValue: DevicesContextValue = {
    cameraStream,
    geolocationData,
    requestCameraPermission,
    requestGeolocationPermission,
    startCameraStream,
    stopCameraStream,
  };

  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, [cameraStream]);

  return (
    <DevicesContext.Provider value={contextValue}>
      {children}
    </DevicesContext.Provider>
  );
};

export default DevicesProvider;
