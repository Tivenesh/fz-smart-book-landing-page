"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
// Framer Motion import is kept, though not strictly required for the fix

// Define a type for the dynamic twinkling star object
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

// Define a type for the static background stars styles
interface StaticStarStyle {
  id: number;
  top: string;
  left: string;
  fontSize: string;
  animation: string;
  animationDelay: string;
}

export function Footer() {
  const [floatOffset, setFloatOffset] = useState(0)
  const [stars, setStars] = useState<Star[]>([])
  // New state to hold the pre-calculated, client-only styles for static stars
  const [staticStars, setStaticStars] = useState<StaticStarStyle[]>([])

  useEffect(() => {
    // 1. Floating offset interval (runs client-only)
    const interval = setInterval(() => {
      setFloatOffset(prev => (prev + 1) % 360)
    }, 50)

    // 2. Dynamic twinkling stars interval (runs client-only)
    const starInterval = setInterval(() => {
      const newStar: Star = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 60,
        size: Math.random() * 15 + 8,
        duration: Math.random() * 2 + 1
      }
      setStars(prev => [...prev, newStar])
      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== newStar.id))
      }, newStar.duration * 1000)
    }, 600)

    // 3. Static stars style generation (MOVED HERE to run client-only)
    // This solves the hydration error caused by Math.random() on SSR.
    const initialStaticStars: StaticStarStyle[] = [...Array(30)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 70}%`,
      left: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 12 + 8}px`,
      animation: `pulse ${2 + Math.random() * 3}s infinite`,
      animationDelay: `${Math.random() * 2}s`
    }));
    setStaticStars(initialStaticStars);

    return () => {
      clearInterval(interval)
      clearInterval(starInterval)
    }
  }, []) // Empty dependency array ensures it runs only once after mount

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 to-purple-700 text-white overflow-hidden">
      {/* Starry Night Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Twinkling stars (uses client-only 'stars' state) */}
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute animate-ping"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`
            }}
          >
            <div className="w-full h-full bg-yellow-200 rounded-full opacity-60" />
          </div>
        ))}

        {/* Static stars background (NOW uses client-only 'staticStars' state) */}
        {staticStars.map(star => (
          <div
            key={`static-star-${star.id}`}
            className="absolute text-yellow-200 opacity-40"
            style={{
              top: star.top,
              left: star.left,
              fontSize: star.fontSize,
              animation: star.animation,
              animationDelay: star.animationDelay,
            }}
          >
            ✨
          </div>
        ))}

        {/* Floating cute elements (uses client-only 'floatOffset' state) */}
        <div
          className="absolute bottom-32 left-10 text-6xl"
          style={{
            // Note: floatOffset is a state that updates client-side, so this calculation is fine.
            transform: `translateY(${Math.sin(floatOffset * 0.03) * 10}px) rotate(${Math.sin(floatOffset * 0.03) * 8}deg)`,
            filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))"
          }}
        >
          🌙
        </div>

        <div
          className="absolute top-20 right-20 text-5xl"
          style={{
            transform: `translateY(${Math.sin(floatOffset * 0.04 + Math.PI) * 12}px) rotate(${Math.sin(floatOffset * 0.04) * 6}deg)`,
            filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))"
          }}
        >
          ⭐
        </div>

        <div
          className="absolute bottom-40 right-32 text-4xl"
          style={{
            transform: `translateY(${Math.sin(floatOffset * 0.035 + Math.PI / 2) * 8}px)`,
            filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))"
          }}
        >
          💫
        </div>

        {/* Cute monster peeking from bottom */}
        <div
          className="absolute -bottom-4 left-1/4 w-32 h-32 pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-300"
          style={{
            transform: `translateY(${Math.sin(floatOffset * 0.04) * 8}px)`,
            filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))"
          }}
        >
          <img
            src="/purple mosnter.png"
            alt="Cute monster"
            className="w-full h-full object-contain"
            // Adding a placeholder fallback for the image
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/128x128/8b5cf6/ffffff?text=Monster' }}
          />
        </div>

        <div
          className="absolute -bottom-4 right-1/4 w-36 h-36 pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-300"
          style={{
            transform: `translateY(${Math.sin(floatOffset * 0.04 + Math.PI) * 10}px)`,
            filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))"
          }}
        >
          <img
            src="/image-removebg-preview (1).png"
            alt="Cute monster"
            className="w-full h-full object-contain"
            // Adding a placeholder fallback for the image
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/144x144/a78bfa/ffffff?text=Critter' }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Changed to md:grid-cols-4 to accommodate the new column */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="text-4xl animate-bounce"
                style={{ animationDuration: "2s" }}
              >
                📚
              </div>
              <div className="text-3xl font-bold">FZ SMART BOOK</div>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Nurturing young minds through quality educational materials since 2023.
            </p>

            {/* Cute decorative hearts */}
            <div className="flex gap-2 mt-4">
              <span className="text-2xl animate-pulse" style={{ animationDuration: "1.5s" }}>💜</span>
              <span className="text-2xl animate-pulse" style={{ animationDuration: "2s", animationDelay: "0.3s" }}>💖</span>
              <span className="text-2xl animate-pulse" style={{ animationDuration: "1.8s", animationDelay: "0.6s" }}>✨</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🔗</span>
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-purple-200 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
                Home
              </Link>
              <Link
                href="/categories"
                className="text-purple-200 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
                All Products
              </Link>
              <Link
                href="/about"
                className="text-purple-200 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-purple-200 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info (NEW COLUMN) */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">☎️</span>
              Contact Info
            </h3>
            <div className="flex flex-col gap-3 text-purple-200">
              <div className="flex items-start gap-2">
                <span className="text-xl text-yellow-300">📍</span>
                <p>
                  <span className="font-semibold text-white">Location:</span><br />
                  B-G-5, Pangsapuri Serai Wangi, Desa Alam, 40170 Shah Alam, Selangor
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl text-yellow-300">📞</span>
                <p>
                  <span className="font-semibold text-white">Office:</span> 011-31929120
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Social Media (Now Column 4) */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🌟</span>
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:-rotate-12 shadow-lg group"
              >
                <span className="text-3xl">📘</span>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xl animate-bounce">
                  💙
                </div>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:-rotate-12 shadow-lg group"
              >
                <span className="text-3xl">📷</span>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xl animate-bounce">
                  💖
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:-rotate-12 shadow-lg group"
              >
                <span className="text-3xl">🐦</span>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xl animate-bounce">
                  💙
                </div>
              </a>
            </div>

            {/* Fun message */}
            <p className="text-purple-300 text-sm mt-4 italic">
              Join our magical community! ✨
            </p>
          </div>
        </div>

        {/* Copyright with decorative line and contact details */}
        <div className="relative mt-8 pt-8">
          {/* Decorative wavy line */}
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              style={{
                // floatOffset is client-side state, so this is fine
                transform: `translateX(${Math.sin(floatOffset * 0.02) * 10}px)`
              }}
            />
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-3 mb-3 text-purple-200 text-xs sm:text-sm flex-wrap">
              <p>
                <span className="font-bold">Address:</span> B-G-5, Pangsapuri Serai Wangi, Desa Alam, 40170 Shah Alam, Selangor
              </p>
              <span className="hidden sm:inline">|</span>
              <p>
                <span className="font-bold">Contact:</span> 011-31929120
              </p>
            </div>
            <p className="text-purple-200 text-sm flex items-center justify-center gap-2 flex-wrap">
              <span>© 2025 FZ SMART BOOK</span>
              <span className="text-lg">•</span>
              <span>Made with</span>
              <span className="text-pink-300 text-lg animate-pulse">💜</span>
              <span>for kids everywhere!</span>
            </p>

            {/* Cute stars */}
            <div className="flex justify-center gap-3 mt-3">
              <span className="text-yellow-300 animate-spin" style={{ animationDuration: "3s" }}>⭐</span>
              <span className="text-pink-300 animate-pulse" style={{ animationDuration: "2s" }}>✨</span>
              <span className="text-blue-300 animate-bounce" style={{ animationDuration: "2.5s" }}>💫</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}