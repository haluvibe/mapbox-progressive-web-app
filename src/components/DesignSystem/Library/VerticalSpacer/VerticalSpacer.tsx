import React from 'react';
import {useTheme} from '@mui/material/styles';
import tokens from '../../../../theming/themes/generated/lightTheme.json';
import {Box} from "../Layout/Box";

/**
 * Vertical Spacer
 */

interface VerticalSpacerProps {
  size?: keyof (typeof tokens)['sizes'];
}

const VerticalSpacer: React.FC<VerticalSpacerProps> = ({size = 'XS'}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: theme.sizes[size],
      }}
    />
  );
};

export default VerticalSpacer;
