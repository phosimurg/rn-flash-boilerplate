import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { createMMKV } from 'react-native-mmkv';
import { colors as themeColors } from './colors';

const storage = createMMKV();
const THEME_KEY = 'app_theme';

type ThemeType = 'light' | 'dark';

interface ThemeContextProps {
  theme: ThemeType;
  colors: typeof themeColors.light;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = storage.getString(THEME_KEY) as ThemeType;
    return savedTheme || systemColorScheme || 'light';
  });

  useEffect(() => {
    if (!storage.getString(THEME_KEY)) {
      setTheme(systemColorScheme || 'light');
    }
  }, [systemColorScheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    storage.set(THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: themeColors[theme],
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
