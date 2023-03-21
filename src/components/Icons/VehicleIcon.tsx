import * as React from "react";

const VehicleIcon = ({ color, ...props }: any) => (
  <svg
    width={24}
    height={24}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 5a2 2 0 0 1 2 2h1.281a1 1 0 0 1 .904.572l1.041 2.197H21a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1h-2.05a2.5 2.5 0 1 1-4.9 0h-5.1a2.5 2.5 0 1 1-4.9 0H2V7a2 2 0 0 1 2-2h10ZM6.5 15a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm6.5-2V7H3.714v6H13Zm3.5 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm4-2v-2h-2.315L17 8.5h-2V13h5.5Z"
    />
  </svg>
);

export default VehicleIcon;
