import React from 'react';
import {LinkProps} from '@mui/material';
import {ExternalLink} from "../../../Links/ExternalLink";

// @TODO: If we have a need to use these components without react router we may need to make
// the link component configurable. either via a prop or some kind of context based configuration.

export interface BreadcrumbProps extends LinkProps {
  icon?: React.ReactNode;
  label?: string;
}

export const Breadcrumb = ({
  icon,
  href,
  label,
  ...linkProps
}: BreadcrumbProps) => {
  return (
    <ExternalLink
      {...linkProps}
      color={label ? 'text.primary' : 'action.active'}
      underline="hover"
      href={href}
      sx={{display: 'flex', alignItems: 'center'}}
      variant={'body1'}
    >
      {label ? label : icon}
    </ExternalLink>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
