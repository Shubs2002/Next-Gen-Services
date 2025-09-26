import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || stored === 'light') return stored
    } catch (e) {
      // ignore
    }
    // default to system
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])

  return { theme, setTheme }
}
