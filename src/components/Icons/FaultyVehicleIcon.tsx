import * as React from "react";
import IconContainer from "./IconContainer";

const FaultyVehicleIcon = ({
  color,
  bgColor,
}: {
  color: string;
  bgColor: string;
}) => (
  <IconContainer bgColor={bgColor}>
    <svg width={24} height={24} fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="m9 7.219 1 3.19H6V7.22h3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3a2 2 0 0 0-2 2v10.765a2 2 0 0 0 2 2h4c.046.373-.17.8-.38 1.22-.6 1.19-1.166 2.312 4.38 1.944 2.993-.199 3.821-1.731 4-3.164h3a1 1 0 0 0 1-1v-1.11h.945a1.055 1.055 0 0 0 0-2.109H20v-3.273a2 2 0 0 0-2-2h-4l4.133-2.615A1.159 1.159 0 0 0 16.894 3.7L13 6.164 11.589 3.93A2 2 0 0 0 9.899 3H4Zm9.947 13.71c0 1.193-.823 2.11-1.947 2.11-1.122 0-2-.917-2-2.11 0-1.191.878-2.109 2-2.109 1.123 0 1.947.916 1.947 2.11ZM5 15.656a1 1 0 0 1-1-1V5.109h6l3 5.3h5v5.247h-2c-.179-1.433-1.338-3.164-4-3.164-2.5 0-3.822 1.731-4 3.164H5Z"
      />
      <path d="M19.5 3a.5.5 0 1 1 .002.998A.5.5 0 0 1 19.5 3ZM21 6.984c0 .549-.448.996-1 .996-.553 0-1-.447-1-.996 0-.55.448-.996 1-.996s1 .447 1 .996Z" />
    </svg>
  </IconContainer>
);

export default FaultyVehicleIcon;
