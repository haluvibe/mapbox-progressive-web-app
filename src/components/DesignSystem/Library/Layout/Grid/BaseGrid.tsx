import React, {useContext, useMemo} from 'react';
import {Box, BoxProps} from '../../';
import {RestrictedStyleProps} from '../../types';
import {Properties} from 'csstype';

export const GridContext = React.createContext<boolean>(false);

export const useGridContext = () => useContext(GridContext);
export interface BaseGridProps extends Omit<BoxProps, RestrictedStyleProps> {
  spacingUnit?: number;
  columns?: number;
  children: React.ReactNode;
  overflowX?: Properties['overflowX'];
  overflowY?: Properties['overflowY'];
}
export const BaseGrid = ({
  spacingUnit = 4,
  children,
  columns = 12,
  overflowX,
  overflowY,
  ...props
}: BaseGridProps) => {
  const styles = useMemo(
    () => ({
      display: 'grid',
      gap: spacingUnit,
      gridColumn: 'span 12',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      overflowX,
      overflowY,
    }),
    [spacingUnit, columns],
  );
  return (
    <Box sx={styles} {...props}>
      <GridContext.Provider value={true}>{children}</GridContext.Provider>
    </Box>
  );
};
