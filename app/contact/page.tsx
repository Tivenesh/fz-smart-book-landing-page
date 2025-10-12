"use client"

import { useState, useEffect, FormEvent } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotButton } from "@/components/chatbot-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { motion } from "framer-motion"
// Define types for state for better code quality
interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
  const [floatOffset, setFloatOffset] = useState(0)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

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

    return () => {
      clearInterval(interval)
      clearInterval(sparkleInterval)
    }
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // NOTE: alert() is not recommended in production apps. This is just for demonstration.
    alert("Thank you for your message! We'll get back to you soon. 💜")
    setFormData({ name: "", email: "", message: "" })
  }

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
        {/* Floating cute monsters */}
        <div 
          className="absolute top-20 left-16 w-32 h-32 pointer-events-auto cursor-pointer hover:scale-125 transition-all duration-300"
          style={{ 
            transform: `translateY(${Math.sin(floatOffset * 0.04) * 15}px) rotate(${Math.sin(floatOffset * 0.04) * 5}deg)`,
            filter: "drop-shadow(0 10px 20px rgba(147, 51, 234, 0.3))"
          }}
        >
          <Image
            src="/image-removebg-preview.png"
            alt="Cute monster"
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
          <div 
            className="absolute -top-4 right-0 text-2xl animate-ping"
            style={{ animationDuration: "2s" }}
          >
            💌
          </div>
        </div>
        <div 
          className="absolute bottom-32 right-16 w-36 h-36 pointer-events-auto cursor-pointer hover:scale-125 transition-all duration-300"
          style={{ 
            transform: `translateY(${Math.sin(floatOffset * 0.04 + Math.PI) * 18}px) rotate(${Math.sin(floatOffset * 0.04 + Math.PI) * 6}deg)`,
            filter: "drop-shadow(0 10px 20px rgba(236, 72, 153, 0.3))"
          }}
        >
          <Image
            src="/image-removebg-preview (2).png"
            alt="Cute monster"
            width={144}
            height={144}
            className="w-full h-full object-contain"
          />
          <div 
            className="absolute -top-4 left-0 text-2xl animate-ping"
            style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
          >
            ✉️
          </div>
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
              Get In Touch! 💌
            </h1>
            <p className="text-gray-700 text-xl font-bold mb-4">We'd love to hear from you!</p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-3xl animate-bounce" style={{ animationDuration: "2s" }}>✨</span>
              <span className="text-3xl animate-bounce" style={{ animationDuration: "2.3s", animationDelay: "0.2s" }}>💜</span>
              <span className="text-3xl animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.4s" }}>✨</span>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Contact Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-[3rem] shadow-2xl p-8 border-4 border-purple-200 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full opacity-30 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-200 rounded-full opacity-30 -ml-16 -mb-16"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-purple-600 mb-6 flex items-center gap-2">
                    <span className="text-3xl">📝</span>
                    Send us a message!
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                        <span>👤</span> Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full rounded-2xl border-2 border-purple-200 focus:border-purple-400 px-4 py-3 outline-none transition-all duration-300 focus:shadow-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                        <span>📧</span> Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full rounded-2xl border-2 border-purple-200 focus:border-purple-400 px-4 py-3 outline-none transition-all duration-300 focus:shadow-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                        <span>💬</span> Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what you're thinking..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full rounded-2xl border-2 border-purple-200 focus:border-purple-400 px-4 py-3 outline-none transition-all duration-300 focus:shadow-lg resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black py-4 rounded-full text-lg shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                      style={{
                        boxShadow: "0 10px 40px rgba(236, 72, 153, 0.4)"
                      }}
                    >
                      Send Message ✨
                    </Button>
                  </form>
                </div>
              </div>
              {/* Illustration */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-purple-200">
                    <Image
                      src="/cute-cartoon-mailbox-with-letters-and-envelopes-fl.jpg"
                      alt="Contact Us"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                                    
                  {/* Floating envelope */}
                  <div 
                    className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full p-6 shadow-2xl cursor-pointer hover:scale-125 transition-all duration-300"
                    style={{
                      transform: `translateY(${Math.sin(floatOffset * 0.05) * 8}px)`
                    }}
                  >
                    <span className="text-5xl">✉️</span>
                  </div>
                  {/* Decorative hearts */}
                  <div 
                    className="absolute -top-4 -left-4 text-4xl animate-bounce"
                    style={{ animationDuration: "2s" }}
                  >
                    💖
                  </div>
                  <div 
                    className="absolute top-10 -right-4 text-3xl animate-bounce"
                    style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}
                  >
                    ⭐
                  </div>
                </div>
              </div>
            </div>
             {/* Contact Info Cards */}
             <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div 
                className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-200 cursor-pointer group"
                style={{
                  transform: `translateY(${Math.sin((floatOffset + 0) * 0.02) * 5}px)`
                }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📍</div>
                <h3 className="font-black text-purple-600 mb-3 text-xl">Visit Us</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Seksyen U12, Shah Alam</p>
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
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📧</div>
                <h3 className="font-black text-pink-600 mb-3 text-xl">Email Us</h3>
                <p className="text-sm text-gray-600 leading-relaxed">info@fzsmartbook.com</p>
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
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📱</div>
                <h3 className="font-black text-yellow-600 mb-3 text-xl">Call Us</h3>
                <p className="text-sm text-gray-600 leading-relaxed">+60 12-345 6789</p>
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
              <span className="text-3xl animate-bounce" style={{ animationDuration: "2.3s", animationDelay: "0.2s" }}>💌</span>
              <span className="text-3xl animate-spin" style={{ animationDuration: "3s" }}>🌟</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
