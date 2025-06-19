'use client';

import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div>
      <label htmlFor="theme-select">Theme:</label>
      <select
        id="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {themes?.map((theme) => (
          <option key={theme} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
