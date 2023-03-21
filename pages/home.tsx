import {
  FlexColumn,
  ArrowForwardIcon,
  CheckboxIcon,
} from "../src/components/DesignSystem/Library";
import ButtonCard from "../src/components/ButtonCard";
import WelcomeCard from "../src/components/WelcomeCard";
import FaultyVehicleIcon from "../src/components/Icons/FaultyVehicleIcon";
import { alpha, useTheme } from "@mui/material/styles";
import VehicleIcon from "../src/components/Icons/VehicleIcon";
import VehicleFleetIcon from "../src/components/Icons/VehicleFleetIcon";
import AppBar from "../src/components/AppBar";

export default function Home() {
  const { palette } = useTheme();

  const secondary = palette.secondary.main;
  const secondaryAlpha = alpha(secondary, 0.04);

  return (
    <>
      <AppBar />
      <main>
        <FlexColumn
          gap={2}
          sx={{
            minHeight: "100vh",
            width: "100vw",
            p: 3,
          }}
        >
          <WelcomeCard name={"Jerome Bell"} />
          <ButtonCard
            startIcon={<VehicleFleetIcon color={secondary} />}
            title={"My fleet"}
            subTitle={"Your registered vehicles and their specifications"}
          />
          <ButtonCard
            startIcon={<FaultyVehicleIcon color={secondary} />}
            title={"Vehicle defects"}
            subTitle={"Manage compliance for defective vehicles"}
          />
          <ButtonCard
            startIcon={<VehicleIcon color={secondary} />}
            title={"Performance Based Standards (PBS)"}
            subTitle={
              "Submit and track the status of your Design Approval and Vehicle Approval applications"
            }
          />
          <ButtonCard
            bgColor={secondaryAlpha}
            title={"Vehicle trip planner"}
            subTitle={"Scan a registration plate of a vehicle to plan a trip"}
            startIcon={<CheckboxIcon color={"secondary"} />}
            endIcon={<ArrowForwardIcon color={"secondary"} />}
          />
        </FlexColumn>
      </main>
    </>
  );
}
