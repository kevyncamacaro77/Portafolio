const THEME_KEY = 'kevyn-theme';
type Theme = 'light' | 'dark';

export function initTheme(): void {
  const saved = localStorage.getItem(THEME_KEY) as Theme | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme: Theme = saved ?? (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

export function toggleTheme(): void {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

export function currentTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}
