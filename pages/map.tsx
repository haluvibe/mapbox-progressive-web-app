import React, { FC, useState } from "react";
import {
  Drawer,
  Body1,
  ArrowBackIcon,
  FlexRow,
} from "../src/components/DesignSystem/Library";
import VehicleDetails from "../components/VehicleDetails";
import { useRouter } from "next/router";

interface Props {}

const Map: FC<Props> = ({}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  return (
    <>
      <Drawer
        open={isOpen}
        size={"medium"}
        anchor={"left"}
        header={
          <FlexRow>
            <ArrowBackIcon
              cursor={"pointer"}
              onClick={() => router.push("/")}
            />
            <Body1>Vehicle details</Body1>
          </FlexRow>
        }
      >
        <VehicleDetails />
      </Drawer>
      <div>hello world</div>
    </>
  );
};

export default Map;
