"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { BookOpen, Languages, Baby, Calculator, BookA, Shapes, Search, Volume2, Puzzle } from "lucide-react"
import Link from "next/link"

const categories = [
    { title: "Buku Bergambar 3 Bahasa", icon: Languages, color: "from-yellow-400 to-orange-400", href: "/categories/buku-bergambar-3-bahasa" },
    { title: "Buku Bergambar 2 Bahasa", icon: BookOpen, color: "from-pink-400 to-rose-400", href: "/categories/buku-bergambar-2-bahasa" },
    { title: "Buku Pasti Mengenal", icon: Baby, color: "from-green-400 to-emerald-400", href: "/categories/buku-pasti-mengenal" },
    { title: "Buku Aktiviti Matematik", icon: Calculator, color: "from-blue-400 to-cyan-400", href: "/categories/buku-aktiviti-matematik" },
    { title: "English Reading Book", icon: BookA, color: "from-purple-400 to-violet-400", href: "/categories/english-reading-book" },
    { title: "Shape Story Book", icon: Shapes, color: "from-red-400 to-pink-400", href: "/categories/shape-story-book" },
    { title: "Word Search", icon: Search, color: "from-teal-400 to-cyan-400", href: "/categories/word-search" },
    { title: "Sound Book", icon: Volume2, color: "from-orange-400 to-amber-400", href: "/categories/sound-book" },
    { title: "Busy Book", icon: Puzzle, color: "from-indigo-400 to-purple-400", href: "/categories/busy-book" },
]

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export function CategoriesSection() {
  const [floatOffset, setFloatOffset] = useState(0)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffset(prev => (prev + 1) % 360)
    }, 50)

    const sparkleInterval = setInterval(() => {
      const newSparkle: Sparkle = {
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
    }, 1000)

    return () => {
      clearInterval(interval)
      clearInterval(sparkleInterval)
    }
  }, [])

  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
        
        {/* Decorative animated clouds */}
        <div className="absolute bottom-20 left-10 opacity-60" style={{ transform: `translateX(${Math.sin(floatOffset * 0.02) * 20}px)` }}>
          <svg viewBox="0 0 100 50" className="w-24 h-12 drop-shadow-md">
            <ellipse cx="50" cy="30" rx="30" ry="18" fill="white" />
            <ellipse cx="30" cy="32" rx="22" ry="15" fill="white" />
            <ellipse cx="70" cy="32" rx="22" ry="15" fill="white" />
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-6 opacity-60" style={{ transform: `translateX(${Math.sin(floatOffset * 0.02 + 1) * 15}px)` }}>
          <svg viewBox="0 0 100 50" className="w-16 h-10 drop-shadow-md">
            <ellipse cx="50" cy="30" rx="25" ry="15" fill="white" />
            <ellipse cx="32" cy="32" rx="18" ry="12" fill="white" />
            <ellipse cx="68" cy="32" rx="18" ry="12" fill="white" />
          </svg>
        </div>
        
        <div className="absolute top-20 right-20 opacity-60" style={{ transform: `translateX(${Math.sin(floatOffset * 0.02 + Math.PI) * 25}px)` }}>
          <svg viewBox="0 0 100 50" className="w-32 h-14 drop-shadow-md">
            <ellipse cx="50" cy="30" rx="32" ry="20" fill="white" />
            <ellipse cx="30" cy="32" rx="24" ry="16" fill="white" />
            <ellipse cx="70" cy="32" rx="24" ry="16" fill="white" />
          </svg>
        </div>
        
        <div className="absolute top-20 right-16 opacity-60" style={{ transform: `translateX(${Math.sin(floatOffset * 0.02 + Math.PI + 1) * 20}px)` }}>
          <svg viewBox="0 0 100 50" className="w-20 h-12 drop-shadow-md">
            <ellipse cx="50" cy="30" rx="28" ry="16" fill="white" />
            <ellipse cx="32" cy="32" rx="20" ry="13" fill="white" />
            <ellipse cx="68" cy="32" rx="20" ry="13" fill="white" />
          </svg>
        </div>
        
        {/* Cute Monsters floating around */}
        <div 
          className="absolute top-10 left-20 w-32 h-32 pointer-events-auto cursor-pointer hover:scale-125 transition-transform duration-300"
          style={{ 
            transform: `translateY(${Math.sin(floatOffset * 0.04) * 15}px) rotate(${Math.sin(floatOffset * 0.04) * 5}deg)`,
            filter: "drop-shadow(0 10px 20px rgba(139, 92, 246, 0.3))"
          }}
        >
          <img
            src="/image-removebg-preview.png"
            alt="Cute monster"
            className="w-full h-full object-contain"
          />
          <div 
            className="absolute -top-4 right-0 text-2xl animate-ping"
            style={{ animationDuration: "2s" }}
          >
            💜
          </div>
        </div>
        <div 
          className="absolute top-32 right-12 w-36 h-36 pointer-events-auto cursor-pointer hover:scale-125 transition-transform duration-300"
          style={{ 
            transform: `translateY(${Math.sin(floatOffset * 0.04 + Math.PI) * 18}px) rotate(${Math.sin(floatOffset * 0.04 + Math.PI) * 6}deg)`,
            filter: "drop-shadow(0 10px 20px rgba(236, 72, 153, 0.3))"
          }}
        >
          <img
            src="/image-removebg-preview (2).png"
            alt="Cute monster"
            className="w-full h-full object-contain"
          />
          <div 
            className="absolute -top-4 left-0 text-2xl animate-ping"
            style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
          >
            ⭐
          </div>
        </div>
        <div 
          className="absolute bottom-32 left-12 w-28 h-28 pointer-events-auto cursor-pointer hover:scale-125 transition-transform duration-300"
          style={{ 
            transform: `translateY(${Math.sin(floatOffset * 0.04 + Math.PI/2) * 12}px) rotate(${Math.sin(floatOffset * 0.04) * -7}deg)`,
            filter: "drop-shadow(0 10px 20px rgba(251, 191, 36, 0.3))"
          }}
        >
          <img
            src="/purple mosnter.png"
            alt="Cute monster"
            className="w-full h-full object-contain"
          />
          <div 
            className="absolute -top-4 right-0 text-xl animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            ✨
          </div>
        </div>
        <div 
          className="absolute bottom-40 right-16 w-32 h-32 pointer-events-auto cursor-pointer hover:scale-125 transition-transform duration-300"
          style={{ 
            transform: `translateY(${Math.sin(floatOffset * 0.04 + Math.PI * 1.5) * 14}px) rotate(${Math.sin(floatOffset * 0.04) * 8}deg)`,
            filter: "drop-shadow(0 10px 20px rgba(168, 85, 247, 0.3))"
          }}
        >
          <img
            src="/image-removebg-preview (1).png"
            alt="Cute monster"
            className="w-full h-full object-contain"
          />
          <div 
            className="absolute -top-4 left-0 text-2xl animate-ping"
            style={{ animationDuration: "3s" }}
          >
            💖
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-5xl font-bold text-center text-purple-600 mb-16 animate-pulse"
          style={{ 
            animationDuration: "3s",
            textShadow: "3px 3px 0px rgba(236, 72, 153, 0.3)"
          }}
        >
          Our Book Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isHovered = hoveredCard === index
            return (
              <Link
                key={index}
                href={category.href}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-purple-300 block cursor-pointer"
                style={{
                  transform: `translateY(${Math.sin((floatOffset + index * 40) * 0.02) * 5}px) ${isHovered ? 'translateY(-10px) rotate(-2deg) scale(1.05)' : ''}`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Decorative corner stars */}
                <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin" style={{ animationDuration: "3s" }}>
                  ⭐
                </div>
                <div className="absolute -bottom-2 -left-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  ✨
                </div>
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  style={{
                    transform: isHovered ? 'scale(1.2) rotate(5deg)' : ''
                  }}
                >
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h3>
                {/* Hearts appearing on hover */}
                {isHovered && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl animate-ping opacity-50">
                    💜
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}