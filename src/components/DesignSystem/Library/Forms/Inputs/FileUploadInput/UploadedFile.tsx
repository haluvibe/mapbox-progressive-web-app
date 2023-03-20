// TODO: This will be fixed in later tickets
import React from 'react';
import * as R from 'ramda';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LinearProgress from '@mui/material/LinearProgress';

// TODO: need to decouple this type dependency
import {FlexRow} from '../../../Layout/FlexRow';
import {FlexColumn} from '../../../Layout/FlexColumn';
import {Subtitle1} from '../../../Typography/Subtitle1';
export interface UploadedFileType extends File {
  progress?: number;
}

export interface UploadedFileProps<T> {
  file: T;
  onFileClick?: (file: T) => void;
  onFileEdit?: (file: T) => void;
  onFileRemove?: (file: T) => void;
}
export const UploadedFile = <T extends UploadedFileType>({
  file,
  onFileClick,
  onFileEdit,
  onFileRemove,
}: UploadedFileProps<T>) => {
  return (
    <>
      <FlexColumn sx={{width: '100%', p: 2}}>
        <FlexRow sx={{width: '100%'}} onClick={() => onFileClick?.(file)}>
          <Subtitle1>{file.name}</Subtitle1>
          <Subtitle1 color={'text.secondary'}>{file.size}</Subtitle1>
          <EditIcon
            onClick={() => {
              onFileEdit?.(file);
            }}
          />
          <DeleteIcon onClick={() => onFileRemove?.(file)} />
        </FlexRow>
        {!R.isNil(file.progress) && (
          <LinearProgress variant="determinate" value={file.progress} />
        )}
      </FlexColumn>
    </>
  );
};
