// components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../utils/ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Cambiar a {isDarkMode ? 'modo claro' : 'modo oscuro'}
    </button>
  );
}

export default ThemeToggle; 