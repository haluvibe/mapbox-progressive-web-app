import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";

const UpdatePWA: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    const checkForUpdates = async () => {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration && registration.waiting) {
        setShowSnackbar(true);
      }
    };
    checkForUpdates();

    const onUpdate = () => {
      setShowSnackbar(true);
    };
    navigator.serviceWorker.addEventListener("controllerchange", onUpdate);

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", onUpdate);
    };
  }, []);

  const handleUpdate = async () => {
    const registration = await navigator.serviceWorker.getRegistration();
    registration?.waiting?.postMessage({ type: "SKIP_WAITING" });
    window.location.reload();
  };

  return showSnackbar ? (
    <Box
      sx={{
        display: "block",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 2,
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
        zIndex: "tooltip",
      }}
    >
      A new version of the app is available.{" "}
      <Button color="inherit" size="small" onClick={handleUpdate}>
        Update
      </Button>
    </Box>
  ) : null;
};

export default UpdatePWA;
