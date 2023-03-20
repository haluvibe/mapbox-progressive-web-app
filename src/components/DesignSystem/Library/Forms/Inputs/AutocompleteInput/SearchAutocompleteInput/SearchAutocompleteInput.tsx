import React from 'react';
import {RestrictedVisualProps} from '../../../../types';
import {
  SingleSelectAutocompleteInput,
  SingleSelectAutocompleteInputProps,
} from '../SingleSelectAutocompleteInput';

export interface RelatedRecord {
  id?: number | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type SearchAutocompleteInputProps = Omit<
  SingleSelectAutocompleteInputProps<RelatedRecord>,
  RestrictedVisualProps
>;

export const SearchAutocompleteInput = ({
  options = [],
  inputValue,
  loading,
  id,
  ...props
}: SearchAutocompleteInputProps) => {
  return (
    <SingleSelectAutocompleteInput<RelatedRecord>
      id={id}
      clearOnBlur={false}
      includeInputInList
      selectOnFocus
      inputValue={inputValue}
      options={options}
      loading={loading}
      {...props}
    />
  );
};

SearchAutocompleteInput.displayName = 'SearchAutocompleteInput';
