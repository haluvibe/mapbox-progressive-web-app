import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import {ForwardedRef} from 'react';

export type IconWrapperProps = {icon: React.ReactNode} & React.ComponentProps<
  typeof SvgIcon
>;

export const IconWrapper = React.forwardRef(
  ({icon, ...props}: IconWrapperProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
      <SvgIcon {...props} ref={ref}>
        {icon}
      </SvgIcon>
    );
  },
);

IconWrapper.displayName = 'IconWrapper';
