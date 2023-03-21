import React, { FC, useState } from "react";
import {
  ArrowBackIcon,
  ContainedButton,
  Drawer,
  FlexColumn,
  TextInput,
} from "../src/components/DesignSystem/Library";
import { Box } from "@mui/material";

interface Props {}

const TripDetailsSandbox: FC<Props> = ({}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Drawer open={isOpen} anchor={"bottom"}>
        <FlexColumn gap={2} justifyContent={"center"} height={"100%"}>
          <ArrowBackIcon onClick={() => setIsOpen(false)} cursor={"pointer"} />
          <Box fontWeight={700}>Enter your trip details</Box>
          <TextInput label={"Enter source address"} />
          <TextInput label={"Enter destination address"} />
          <ContainedButton>Show routes</ContainedButton>
        </FlexColumn>
      </Drawer>
    </>
  );
};

export default TripDetailsSandbox;
