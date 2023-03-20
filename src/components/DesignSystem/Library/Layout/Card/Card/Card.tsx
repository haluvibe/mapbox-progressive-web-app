import React from 'react';
import {Card as MuiCard, CardProps as MuiCardProps} from '@mui/material';
import {RestrictedVisualProps} from '../../../types';

export type CardProps = Omit<MuiCardProps, 'variant' | RestrictedVisualProps>;

export const Card = (props: CardProps) => {
  return <MuiCard variant={'outlined'} {...props} />;
};

Card.displayName = 'Card';
