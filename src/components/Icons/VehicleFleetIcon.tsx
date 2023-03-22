import * as React from "react";
import IconContainer from "./IconContainer";

const VehicleFleetIcon = ({
  color,
  bgColor,
}: {
  color: string;
  bgColor: string;
}) => (
  <IconContainer bgColor={bgColor}>
    <svg width={24} height={24} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M10.872 3.864a1 1 0 0 0-1.736-.992L7.92 5H4a2 2 0 0 0-2 2v1a1 1 0 1 0 2 0V7h5.08l1.792-3.136ZM15 7.235l-1 3.204h4V7.235h-3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 3a2 2 0 0 1 2 2v10.823a2 2 0 0 1-2 2h-4C15.822 19.262 14.268 21 12 21c-3 0-3.821-1.738-4-3.177H5a1 1 0 0 1-1-1v-1.117h-.941a1.059 1.059 0 0 1 0-2.118H4v-3.294a2 2 0 0 1 2-2h4l1-2.118 1.412-2.242A2 2 0 0 1 14.104 3H20Zm-9.947 13.765c0 1.197.823 2.117 1.947 2.117 1.122 0 2-.92 2-2.117 0-1.196-.878-2.118-2-2.118-1.123 0-1.947.92-1.947 2.118ZM19 15.705a1 1 0 0 0 1-1V5.119h-6l-3 5.321H6v5.267h2c.179-1.438 1.338-3.177 4-3.177 2.5 0 3.822 1.739 4 3.177h3Z"
      />
    </svg>
  </IconContainer>
);

export default VehicleFleetIcon;
