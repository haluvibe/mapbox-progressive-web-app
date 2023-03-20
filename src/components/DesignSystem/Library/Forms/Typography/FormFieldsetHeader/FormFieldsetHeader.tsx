import React from 'react';
import {Body1} from "../../../Typography/Body1";

export interface FormFieldsetHeaderProps {
  children: React.ReactNode;
}

export const FormFieldsetHeader = ({children}: FormFieldsetHeaderProps) => {
  return <Body1>{children}</Body1>;
};

FormFieldsetHeader.displayName = 'FormFieldsetHeader';
