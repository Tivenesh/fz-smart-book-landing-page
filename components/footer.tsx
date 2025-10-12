"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

// Define a type for the star object
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export function Footer() {
  const [floatOffset, setFloatOffset] = useState(0)
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffset(prev => (prev + 1) % 360)
    }, 50)

    // Generate twinkling stars
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

    return () => {
      clearInterval(interval)
      clearInterval(starInterval)
    }
  }, [])

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 to-purple-700 text-white overflow-hidden">
      {/* Starry Night Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Twinkling stars */}
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

        {/* Static stars background */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`static-star-${i}`}
            className="absolute text-yellow-200 opacity-40"
            style={{
              top: `${Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 12 + 8}px`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}

        {/* Floating cute elements */}
        <div 
          className="absolute bottom-32 left-10 text-6xl"
          style={{ 
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
            transform: `translateY(${Math.sin(floatOffset * 0.035 + Math.PI/2) * 8}px)`,
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
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
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

          {/* Column 3: Social Media */}
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

        {/* Copyright with decorative line */}
        <div className="relative mt-8 pt-8">
          {/* Decorative wavy line */}
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              style={{
                transform: `translateX(${Math.sin(floatOffset * 0.02) * 10}px)`
              }}
            />
          </div>
          
          <div className="text-center">
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