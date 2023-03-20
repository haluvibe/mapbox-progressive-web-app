import {DropzoneOptions, useDropzone} from 'react-dropzone';
// TODO: move this
import * as R from 'ramda';
import mime from 'mime';
import {UploadedFileType} from './UploadedFile';
import {bytesToMegabytes} from "../../../../utils";

export interface UseFileUploadInput<T>
  extends Omit<
    DropzoneOptions,
    'preventDropOnDocument' | 'noClick' | 'accept'
  > {
  acceptedMimeTypes: string[];
  filesList: T[];
  error?: string;
}
export function useFileUploadInput<
  T extends UploadedFileType = UploadedFileType,
>({
  acceptedMimeTypes,
  maxFiles,
  maxSize,
  disabled,
  filesList = [],
  onDrop,
  onDropRejected,
  onDropAccepted,
  error,
}: UseFileUploadInput<T>) {
  const accept = R.map(acceptedMimeType => {
    return R.defaultTo(acceptedMimeType, mime.getType(acceptedMimeType));
  }, acceptedMimeTypes || []);

  const extensions = R.map(acceptedMimeType => {
    return R.defaultTo(acceptedMimeType, mime.getExtension(acceptedMimeType));
  }, acceptedMimeTypes || []);
  const maxFileSizeInMb = maxSize ? bytesToMegabytes(maxSize, true) : null;
  const dropzoneProps = useDropzone({
    accept,
    maxFiles,
    maxSize,
    preventDropOnDocument: true,
    noClick: false,
    disabled,
    onDrop,
    onDropRejected,
    onDropAccepted,
  });

  return {
    ...dropzoneProps,
    maxFileSizeInMb,
    accept,
    extensions,
    filesList,
    error,
  };
}
