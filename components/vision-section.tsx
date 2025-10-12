"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
// Define a type for the sparkle object for better code quality
interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  duration: number
}

export function VisionSection() {
  const [floatOffset, setFloatOffset] = useState(0)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffset(prev => (prev + 1) % 360)
    }, 50)

    // Generate sparkles periodically
    const sparkleInterval = setInterval(() => {
      const newSparkle: Sparkle = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 2 + 1,
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
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        />

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
              animationDuration: `${sparkle.duration}s`,
            }}
          >
            <div className="w-full h-full bg-yellow-200 rounded-full" />
          </div>
        ))}

        {/* Floating clouds with shadow */}
        <div
          className="absolute top-24 left-1/4 opacity-60"
          style={{ transform: `translateX(${Math.sin(floatOffset * 0.02) * 20}px)` }}
        >
          <svg viewBox="0 0 100 50" className="w-32 h-16 drop-shadow-md">
            <ellipse cx="50" cy="30" rx="30" ry="18" fill="white" />
            <ellipse cx="30" cy="32" rx="22" ry="15" fill="white" />
            <ellipse cx="70" cy="32" rx="22" ry="15" fill="white" />
          </svg>
        </div>

        <div
          className="absolute top-32 right-1/4 opacity-60"
          style={{ transform: `translateX(${Math.sin(floatOffset * 0.02 + Math.PI) * 15}px)` }}
        >
          <svg viewBox="0 0 100 50" className="w-28 h-14 drop-shadow-md">
            <ellipse cx="50" cy="30" rx="28" ry="16" fill="white" />
            <ellipse cx="32" cy="32" rx="20" ry="13" fill="white" />
            <ellipse cx="68" cy="32" rx="20" ry="13" fill="white" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2
          className="text-5xl font-bold text-purple-600 mb-8 animate-pulse"
          style={{
            animationDuration: "3s",
            textShadow: "2px 2px 0px rgba(236, 72, 153, 0.2)",
          }}
        >
          Our Vision
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          Ecosmart catalogue for FZ Smart Book is a dedicated platform showcasing a wide range of products related to FZ
          Smart Book. We are committed to providing innovative and eco-friendly solutions that inspire creativity and
          learning for all ages.
        </p>

        <a href="http://localhost:3000/about">
          <button
            className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 rounded-full bg-transparent transition-all duration-300 transform hover:scale-110 hover:-rotate-2 shadow-lg hover:shadow-xl"
            style={{
              boxShadow: "0 4px 20px rgba(139, 92, 246, 0.3)",
            }}
          >
            Discover More
          </button>
        </a>
      </div>

      {/* Enhanced Wavy Bottom Divider with animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d={`M0,${60 + Math.sin(floatOffset * 0.02) * 10} Q360,${
              100 + Math.sin(floatOffset * 0.02) * 10
            } 720,${60 + Math.sin(floatOffset * 0.02) * 10} T1440,${60 + Math.sin(floatOffset * 0.02) * 10} L1440,120 L0,120 Z`}
            fill="#E0F2FE"
            className="transition-all duration-100"
          />
        </svg>
      </div>
    </section>
  )
}