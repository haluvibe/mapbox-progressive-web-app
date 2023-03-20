import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export type AccordionProps = Omit<MuiAccordionProps, RestrictedVisualProps>;

export const Accordion = (props: AccordionProps) => {
  return (
    <MuiAccordion
      TransitionProps={{unmountOnExit: true}}
      sx={{width: '100%'}}
      {...props}
    />
  );
};

Accordion.displayName = 'Accordion';
