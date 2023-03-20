import React from 'react';
import {UseFileUploadInput, useFileUploadInput} from './useFileUploadInput';
import {DropTarget} from './DropTarget';
import {Subtitle1} from '../../../Typography/Subtitle1';
import {Link} from '@mui/material';
import {Body2} from '../../../Typography/Body2';
import {
  UploadedFile,
  UploadedFileProps,
  UploadedFileType,
} from './UploadedFile';
import {FlexColumn} from '../../../Layout/FlexColumn';

export interface FileUploadInputProps<T>
  extends UseFileUploadInput<T>,
    Omit<UploadedFileProps<T>, 'file'> {}

export const FileUploadInput = <T extends UploadedFileType = UploadedFileType>({
  acceptedMimeTypes,
  error,
  maxFiles,
  maxSize,
  minSize,
  disabled,
  filesList,
  onDropAccepted,
  onDropRejected,
  onFileEdit,
  onFileRemove,
  onFileClick,
}: FileUploadInputProps<T>) => {
  const fileUploadInputProps = useFileUploadInput({
    error,
    acceptedMimeTypes,
    maxFiles,
    maxSize,
    minSize,
    disabled,
    filesList,
    onDropAccepted,
    onDropRejected,
  });
  const {
    getInputProps,
    getRootProps,
    isDragActive,
    extensions,
    maxFileSizeInMb,
  } = fileUploadInputProps;
  return (
    <>
      <DropTarget
        isDragActive={isDragActive}
        {...getRootProps()}
        error={!!error}
      >
        <input {...getInputProps()} />
        <Subtitle1>
          <Link>Click to upload</Link> or drag and drop
        </Subtitle1>

        <Body2>
          {extensions.join(', ')}
          {maxFileSizeInMb && ` (Max ${maxFileSizeInMb}MB)`}
        </Body2>
        {error && <Body2 color={'error'}>{error}</Body2>}
      </DropTarget>
      <FlexColumn>
        {filesList.map(file => (
          <UploadedFile
            key={file.name}
            file={file}
            onFileEdit={onFileEdit}
            onFileRemove={onFileRemove}
            onFileClick={onFileClick}
          />
        ))}
      </FlexColumn>
    </>
  );
};
