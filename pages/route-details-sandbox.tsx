import React, { FC, useState } from "react";
import {
  CloseIcon,
  Drawer,
  FlexColumn,
} from "../src/components/DesignSystem/Library";
import RouteDetailsCard from "../src/components/RouteDetailsCard";

interface Props {}

const RouteDetailsSandbox: FC<Props> = ({}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Drawer open={isOpen} anchor={"bottom"}>
        <FlexColumn gap={2} justifyContent={"center"} height={"100%"}>
          <CloseIcon onClick={() => setIsOpen(false)} cursor={"pointer"} />
          <RouteDetailsCard
            name={"Route 1"}
            distance={"210km"}
            travelTime={"3hr 12mins"}
            secondary
          />
          <RouteDetailsCard
            name={"Route 2"}
            distance={"210km"}
            travelTime={"3hr 12mins"}
          />
        </FlexColumn>
      </Drawer>
    </>
  );
};

export default RouteDetailsSandbox;
