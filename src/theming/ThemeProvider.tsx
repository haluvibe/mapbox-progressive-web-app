import React from 'react';
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import {useThemeSelection} from './ThemeSelectionProvider';

interface ThemeProviderProps {
  children: React.ReactNode;
  forceTheme?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  forceTheme,
}) => {
  const {selectedTheme, availableThemes} = useThemeSelection();
  if (!selectedTheme) {
    /* eslint-disable no-console */
    console.error(
      'the Theme component must be within the scope of ThemeSelectionProvider',
    );
  }

  const themeToSelect = forceTheme || selectedTheme;

  return (
    <MuiThemeProvider theme={availableThemes[themeToSelect]}>
      {children}
    </MuiThemeProvider>
  );
};
