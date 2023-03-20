import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {IconButton, InputAdornment, Tooltip} from '@mui/material';
import React, {useState} from 'react';
import {BaseInput, BaseInputProps} from '../BaseInput';

export interface PasswordInputProps extends BaseInputProps {
  enableAutoComplete?: boolean;
}

export const PasswordInput = ({
  enableAutoComplete = false,
  InputProps = {},
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  InputProps.endAdornment = (
    <InputAdornment position="end">
      <Tooltip title={'Toggle password visibility'}>
        <IconButton
          edge="end"
          size="small"
          aria-label="toggle password visibility"
          onClick={(): void => {
            setShowPassword(!showPassword);
          }}
          onMouseDown={(event: React.MouseEvent<HTMLButtonElement>): void => {
            event.preventDefault();
          }}
        >
          {showPassword ? (
            <Visibility fontSize="small" />
          ) : (
            <VisibilityOff fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
    </InputAdornment>
  );

  // TODO: check how we want to support this
  const inputProps = {
    autoComplete: enableAutoComplete ? 'new-password' : null,
  };

  return (
    <BaseInput
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={InputProps}
      inputProps={inputProps}
    />
  );
};

PasswordInput.displayName = 'PasswordInput';
