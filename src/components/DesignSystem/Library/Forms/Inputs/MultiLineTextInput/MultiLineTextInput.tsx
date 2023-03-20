import {Box} from '@mui/material';
import React, {useMemo} from 'react';
import {BaseInput, BaseInputProps} from '../BaseInput';
import {Flex} from '../../../Layout/Flex';

export type MultilineTextInputProps = Omit<
  BaseInputProps,
  'multiline' | 'minRows' | 'maxRows' | 'rows' | 'type'
> & {
  rows: number;
  maxLength?: number;
};

export const MultiLineTextInput = ({
  helperText,
  maxLength,
  ...props
}: MultilineTextInputProps) => {
  const counterAwareHelperText = useMemo(() => {
    if (maxLength === undefined) {
      return helperText;
    }

    const valueLength = (props.value as string)?.length ?? '0';
    const charCountText = `${valueLength}/${maxLength}`;

    return (
      <Flex>
        <Box sx={{width: '100%', marginRight: '14px'}}>{helperText}</Box>
        <Box>{charCountText}</Box>
      </Flex>
    );
  }, [helperText, maxLength, props.value]);

  return (
    <BaseInput
      multiline
      type={'text'}
      helperText={counterAwareHelperText}
      {...props}
    />
  );
};

MultiLineTextInput.displayName = 'MultiLineTextInput';
