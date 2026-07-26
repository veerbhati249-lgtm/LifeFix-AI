import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ThemeContextType } from '@/types';
import { STORAGE_KEYS } from '@/utils/constants';
import { getLocalStorage, setLocalStorage } from '@/utils/helpers';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<'dark' | 'light'>(() => {
    const saved = getLocalStorage<'dark' | 'light'>(STORAGE_KEYS.THEME);
    return saved || 'dark';
  });

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      setLocalStorage(STORAGE_KEYS.THEME, newTheme);
      applyTheme(newTheme);
      return newTheme;
    });
  }, []);

  const setTheme = useCallback((newTheme: 'dark' | 'light') => {
    setLocalStorage(STORAGE_KEYS.THEME, newTheme);
    applyTheme(newTheme);
    setThemeState(newTheme);
  }, []);

  const applyTheme = (theme: 'dark' | 'light') => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  };

  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
