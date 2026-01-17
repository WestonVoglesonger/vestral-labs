import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-dark-800/50 bg-gradient-to-b from-dark-950 to-dark-900/50 mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img 
              src="/vestral-logo.png" 
              alt="Vestral Labs" 
              className="h-[72px] w-auto opacity-80"
            />
            <p className="text-sm text-gray-400">
              &copy; 2025 Vestral Labs. Building BCI infrastructure.
            </p>
          </div>
          <ul className="flex gap-6">
            <li>
              <Link to="/about" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/lab-notes" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Lab Notes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
