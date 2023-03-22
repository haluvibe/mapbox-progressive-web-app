// AddToHomeScreen.tsx
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

interface AddToHomeScreenProps {}

const AddToHomeScreen: React.FC<AddToHomeScreenProps> = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    function isIos() {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    }

    function isInStandaloneMode() {
      return "standalone" in window.navigator && window.navigator.standalone;
    }

    if (isIos() && !isInStandaloneMode()) {
      setShowBanner(true);
    }
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
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
      To install this app on your iPhone, tap the Share button and then "Add to
      Home Screen."
    </Box>
  );
};

export default AddToHomeScreen;
