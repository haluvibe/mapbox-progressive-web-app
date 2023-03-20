import React from 'react';

import {
  BaseAutocompleteInput,
  BaseAutocompleteInputProps,
} from '../BaseAutocompleteInput';

export type SingleSelectAutocompleteInputProps<T> = Omit<
  BaseAutocompleteInputProps<T, false, boolean, false>,
  'multiple' | 'disableClearable'
>;

export const SingleSelectAutocompleteInput = <T,>(
  props: SingleSelectAutocompleteInputProps<T>,
) => {
  // UX tweak so that the clear button doesn't show if the input is empty
  const disableClearable = !props.value;
  return (
    <BaseAutocompleteInput<T, false, boolean, false>
      multiple={false}
      disableClearable={disableClearable}
      {...props}
    />
  );
};
