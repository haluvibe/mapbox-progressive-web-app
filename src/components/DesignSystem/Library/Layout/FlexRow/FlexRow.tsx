import React from 'react';
import {Flex, FlexProps} from '../Flex/Flex';

export type FlexRowProps = Omit<FlexProps, 'flexDirection'>;

export const FlexRow = ({
  flexWrap = 'wrap',
  gap = 2,
  ...BoxProps
}: FlexRowProps) => {
  return (
    <Flex flexDirection={'row'} flexWrap={flexWrap} gap={gap} {...BoxProps} />
  );
};

FlexRow.displayName = 'FlexRow';
