import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="font-semibold text-lg">NextGen Finance</span>
        </Link>
        <nav className="space-x-4">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600' : ''}>Home</NavLink>
          <NavLink to="/loans" className={({isActive}) => isActive ? 'text-indigo-600' : ''}>Loans</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-600' : ''}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-indigo-600' : ''}>Contact</NavLink>
          <Link to="/apply" className="ml-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">Apply</Link>
        </nav>
      </div>
    </header>
  )
}
