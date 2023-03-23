// AddToHomeScreen.tsx
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import {
  Body1,
  FlexColumn,
  FlexRow,
} from "../src/components/DesignSystem/Library";
import CloseIcon from "@mui/icons-material/Close";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { BaseIconButton } from "../src/components/DesignSystem/Library/Buttons/BaseIconButton";

interface AddToHomeScreenProps {}

declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

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
      <FlexColumn>
        <FlexRow justifyContent={"space-between"}>
          <Body1>
            <HelpOutlineOutlinedIcon />
            Install app on iPhone
          </Body1>
          <BaseIconButton
            onClick={() => {
              setShowBanner(false);
            }}
          >
            <CloseIcon />
          </BaseIconButton>
        </FlexRow>
        <FlexRow>
          <Body1>
            <IosShareIcon /> Tap share button
          </Body1>
        </FlexRow>
        <FlexRow>
          <Body1>
            <LocalHospitalOutlinedIcon /> and then click “Add to Home Screen”
          </Body1>
        </FlexRow>
      </FlexColumn>
    </Box>
  );
};

export default AddToHomeScreen;
