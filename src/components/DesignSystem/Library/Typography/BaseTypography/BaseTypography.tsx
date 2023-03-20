import React, {Ref} from 'react';
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';
import {RestrictedVisualProps} from '../../types';
import {UseGridItemStyles, useGridItemStyles} from '../../';

export type BaseTypographyProps = UseGridItemStyles &
  Omit<MuiTypographyProps, RestrictedVisualProps | 'typography'>;

const BaseTypographyInternal = (
  props: BaseTypographyProps,
  ref: Ref<HTMLInputElement>,
) => {
  const sx = useGridItemStyles(props.span);
  return <MuiTypography sx={sx} {...props} ref={ref} />;
};

BaseTypographyInternal.displayName = 'BaseTypography';

export const BaseTypography = React.forwardRef<
  HTMLInputElement,
  BaseTypographyProps
>(BaseTypographyInternal) as (props: BaseTypographyProps) => JSX.Element;
