"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Home, Briefcase, LifeBuoy, Info } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(currentScrollY / scrollHeight, 1)
      
      setScrollProgress(progress)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down - hide with smooth animation
        setShowNavbar(false)
      } else {
        // scrolling up - show with smooth animation
        setShowNavbar(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <>
      <div className="px-6 md:px-8 pt-3 sticky top-0 z-40">
        <nav
          className={`
            bg-white/80 backdrop-blur-md 
            transition-all duration-500 ease-in-out
            rounded-full 
            ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
            shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
          `}
        >
          <div className="container max-w-7xl mx-auto px-6 md:px-8 py-3 relative">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center group">
                <span className="text-2xl font-bold text-zep-blue-500 transition-transform duration-300 group-hover:scale-105">
                  Zep<span className="text-zep-green-500">Wash</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <div className="space-x-6">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/services">Services</NavLink>
                  <NavLink to="/support">Support</NavLink>
                  <NavLink to="/about">About</NavLink>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-zep-blue-500 transition-colors p-2 rounded-full hover:bg-gray-100"
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-zep-blue-500 to-zep-green-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
              role="progressbar"
              aria-valuenow={scrollProgress * 100}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </nav>
      </div>

      {/* Half-width Mobile Navigation - Slides from right */}
      <div
        className={`
          md:hidden fixed top-0 right-0 bottom-0 w-[55%] bg-white z-50
          shadow-[-10px_0_30px_rgba(0,0,0,0.1)] rounded-sm
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-modal="true"
        role="dialog"
      >
        {/* Close button at the top */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <span className="text-xl font-bold text-zep-blue-500">
              Zep<span className="text-zep-green-500">Wash</span>
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-zep-blue-500 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col p-4 mt-2">
          <div className="space-y-2">
            <MobileNavLink to="/" onClick={toggleMenu} icon={<Home size={20} />} isActive={location.pathname === "/"}>
              Home
            </MobileNavLink>
            <MobileNavLink
              to="/services"
              onClick={toggleMenu}
              icon={<Briefcase size={20} />}
              isActive={location.pathname === "/services"}
            >
              Services
            </MobileNavLink>
            <MobileNavLink
              to="/support"
              onClick={toggleMenu}
              icon={<LifeBuoy size={20} />}
              isActive={location.pathname === "/support"}
            >
              Support
            </MobileNavLink>
            <MobileNavLink
              to="/about"
              onClick={toggleMenu}
              icon={<Info size={20} />}
              isActive={location.pathname === "/about"}
            >
              About
            </MobileNavLink>
          </div>
          
          {/* Footer element */}
          <div className="pt-8 border-t border-gray-100 mt-8">
            <div className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} ZepWash</div>
          </div>
        </div>
      </div>
      
      {/* Overlay for the rest of the screen when menu is open */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}

// Reusable NavLink component with animation
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="relative text-gray-800 font-medium hover:text-zep-blue-600 transition-colors duration-300 py-2 px-1 group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zep-blue-400 to-zep-green-400 group-hover:w-full transition-all duration-300"></span>
  </Link>
)

// Mobile NavLink with icon and active state
const MobileNavLink = ({
  to,
  onClick,
  children,
  icon,
  isActive,
}: {
  to: string
  onClick: () => void
  children: React.ReactNode
  icon: React.ReactNode
  isActive: boolean
}) => (
  <Link
    to={to}
    className={`
      flex items-center gap-3 p-3 rounded-xl transition-all duration-300
      ${
        isActive
          ? "bg-gradient-to-r from-zep-blue-50 to-zep-green-50 text-zep-blue-600 font-medium"
          : "text-gray-700 hover:bg-gray-50"
      }
    `}
    onClick={onClick}
  >
    <div
      className={`
      flex items-center justify-center w-8 h-8 rounded-lg
      ${"bg-gray-100 text-gray-500"}
    `}
    >
      {icon}
    </div>
    <span>{children}</span>
    {isActive && (
      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-zep-blue-500 to-zep-green-500"></div>
    )}
  </Link>
)

export default Navbar
