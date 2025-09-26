import React from 'react'
import { SunIcon, MoonIcon } from './icons'

export default function ThemeToggle({ theme, setTheme }:{ theme: 'light'|'dark', setTheme: (t: 'light'|'dark') => void }){
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="ml-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
