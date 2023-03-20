import React from 'react';
import {
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps,
} from '@mui/material';

export type CardActionsProps = Omit<MuiCardActionsProps, 'variant'>;

export const CardActions = (props: CardActionsProps) => {
  return <MuiCardActions {...props} />;
};

CardActions.displayName = 'CardActions';
