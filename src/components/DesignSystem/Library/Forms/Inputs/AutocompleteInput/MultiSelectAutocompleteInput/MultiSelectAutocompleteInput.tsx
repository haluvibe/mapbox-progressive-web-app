import React from 'react';

import {
  BaseAutocompleteInput,
  BaseAutocompleteInputProps,
} from '../BaseAutocompleteInput';

export type MultiSelectAutocompleteInputProps<T> = Omit<
  BaseAutocompleteInputProps<T, true, boolean, false>,
  'multiple' | 'disableClearable' | 'inputValue'
>;
export const MultiSelectAutocompleteInput = <T,>(
  props: MultiSelectAutocompleteInputProps<T>,
) => {
  // UX tweak so that the clear button doesn't show if the input is empty
  const disableClearable = (props.value || []).length > 0;
  return (
    <BaseAutocompleteInput<T, true, boolean, false>
      multiple
      disableClearable={disableClearable}
      disableCloseOnSelect
      {...props}
    />
  );
};
