import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useMediaQuery, Theme } from "@mui/material";

interface ThemeSelectionContextProps {
  selectedTheme: string;
  darkModeTheme?: string;
  defaultTheme: string;
  availableThemes: Record<string, Theme>;
  toggleSelectedTheme: () => void;
  setSelectedTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeSelectionContext =
  React.createContext<ThemeSelectionContextProps>({
    selectedTheme: "",
    darkModeTheme: "",
    defaultTheme: "",
    availableThemes: {} as ThemeSelectionContextProps["availableThemes"],
    toggleSelectedTheme: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    setSelectedTheme: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  });

export const useThemeSelection = (): ThemeSelectionContextProps => {
  return React.useContext(ThemeSelectionContext);
};

type ThemeSelectionProviderProps<T extends Record<string, Theme>> = {
  children: ReactNode;
  defaultTheme: keyof T;
  availableThemes: T;
  darkModeTheme?: keyof T;
  disableBrowserPreference?: boolean;
};

export const ThemeSelectionProvider = <T extends Record<string, Theme>>({
  children,
  defaultTheme,
  availableThemes,
  darkModeTheme,
  disableBrowserPreference,
}: ThemeSelectionProviderProps<T>) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [selectedTheme, setSelectedTheme] = React.useState<string>(
    defaultTheme as string
  );

  const toggleSelectedTheme = useCallback(() => {
    const currentIndex = Object.keys(availableThemes).indexOf(selectedTheme);
    const nextIndex = (currentIndex + 1) % Object.keys(availableThemes).length;
    const nextTheme = Object.keys(availableThemes)[nextIndex];
    setSelectedTheme(
      nextTheme === "light"
        ? "old"
        : nextTheme === "dark"
        ? "oldDark"
        : nextTheme
    );
  }, [availableThemes, selectedTheme]);

  useEffect(() => {
    if (!darkModeTheme || disableBrowserPreference) {
      return;
    }
    if (prefersDarkMode) {
      setSelectedTheme(darkModeTheme as string);
      return;
    }
    setSelectedTheme(defaultTheme as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDarkMode]);

  const providerValue = useMemo(
    () => ({
      availableThemes,
      darkModeTheme: darkModeTheme as string,
      defaultTheme: defaultTheme as string,
      selectedTheme: selectedTheme as string,
      toggleSelectedTheme,
      setSelectedTheme,
    }),
    [
      availableThemes,
      darkModeTheme,
      defaultTheme,
      selectedTheme,
      toggleSelectedTheme,
      setSelectedTheme,
    ]
  );

  return (
    <ThemeSelectionContext.Provider value={providerValue}>
      {children}
    </ThemeSelectionContext.Provider>
  );
};
