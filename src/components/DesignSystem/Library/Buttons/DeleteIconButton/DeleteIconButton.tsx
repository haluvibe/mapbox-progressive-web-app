import React from 'react';
import {BaseIconButton, BaseIconButtonProps} from '../BaseIconButton';
import {DeleteOutlined} from '../../Icons';

export type DeleteIconButtonProps = Omit<
  BaseIconButtonProps,
  'color' | 'children'
>;

export const DeleteIconButton = (props: DeleteIconButtonProps): JSX.Element => {
  return (
    <BaseIconButton color={'default'} {...props}>
      <DeleteOutlined />
    </BaseIconButton>
  );
};

DeleteIconButton.displayName = 'DeleteIconButton';
