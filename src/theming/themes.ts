import {createTheme, Theme} from '@mui/material/styles';
import {getDesignTokens} from './defaultTheme';
import lightTheme from './themes/generated/lightTheme.json';
import oldTheme from './themes/generated/oldTheme.json';
import darkTheme from './themes/generated/darkTheme.json';

const rawThemes = {
  light: lightTheme as unknown as Theme,
  dark: darkTheme as unknown as Theme,
  old: oldTheme as unknown as Theme,
};

const generateTheme = (themeName: string, backwardsCompatible = false) => {
  return createTheme(
    getDesignTokens(
      rawThemes[themeName as keyof typeof rawThemes] as Theme,
      backwardsCompatible,
    ),
  );
};

export const newThemes = {
  light: generateTheme('light'),
  dark: generateTheme('dark'),
} as const;

const old = generateTheme('old', true);
const oldDark: Theme = {
  ...generateTheme('dark', true),
  typography: {
    ...old.typography,
  },
};

export const backwardsCompatibleThemes = {
  ...newThemes,
  old,
  oldDark,
} as const;
