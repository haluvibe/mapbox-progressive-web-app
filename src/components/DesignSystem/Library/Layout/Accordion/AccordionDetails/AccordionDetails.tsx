import {AccordionDetails, AccordionDetailsProps} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export type BaseAccordionDetailsProps = Omit<
  AccordionDetailsProps,
  RestrictedVisualProps
>;

export const BaseAccordionDetails = (props: BaseAccordionDetailsProps) => {
  return <AccordionDetails {...props} />;
};

BaseAccordionDetails.displayName = 'BaseAccordionDetails';
