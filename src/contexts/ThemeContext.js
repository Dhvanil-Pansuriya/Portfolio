import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage, STORAGE_KEYS, analytics } from '../utils/storage';
import Icon from '../components/Icon';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return storage.get(STORAGE_KEYS.THEME, 'mobile app development');
  });

  useEffect(() => {
    // Apply theme class to body
    // Convert theme name to valid CSS class name (replace spaces with hyphens)
    const themeClassName = currentTheme.replace(/\s+/g, '-');
    document.body.className = `theme-${themeClassName}`;
  }, [currentTheme]);

  const themes = {
    'react-native': {
      name: 'React Native',
      icon: <Icon name="react" size={30} className="text-gray-900" />,
      description: 'Cross-Platform Mobile Development'
    },
    'android': {
      name: 'Android',
      icon: <Icon name="android" size={30} className="text-gray-900" />,
      description: 'Native Android Development'
    },
    'mobile app development': {
      name: 'Mobile App Development',
      icon: <Icon name="mobile" size={30} className="text-gray-900" />,
      description: 'iOS & Android Development'
    },
    'pinal': {
      name: 'Pinal Portfolio',
      icon: <Icon name="code" size={30} className="text-gray-900" />,
      description: 'Development Lead Portfolio'
    }
  };

  const switchTheme = (theme) => {
    if (!themes[theme]) {
      console.error('Theme not found:', theme);
      return;
    }
    
    const oldTheme = currentTheme;
    setCurrentTheme(theme);
    storage.set(STORAGE_KEYS.THEME, theme);
    analytics.trackThemeChange(oldTheme, theme);
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      switchTheme,
      themes,
      currentThemeInfo: themes[currentTheme]
    }}>
      {children}
    </ThemeContext.Provider>
  );
};