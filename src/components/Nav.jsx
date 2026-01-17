import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/problem', label: 'Problem' },
    { path: '/platform', label: 'Platform' },
    { path: '/standards', label: 'Standards' },
    { path: '/services', label: 'Services' },
    { path: '/roadmap', label: 'Roadmap' },
    { path: '/lab-notes', label: 'Lab Notes' },
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.nav')
      if (nav && !nav.contains(event.target) && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <img 
              src={`${import.meta.env.BASE_URL}vestral-logo.png`}
              alt="Vestral Labs" 
              className="h-[72px] w-auto"
            />
            <span className="text-xl font-bold text-white hidden sm:inline">
              Vestral<span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Labs</span>
            </span>
          </Link>
          
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          <ul className={`absolute md:static top-20 left-0 right-0 md:flex md:items-center md:gap-8 bg-dark-950 md:bg-transparent border-b md:border-0 border-dark-800/50 md:border-0 ${
            isOpen ? 'flex flex-col p-6 gap-4' : 'hidden md:flex'
          }`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive(link.path)
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-dark-800/50'
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
