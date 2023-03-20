import React from 'react';
import {
  TextField,
  Autocomplete,
  AutocompleteProps,
  CircularProgress,
} from '@mui/material';
import {RestrictedVisualProps} from '../../../../types';
import {FormControl} from '../../FormControl';

type TextFieldProps = React.ComponentProps<typeof TextField>;

export interface BaseAutocompleteInputProps<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
> extends Omit<
      AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
      RestrictedVisualProps | 'defaultValue' | 'fullWidth' | 'renderInput'
    >,
    Pick<TextFieldProps, 'label' | 'helperText' | 'placeholder' | 'error'> {
  textFieldStartAdornment?: React.ReactNode;
}

export const BaseAutocompleteInput = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  label,
  helperText,
  placeholder,
  error,
  loading,
  textFieldStartAdornment,
  ...props
}: BaseAutocompleteInputProps<T, Multiple, DisableClearable, FreeSolo>) => {
  return (
    <FormControl>
      <Autocomplete<T, Multiple, DisableClearable, FreeSolo>
        {...props}
        noOptionsText={loading ? 'Loading...' : undefined}
        renderInput={({InputProps, ...params}) => (
          <TextField
            label={label}
            helperText={helperText}
            placeholder={placeholder}
            error={error}
            variant={'outlined'}
            InputProps={{
              ...InputProps,
              startAdornment: (
                <>
                  {textFieldStartAdornment}
                  {InputProps.startAdornment}
                </>
              ),
              endAdornment: loading ? (
                <CircularProgress
                  color="inherit"
                  size={20}
                  style={{right: 10, position: 'absolute'}}
                />
              ) : (
                InputProps.endAdornment
              ),
            }}
            {...params}
          />
        )}
      />
    </FormControl>
  );
};

BaseAutocompleteInput.displayName = 'BaseAutocompleteInput';
