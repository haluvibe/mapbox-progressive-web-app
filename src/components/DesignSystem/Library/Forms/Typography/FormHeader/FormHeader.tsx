import React from 'react';
import {Heading4} from "../../../Typography/Heading4";
import {Divider} from "../../../Layout/Divider";
import VerticalSpacer from "../../../VerticalSpacer";

export interface FormHeaderProps {
  children: React.ReactNode;
}

export const FormHeader = ({children}: FormHeaderProps) => {
  return (
    <div>
      <Heading4>{children}</Heading4>
      <VerticalSpacer size={'LG'} />
      <Divider />
    </div>
  );
};

FormHeader.displayName = 'FormHeader';
