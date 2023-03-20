import {
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps as MuiAccordionSummaryProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';
import {ExpandMore} from "../../../Icons";

export type AccordionSummaryProps = Omit<
  MuiAccordionSummaryProps,
  RestrictedVisualProps
>;

export const AccordionSummary = (props: AccordionSummaryProps) => {
  return <MuiAccordionSummary expandIcon={<ExpandMore />} {...props} />;
};

AccordionSummary.displayName = 'AccordionSummary';
