import React, { FC, ReactNode } from "react";
import {
  Card,
  Flex,
  FlexColumn,
  FlexRow,
  CardContent,
} from "./DesignSystem/Library";
import { Box } from "@mui/material";

interface Props {
  title: string;
  subTitle: string;
  startIcon: ReactNode;
  endIcon?: ReactNode;
  bgColor?: string;
}

const ButtonCard: FC<Props> = ({
  title,
  subTitle,
  bgColor,
  startIcon,
  endIcon,
}: Props): JSX.Element => {
  return (
    <Card bgColor={bgColor}>
      <Flex>
        <CardContent padding={"SM"} spacing={"SM"}>
          {startIcon}
          <Box
            sx={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0.15px",
            }}
          >
            {title}
          </Box>
          <Box
            sx={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "22px",
              letterSpacing: "0.15px",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            {subTitle}
          </Box>
        </CardContent>
        {endIcon && (
          <Flex justifyContent={"center"} alignItems={"center"} sx={{ pr: 3 }}>
            {endIcon}
          </Flex>
        )}
      </Flex>
    </Card>
  );
};

export default ButtonCard;
