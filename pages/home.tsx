import {
  FlexColumn,
  ArrowForwardIcon,
  CheckboxIcon,
  ExternalLink,
} from "../src/components/DesignSystem/Library";
import ButtonCard from "../src/components/ButtonCard";
import WelcomeCard from "../src/components/WelcomeCard";
import FaultyVehicleIcon from "../src/components/Icons/FaultyVehicleIcon";
import { alpha, useTheme } from "@mui/material/styles";
import VehicleIcon from "../src/components/Icons/VehicleIcon";
import VehicleFleetIcon from "../src/components/Icons/VehicleFleetIcon";
import { useRouter } from "next/navigation";
import { useDevices } from "../providers/DevicesProvider";
import { useEffect } from "react";
import AppBar from "../src/components/AppBar";
import IconContainer from "../src/components/Icons/IconContainer";

export default function Home() {
  const { palette } = useTheme();
  const { stopCameraStream } = useDevices();
  const router = useRouter();

  const secondary = palette.secondary.main;
  const primaryAlpha = alpha(palette.primary.main, 0.12);
  const secondaryAlpha = alpha(secondary, 0.12);

  useEffect(() => {
    stopCameraStream();
    return () => {
      stopCameraStream();
    };
  }, []);

  return (
    <div>
      <AppBar />
      <main>
        <FlexColumn
          gap={2}
          sx={{
            width: "100vw",
            p: 3,
          }}
        >
          <WelcomeCard name={"Jerome Bell"} />
          <ButtonCard
            cursorPointer
            bgColor={primaryAlpha}
            onClick={() => router.push("/map")}
            title={"Vehicle trip planner"}
            subTitle={"Scan a registration plate of a vehicle to plan a trip"}
            startIcon={
              <IconContainer bgColor={"transparent"}>
                <CheckboxIcon color={"primary"} />
              </IconContainer>
            }
            endIcon={<ArrowForwardIcon color={"primary"} cursor={"pointer"} />}
          />
          <ButtonCard
            startIcon={
              <VehicleFleetIcon bgColor={secondaryAlpha} color={secondary} />
            }
            title={"My fleet"}
            subTitle={"Your registered vehicles and their specifications"}
          />
          <ButtonCard
            startIcon={
              <FaultyVehicleIcon bgColor={secondaryAlpha} color={secondary} />
            }
            title={"Vehicle defects"}
            subTitle={"Manage compliance for defective vehicles"}
          />
          <ButtonCard
            startIcon={
              <VehicleIcon bgColor={secondaryAlpha} color={secondary} />
            }
            title={"Performance Based Standards (PBS)"}
            subTitle={
              "Submit and track the status of your Design Approval and Vehicle Approval applications"
            }
          />
        </FlexColumn>
      </main>
    </div>
  );
}
