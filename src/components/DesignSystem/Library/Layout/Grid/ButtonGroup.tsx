import React from 'react';
import {BaseGrid, BaseGridProps} from './BaseGrid';

export type ButtonGroupProps = Omit<BaseGridProps, 'spacingUnit'>;
export const ButtonGroup = (props: ButtonGroupProps) => (
  <BaseGrid columns={1} spacingUnit={2} {...props} />
);
