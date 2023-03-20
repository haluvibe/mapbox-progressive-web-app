import React from 'react';
import {BaseGrid, BaseGridProps} from './BaseGrid';

type FormGridProps = Omit<BaseGridProps, 'spacingUnit'>;
export const FormGrid = (props: FormGridProps) => (
  <BaseGrid columns={1} {...props} />
);
