"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const [floatOffset, setFloatOffset] = useState(0)
  const [sparkles, setSparkles] = useState<any[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffset(prev => (prev + 1) % 360)
    }, 50)

    // Generate sparkles periodically
    const sparkleInterval = setInterval(() => {
      const newSparkle: any = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 2 + 1
      }
      setSparkles(prev => [...prev, newSparkle])
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id))
      }, newSparkle.duration * 1000)
    }, 800)

    return () => {
      clearInterval(interval)
      clearInterval(sparkleInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 pt-20">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-30 animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-40 animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-30 animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
        
        {/* Sparkles */}
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="absolute animate-ping"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              animationDuration: `${sparkle.duration}s`
            }}
          >
            <div className="w-full h-full bg-yellow-200 rounded-full" />
          </div>
        ))}

        {/* Cute Plants */}
        <div className="absolute left-5 bottom-32 transform hover:scale-110 transition-transform duration-300">
          <svg viewBox="0 0 80 100" className="w-24 h-32 drop-shadow-lg" style={{ transform: `translateY(${Math.sin(floatOffset * 0.03) * 5}px)` }}>
            <ellipse cx="40" cy="90" rx="15" ry="8" fill="#8B4513" />
            <rect x="35" y="50" width="10" height="40" fill="#654321" rx="5" />
            <ellipse cx="40" cy="35" rx="18" ry="20" fill="#10B981" />
            <ellipse cx="25" cy="40" rx="15" ry="18" fill="#059669" />
            <ellipse cx="55" cy="40" rx="15" ry="18" fill="#059669" />
            <circle cx="35" cy="30" r="3" fill="#FCD34D" />
            <circle cx="45" cy="35" r="3" fill="#FCD34D" />
            <circle cx="40" cy="42" r="3" fill="#FCD34D" />
          </svg>
        </div>

        <div className="absolute right-10 bottom-32 transform hover:scale-110 transition-transform duration-300">
          <svg viewBox="0 0 80 100" className="w-28 h-36 drop-shadow-lg" style={{ transform: `translateY(${Math.sin(floatOffset * 0.03 + Math.PI) * 6}px)` }}>
            <ellipse cx="40" cy="90" rx="15" ry="8" fill="#8B4513" />
            <rect x="35" y="45" width="10" height="45" fill="#654321" rx="5" />
            <path d="M40,20 Q20,30 25,50 Q30,45 40,45 Z" fill="#EC4899" />
            <path d="M40,20 Q60,30 55,50 Q50,45 40,45 Z" fill="#EC4899" />
            <path d="M40,25 Q30,35 32,48 Q36,43 40,43 Z" fill="#F472B6" />
            <path d="M40,25 Q50,35 48,48 Q44,43 40,43 Z" fill="#F472B6" />
            <circle cx="40" cy="20" r="8" fill="#FBBF24" />
            <circle cx="38" cy="18" r="2" fill="#FCD34D" />
          </svg>
        </div>

        {/* Floating clouds with shadow */}
        <div className="absolute top-24 left-1/4 opacity-80" style={{ transform: `translateX(${Math.sin(floatOffset * 0.02) * 20}px)` }}>
          <svg viewBox="0 0 100 50" className="w-32 h-16 drop-shadow-md">
            <ellipse cx="50" cy="30" rx="30" ry="18" fill="white" />
            <ellipse cx="30" cy="32" rx="22" ry="15" fill="white" />
            <ellipse cx="70" cy="32" rx="22" ry="15" fill="white" />
          </svg>
        </div>
        
        <div className="absolute top-32 right-1/4 opacity-80" style={{ transform: `translateX(${Math.sin(floatOffset * 0.02 + Math.PI) * 15}px)` }}>
          <svg viewBox="0 0 100 50" className="w-28 h-14 drop-shadow-md">
            <ellipse cx="50" cy="30" rx="28" ry="16" fill="white" />
            <ellipse cx="32" cy="32" rx="20" ry="13" fill="white" />
            <ellipse cx="68" cy="32" rx="20" ry="13" fill="white" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl animate-pulse" style={{ 
          textShadow: "4px 4px 0px rgba(236, 72, 153, 0.8), 8px 8px 0px rgba(168, 85, 247, 0.6)",
          animationDuration: "2s"
        }}>
          FZ SMART BOOK
        </h1>
        <p className="text-3xl md:text-4xl text-white mb-12 drop-shadow-xl font-bold" style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
        }}>
          🌟 Explore the World of EcoSmart Catalogue 🌟
        </p>

        {/* Monsters with enhanced animations */}
        <div className="relative mb-12 flex justify-center items-end gap-12 h-48">
          {/* Monster 1 - With wiggle and bounce */}
          <div 
            className="relative w-40 h-40 cursor-pointer transform hover:scale-125 transition-transform duration-300"
            style={{ 
              transform: `translateY(${Math.sin(floatOffset * 0.05) * 10}px) rotate(${Math.sin(floatOffset * 0.05) * 5}deg)`,
              filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))"
            }}
          >
            <Image
              src="/purple mosnter.png"
              alt="Cute purple monster"
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />
            {/* Hearts floating up */}
            <div 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl animate-ping"
              style={{ animationDuration: "2s" }}
            >
              💜
            </div>
          </div>

          {/* Monster 2 - With opposite wiggle */}
          <div 
            className="relative w-44 h-44 cursor-pointer transform hover:scale-125 transition-transform duration-300"
            style={{ 
              transform: `translateY(${Math.sin(floatOffset * 0.05 + Math.PI) * 12}px) rotate(${Math.sin(floatOffset * 0.05 + Math.PI) * 5}deg)`,
              filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))"
            }}
          >
            <Image
              src="/image-removebg-preview (1).png"
              alt="Cute yellow monster"
              width={176}
              height={176}
              className="w-full h-full object-contain"
            />
            {/* Stars floating up */}
            <div 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl animate-ping"
              style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
            >
              ⭐
            </div>
          </div>
        </div>

        <Link href="#products">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white text-2xl font-bold px-12 py-8 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-110 hover:-rotate-2 cursor-pointer"
            style={{
              boxShadow: "0 10px 40px rgba(236, 72, 153, 0.6)"
            }}
          >
            🎉 View All Products 🎉
          </Button>
        </Link>
      </div>

      {/* Enhanced Wavy Bottom Divider with animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path 
            d={`M0,${60 + Math.sin(floatOffset * 0.02) * 10} Q360,${Math.sin(floatOffset * 0.02) * 10} 720,${60 + Math.sin(floatOffset * 0.02) * 10} T1440,${60 + Math.sin(floatOffset * 0.02) * 10} L1440,120 L0,120 Z`}
            fill="white" 
            className="transition-all duration-100"
          />
          <path 
            d={`M0,${80 + Math.sin(floatOffset * 0.03 + Math.PI) * 8} Q360,${20 + Math.sin(floatOffset * 0.03 + Math.PI) * 8} 720,${80 + Math.sin(floatOffset * 0.03 + Math.PI) * 8} T1440,${80 + Math.sin(floatOffset * 0.03 + Math.PI) * 8} L1440,120 L0,120 Z`}
            fill="rgba(255, 255, 255, 0.5)" 
            className="transition-all duration-100"
          />
        </svg>
      </div>
    </section>
  )
}