import React from 'react';
import {BaseGrid, BaseGridProps} from './BaseGrid';

type FieldGroupProps = Omit<BaseGridProps, 'spacingUnit'>;
export const FieldGroup = (props: FieldGroupProps) => (
  <BaseGrid spacingUnit={2} {...props} />
);
