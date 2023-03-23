import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import { Body1, FlexRow } from "../src/components/DesignSystem/Library";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { BaseIconButton } from "../src/components/DesignSystem/Library/Buttons/BaseIconButton";

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
        display: "flex",
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
      <FlexRow justifyContent={"space-between"}>
        <Body1>
          <HelpOutlineOutlinedIcon />A new version of the app is available.
        </Body1>
        <BaseIconButton
          onClick={() => {
            setShowBanner(false);
          }}
        >
          <CloseIcon />
        </BaseIconButton>
      </FlexRow>{" "}
      <Button color="inherit" size="small" onClick={handleUpdate} fullWidth>
        Update
      </Button>
    </Box>
  ) : null;
};

export default UpdatePWA;
