import React from 'react';
import {Heading5} from "../../../Typography/Heading5";

export interface FormSectionHeaderProps {
  children: React.ReactNode;
}

export const FormSectionHeader = ({children}: FormSectionHeaderProps) => {
  return <Heading5>{children}</Heading5>;
};

FormSectionHeader.displayName = 'FormSectionHeader';
