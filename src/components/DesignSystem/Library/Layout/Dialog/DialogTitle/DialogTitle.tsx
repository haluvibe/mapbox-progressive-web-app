import {
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../../../types';

export type DialogTitleProps = Omit<MuiDialogTitleProps, RestrictedVisualProps>;

// export interface TemplateProps extends Omit<BoxProps, RestrictedVisualProps> {};

// export interface TemplateProps {}

export const DialogTitle = (props: DialogTitleProps) => {
  return <MuiDialogTitle {...props} />;
};

DialogTitle.displayName = 'DialogTitle';
