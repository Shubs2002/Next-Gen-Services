import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const { theme, setTheme } = useTheme()
  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">NextGen Finance</span>
        </Link>
        <nav className="flex items-center gap-4">
          <div className="space-x-4 hidden sm:inline">
            <NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}>Home</NavLink>
            <NavLink to="/loans" className={({isActive}) => isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}>Loans</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}>Contact</NavLink>
            <Link to="/apply" className="ml-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">Apply</Link>
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </nav>
      </div>
    </header>
  )
}
