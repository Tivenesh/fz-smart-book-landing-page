"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotButton } from "@/components/chatbot-button"
import Image from "next/image"

// Define types for state for better code quality
interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

interface Heart {
    id: number;
    x: number;
    y: number;
    duration: number;
}

export default function AboutPage() {
  const [floatOffset, setFloatOffset] = useState(0)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [hearts, setHearts] = useState<Heart[]>([])

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
    }, 800)

    // Floating hearts
    const heartInterval = setInterval(() => {
      const newHeart: Heart = {
        id: Math.random(),
        x: Math.random() * 100,
        y: 100,
        duration: Math.random() * 3 + 3
      }
      setHearts(prev => [...prev, newHeart])
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id))
      }, newHeart.duration * 1000)
    }, 1500)

    return () => {
      clearInterval(interval)
      clearInterval(sparkleInterval)
      clearInterval(heartInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white relative overflow-hidden">
      <Header />
      <ChatbotButton />
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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

        {/* Floating hearts */}
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="absolute text-2xl animate-float-up"
            style={{
              left: `${heart.x}%`,
              bottom: '0',
              animationDuration: `${heart.duration}s`
            }}
          >
            💖
          </div>
        ))}

        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />

        {/* Drifting clouds */}
        <div className="absolute top-24 left-1/4 opacity-60" style={{ transform: `translateX(${Math.sin(floatOffset * 0.02) * 20}px)` }}>
          <svg viewBox="0 0 100 50" className="w-32 h-16 drop-shadow-md">
            <ellipse cx="50" cy="30" rx="30" ry="18" fill="white" />
            <ellipse cx="30" cy="32" rx="22" ry="15" fill="white" />
            <ellipse cx="70" cy="32" rx="22" ry="15" fill="white" />
          </svg>
        </div>

        <div className="absolute top-32 right-1/4 opacity-60" style={{ transform: `translateX(${Math.sin(floatOffset * 0.02 + Math.PI) * 15}px)` }}>
          <svg viewBox="0 0 100 50" className="w-28 h-14 drop-shadow-md">
            <ellipse cx="50" cy="30" rx="28" ry="16" fill="white" />
            <ellipse cx="32" cy="32" rx="20" ry="13" fill="white" />
            <ellipse cx="68" cy="32" rx="20" ry="13" fill="white" />
          </svg>
        </div>
      </div>

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 
              className="text-5xl md:text-6xl font-black text-purple-600 mb-4 animate-pulse"
              style={{ 
                animationDuration: "3s",
                textShadow: "3px 3px 0px rgba(236, 72, 153, 0.3)",
                fontFamily: "'Comic Sans MS', cursive"
              }}
            >
              About FZ Smart Book ✨
            </h1>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-3xl animate-bounce" style={{ animationDuration: "2s" }}>⭐</span>
              <span className="text-3xl animate-bounce" style={{ animationDuration: "2.3s", animationDelay: "0.2s" }}>💜</span>
              <span className="text-3xl animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.4s" }}>⭐</span>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-[3rem] shadow-2xl p-8 md:p-12 relative overflow-hidden border-4 border-purple-200">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-200 rounded-full opacity-30 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-200 rounded-full opacity-30 -ml-24 -mb-24"></div>
              
              {/* Floating decorative stars */}
              <div 
                className="absolute top-10 right-10 text-4xl"
                style={{ 
                  transform: `rotate(${floatOffset * 2}deg)`,
                  animation: "pulse 2s infinite"
                }}
              >
                ⭐
              </div>
              <div 
                className="absolute bottom-10 left-10 text-3xl"
                style={{ 
                  transform: `rotate(${-floatOffset * 2}deg)`,
                  animation: "pulse 2.5s infinite"
                }}
              >
                ✨
              </div>

              {/* Story Content */}
              <div className="relative z-10">
                {/* Unicorn and Image Section */}
                <div className="flex items-center justify-center mb-8 relative">
                  {/* Floating Unicorn */}
                  <div 
                    className="absolute left-0 md:left-10 top-1/2 transform -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 cursor-pointer hover:scale-125 transition-all duration-300"
                    style={{ 
                      transform: `translateY(${Math.sin(floatOffset * 0.04) * 15 - 50}px) rotate(${Math.sin(floatOffset * 0.04) * 8}deg)`,
                      filter: "drop-shadow(0 10px 30px rgba(147, 51, 234, 0.4))"
                    }}
                  >
                    <Image
                      src="/unicorn.png"
                      alt="Magical Unicorn"
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                    <div 
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl animate-ping"
                      style={{ animationDuration: "2s" }}
                    >
                      🌈
                    </div>
                  </div>

                  <div className="relative w-full max-w-2xl">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-300">
                      <Image
                        src="/colorful-cartoon-bookstore-with-happy-children-rea.jpg"
                        alt="FZ Smart Book Story"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    {/* Decorative hearts around image */}
                    <div className="absolute -top-4 -right-4 text-3xl animate-bounce" style={{ animationDuration: "2s" }}>
                      💖
                    </div>
                    <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}>
                      💜
                    </div>
                  </div>

                  {/* Another cute monster */}
                  <div 
                    className="absolute right-0 md:right-10 top-1/2 transform -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 cursor-pointer hover:scale-125 transition-all duration-300"
                    style={{ 
                      transform: `translateY(${Math.sin(floatOffset * 0.04 + Math.PI) * 18 - 50}px) rotate(${Math.sin(floatOffset * 0.04 + Math.PI) * 6}deg)`,
                      filter: "drop-shadow(0 10px 30px rgba(236, 72, 153, 0.4))"
                    }}
                  >
                    <Image
                      src="/purple mosnter.png"
                      alt="Cute Monster"
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                    <div 
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl animate-ping"
                      style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
                    >
                      ⭐
                    </div>
                  </div>
                </div>

           <div className="prose prose-lg max-w-none">
  

    {/* Integrated and Cleaned Content (No more **) */}
    <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 text-center md:text-left">
        Welcome to the World of FZ Smart Book! 📚✨
    </h2>
    <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center md:text-left">
        We're not just a bookstore; we're a <strong>launchpad for little learners</strong> 🚀! Our mission is simple but mighty: to inspire a lifelong love for reading and exploration in children, one incredible book and educational product at a time. 🤩
    </p>

    <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3 text-center md:text-left">
        Our Superpower: Learning Through Play 🖍️
    </h3>
    <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center md:text-left">
        At FZ Smart Book, we specialize in amazing educational materials for kids from <strong>3 months old all the way up to 12 years</strong>—from tiny tots to pre-teen adventurers. 👧👦
    </p>
    <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed text-lg mb-6">
        <li>
            <strong>For the Littlest Explorers (3 months - 3 years):</strong> Think soft textures, bright colors, and lift-the-flap books that turn tummy time into a sensory playground. 🧸 We're here to help build those essential early brain connections! 🧠
        </li>
        <li>
            <strong>For the Curious Creators (4 - 7 years):</strong> This is where the magic happens! 🌈 Our shelves are stacked with activity books, grammar guides, and storytelling adventures that make learning <strong>phonics, grammar, and math</strong> feel like a thrilling game. ➕
        </li>
        <li>
            <strong>For the Young Scholars (8 - 12 years):</strong> We offer engaging reads and resources that support school lessons, foster independent thinking, and help them fall in love with complex topics, turning homework into a <strong>"can-do" challenge!</strong> 🌟
        </li>
    </ul>

    <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3 text-center md:text-left">
        Our Commitment: Eco-Smart & Sustainable 💚
    </h3>
    <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center md:text-left">
        We are committed to providing innovative and <strong>eco-friendly</strong> solutions that inspire creativity and learning for all ages. 🌳 Our new <strong>EcoSmart Catalogue</strong> makes your shopping experience <strong>fast, accurate, and sustainable</strong>. 📱 Get instant, detailed information on every book and help us reduce paper waste by supporting <strong>Green Technology</strong>! 🌍
    </p>
    <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center md:text-left">
        Come join the FZ Smart Book family, where every book is an open door to a world of endless discovery! 🥰
    </p>
