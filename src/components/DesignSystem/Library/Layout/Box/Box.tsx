import React, {useMemo} from 'react';
import MuiBox, {BoxProps as MuiBoxProps} from '@mui/material/Box';
import {RestrictedBoxProps} from '../../types';
import {Properties} from 'csstype';

export interface BoxProps extends Omit<MuiBoxProps, keyof RestrictedBoxProps> {
  overflowX?: Properties['overflowX'];
  overflowY?: Properties['overflowY'];
}
export const Box = ({overflowX, overflowY, sx, ...props}: BoxProps) => {
  const styles = useMemo(
    () => ({
      overflowX,
      overflowY,
      ...sx,
    }),
    [overflowX, overflowY, sx],
  );
  return <MuiBox sx={styles} {...props} />;
};
