import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import {
  Body1,
  FlexRow,
  OutlinedButton,
} from "../src/components/DesignSystem/Library";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const UpdatePWA: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const checkForUpdates = async () => {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration && registration.waiting) {
        setShowBanner(true);
      }
    };
    checkForUpdates();

    const onUpdate = () => {
      setShowBanner(true);
    };
    navigator.serviceWorker.addEventListener("controllerchange", onUpdate);

    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    const isStandalone = window.navigator.standalone;
    setIsInstalled(!!(mediaQuery?.matches || isStandalone));

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", onUpdate);
    };
  }, []);

  const handleUpdate = async () => {
    const registration = await navigator.serviceWorker.getRegistration();
    registration?.waiting?.postMessage({ type: "SKIP_WAITING" });
    window.location.reload();
  };

  return isInstalled && showBanner ? (
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
      <FlexRow justifyContent={"space-between"} alignItems={"center"}>
        <FlexRow justifyContent={"flex-start"} alignItems={"center"}>
          <HelpOutlineOutlinedIcon />
          <Body1>A new version of the app is available.</Body1>
        </FlexRow>
        <FlexRow justifyContent={"flex-end"} alignItems={"center"}>
          <OutlinedButton color="inherit" size="small" onClick={handleUpdate}>
            Update
          </OutlinedButton>
          <IconButton
            sx={{ color: "white" }}
            onClick={() => {
              setShowBanner(false);
            }}
          >
            <CloseIcon color={"inherit"} />
          </IconButton>
        </FlexRow>
      </FlexRow>
    </Box>
  ) : null;
};

export default UpdatePWA;
