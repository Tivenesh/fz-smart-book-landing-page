"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotButton } from "@/components/chatbot-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <ChatbotButton />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-purple-600 mb-4">Get In Touch</h1>
            <p className="text-gray-600 text-lg">We'd love to hear from you!</p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl border-2 border-purple-200 focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl border-2 border-purple-200 focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what you're thinking..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="rounded-xl border-2 border-purple-200 focus:border-purple-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Illustration */}
              <div className="hidden md:block">
                <div className="relative">
                  <Image
                    src="/cute-cartoon-mailbox-with-letters-and-envelopes-fl.jpg"
                    alt="Contact Us"
                    width={400}
                    height={400}
                    className="rounded-3xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-yellow-300 rounded-full p-4 shadow-lg animate-bounce">
                    <span className="text-4xl">✉️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="font-bold text-purple-600 mb-2">Visit Us</h3>
                <p className="text-sm text-gray-600">Seksyen U12, Shah Alam</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">📧</div>
                <h3 className="font-bold text-pink-600 mb-2">Email Us</h3>
                <p className="text-sm text-gray-600">info@fzsmartbook.com</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold text-yellow-600 mb-2">Call Us</h3>
                <p className="text-sm text-gray-600">+60 12-345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
