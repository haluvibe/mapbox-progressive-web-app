import {useState, useCallback} from 'react';

export type UseDialogResult = [boolean, () => void, () => void];

export const useDialog = (): UseDialogResult => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  return [dialogOpen, openDialog, closeDialog];
};
