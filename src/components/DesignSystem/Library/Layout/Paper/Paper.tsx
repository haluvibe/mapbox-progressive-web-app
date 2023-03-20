import React from 'react';
import {Paper as MuiPaper, PaperProps as MuiPaperProps} from '@mui/material';

export type PaperProps = Omit<MuiPaperProps, 'variant'>;

export const Paper = (props: PaperProps) => {
  return <MuiPaper variant={'outlined'} {...props} />;
};

Paper.displayName = 'Paper';
