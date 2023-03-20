import React from 'react';
import {Box, BoxProps, useGridItemStyles} from '../../';

export interface GridItemProps extends BoxProps {
  span?: number;
}

export const GridItem = ({span, ...props}: GridItemProps) => {
  const sx = useGridItemStyles(span);
  return <Box sx={sx} {...props} />;
};