</div>
                {/* Mission Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div 
                    className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-200 cursor-pointer group"
                    style={{
                      transform: `translateY(${Math.sin((floatOffset + 0) * 0.02) * 5}px)`
                    }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📚</div>
                    <h3 className="font-black text-purple-600 mb-3 text-xl">Quality Books</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Carefully curated educational materials</p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xl">✨</span>
                    </div>
                  </div>

                  <div 
                    className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-pink-200 cursor-pointer group"
                    style={{
                      transform: `translateY(${Math.sin((floatOffset + 120) * 0.02) * 5}px)`
                    }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🎨</div>
                    <h3 className="font-black text-pink-600 mb-3 text-xl">Fun Learning</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Interactive and engaging content</p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xl">💖</span>
                    </div>
                  </div>

                  <div 
                    className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-yellow-200 cursor-pointer group"
                    style={{
                      transform: `translateY(${Math.sin((floatOffset + 240) * 0.02) * 5}px)`
                    }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">❤️</div>
                    <h3 className="font-black text-yellow-600 mb-3 text-xl">Love for Reading</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Nurturing young minds daily</p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xl">⭐</span>
                    </div>
                  </div>
                </div>

                {/* Cute bottom decoration */}
                <div className="flex justify-center gap-4 mt-10">
                  <span className="text-3xl animate-spin" style={{ animationDuration: "3s" }}>⭐</span>
                  <span className="text-3xl animate-bounce" style={{ animationDuration: "2s" }}>💜</span>
                  <span className="text-3xl animate-pulse" style={{ animationDuration: "2.5s" }}>✨</span>
                  <span className="text-3xl animate-bounce" style={{ animationDuration: "2.3s", animationDelay: "0.2s" }}>💖</span>
                  <span className="text-3xl animate-spin" style={{ animationDuration: "3s" }}>🌟</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up linear forwards;
        }
      `}</style>
    </div>
  )
}