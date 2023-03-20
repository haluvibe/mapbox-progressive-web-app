import React from 'react';
import {
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
  Theme,
} from '@mui/material';
import {BaseGrid, BaseGridProps} from '../../Grid';
import {RestrictedVisualProps} from '../../../types';

type Sizes = Record<keyof Theme['sizes'], number>;

const sizes: Sizes = {
  XS: 1,
  SM: 2,
  MD: 3,
  LG: 4,
  XL: 5,
} as const;

export type CardContentProps = {
  padding?: keyof typeof sizes;
  spacing?: keyof typeof sizes;
} & Omit<MuiCardContentProps, 'variant' | RestrictedVisualProps> &
  Pick<BaseGridProps, 'overflowX' | 'overflowY' | 'maxWidth'>;

export const CardContent = ({
  padding = 'LG',
  spacing = 'LG',
  children,
  overflowX,
  overflowY,
  maxWidth,
  ...props
}: CardContentProps) => {
  return (
    <MuiCardContent sx={{p: 0, ['&:last-child']: {pb: 0}}} {...props}>
      <BaseGrid
        p={sizes[padding]}
        columns={1}
        maxWidth={maxWidth}
        spacingUnit={sizes[spacing]}
        overflowX={overflowX}
        overflowY={overflowY}
      >
        {children}
      </BaseGrid>
    </MuiCardContent>
  );
};

CardContent.displayName = 'CardContent';
