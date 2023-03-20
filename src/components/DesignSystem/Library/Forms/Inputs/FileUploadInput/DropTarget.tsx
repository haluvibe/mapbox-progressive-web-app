// TODO: These styles will be tweaked in later tickets
import React from 'react';
import {DropzoneRootProps} from 'react-dropzone';
import {alpha, Theme} from '@mui/material/styles';
import {FlexColumn, FlexColumnProps} from '../../../Layout/FlexColumn';

export interface DropTargetProps extends DropzoneRootProps {
  isDragActive?: boolean;
  error?: boolean;
}

const commonStyles = (theme: Theme) => ({
  borderStyle: 'dashed',
  borderWidth: 1,
  borderRadius: `${theme.shape.borderRadius}px`,
  px: 2,
  py: 2,
});

const dropTargetStyles = {
  default: theme => ({
    borderColor: alpha(theme.palette.action.active, 0.12),
    ...commonStyles(theme),
  }),
  active: theme => ({
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    borderColor: theme.palette.primary.main,
    ...commonStyles(theme),
  }),
  error: theme => ({
    backgroundColor: alpha(theme.palette.error.main, 0.08),
    borderColor: theme.palette.error.main,
    ...commonStyles(theme),
  }),
} as {
  [key: string]: FlexColumnProps['sx'];
};

export const DropTarget = React.forwardRef(
  ({isDragActive, error, ...props}: DropTargetProps, ref) => {
    const styleName = isDragActive ? 'active' : error ? 'error' : 'default';
    return <FlexColumn ref={ref} sx={dropTargetStyles[styleName]} {...props} />;
  },
);

DropTarget.displayName = 'DropTarget';
