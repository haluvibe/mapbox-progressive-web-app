import {Link as MuiLink, LinkProps as MuiLinkProps} from '@mui/material';
import React from 'react';

/*
  This component is an opinionated external link component.
  All external links should open in a new tab.
*/

export type ExternalLinkProps = Omit<
  MuiLinkProps,
  'component' | 'target' | 'rel'
>;

export const ExternalLink = (props: ExternalLinkProps) => {
  return <MuiLink target="_blank" rel="noopener" {...props} />;
};

ExternalLink.displayName = 'ExternalLink';
