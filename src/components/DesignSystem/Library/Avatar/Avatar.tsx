import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@mui/material';
import React from 'react';
import {RestrictedVisualProps} from '../types';
import {PersonOutlined} from "../Icons";

export interface AvatarProps
  extends Omit<MuiAvatarProps, RestrictedVisualProps> {
  size?: number;
}

export const Avatar = ({
  children = <PersonOutlined />,
  size = 48,
  ...avatarProps
}: AvatarProps) => {
  return (
    <MuiAvatar sx={{width: size, height: size}} {...avatarProps}>
      {children}
    </MuiAvatar>
  );
};

Avatar.displayName = 'Avatar';
