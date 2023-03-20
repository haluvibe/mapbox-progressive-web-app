import React from 'react';
import {Breadcrumbs as MuiBreadcrumbs} from '@mui/material';

export interface BreadcrumbsProps {
  children: React.ReactNode;
}

export const Breadcrumbs = ({children}: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumbs" maxItems={2}>
      {children}
    </MuiBreadcrumbs>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
