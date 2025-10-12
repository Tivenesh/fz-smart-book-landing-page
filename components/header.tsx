"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="text-3xl animate-bounce" style={{ animationDuration: "2s" }}>
              📚
            </div>
            <div 
              className="text-2xl font-black text-purple-600"
              style={{ 
                fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
                textShadow: "2px 2px 0px rgba(236, 72, 153, 0.3)"
              }}
            >
              FZ SMART BOOK
            </div>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={3} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={3} />
            )}
          </button>
        </div>
      </header>

      {/* Slide-out Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          {/* Menu Links */}
          <nav className="flex flex-col gap-4">
            {/* THIS IS THE CORRECTED HOME BUTTON LINK */}
            <a
              href="/"
              className="flex items-center gap-3 text-white hover:text-yellow-200 font-bold text-lg transition-all duration-300 hover:translate-x-2 group py-3 px-4 rounded-xl hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-2xl">🏠</span>
              <span style={{ fontFamily: "'Comic Sans MS', cursive" }}>Home</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xl">✨</span>
            </a>

            <a
              href="/categories"
              className="flex items-center gap-3 text-white hover:text-yellow-200 font-bold text-lg transition-all duration-300 hover:translate-x-2 group py-3 px-4 rounded-xl hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-2xl">🎨</span>
              <span style={{ fontFamily: "'Comic Sans MS', cursive" }}>All Products</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xl">✨</span>
            </a>
            
            <a
              href="/about"
              className="flex items-center gap-3 text-white hover:text-yellow-200 font-bold text-lg transition-all duration-300 hover:translate-x-2 group py-3 px-4 rounded-xl hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-2xl">💜</span>
              <span style={{ fontFamily: "'Comic Sans MS', cursive" }}>About Us</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xl">✨</span>
            </a>
            
            <a
              href="/contact"
              className="flex items-center gap-3 text-white hover:text-yellow-200 font-bold text-lg transition-all duration-300 hover:translate-x-2 group py-3 px-4 rounded-xl hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-2xl">📧</span>
              <span style={{ fontFamily: "'Comic Sans MS', cursive" }}>Contact</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xl">✨</span>
            </a>
          </nav>

          {/* Cute decorative elements */}
          <div className="mt-auto mb-8 flex justify-center gap-3">
            <span className="text-3xl animate-bounce" style={{ animationDuration: "5s" }}>⭐</span>
            <span className="text-3xl animate-bounce" style={{ animationDuration: "6s", animationDelay: "0.3s" }}>💖</span>
            <span className="text-3xl animate-bounce" style={{ animationDuration: "8s", animationDelay: "0.6s" }}>✨</span>
          </div>
        </div>
      </div>

      {/* Overlay - Click to close menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}