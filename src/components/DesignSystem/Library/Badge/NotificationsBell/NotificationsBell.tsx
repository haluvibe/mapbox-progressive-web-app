import React from 'react';
import {RestrictedVisualProps} from '../../types';
import {Badge, BadgeProps} from '../Badge';
import {NotificationsNoneOutlined} from "../../Icons";

export type NotificationsBellProps = Omit<
  BadgeProps,
  RestrictedVisualProps | 'color' | 'children'
>;

export const NotificationsBell = (props: NotificationsBellProps) => {
  return (
    <Badge {...props}>
      <NotificationsNoneOutlined color="action" />
    </Badge>
  );
};

NotificationsBell.displayName = 'NotificationsBell';
