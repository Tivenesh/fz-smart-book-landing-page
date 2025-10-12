"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { ChatWindow } from "./chat-window"

export function ChatbotButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={toggleChat}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="AI Chatbot"
        >
          {/* Robot Face */}
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-purple-600" strokeWidth={2.5} />
            </div>
            {/* Robot eyes */}
            <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-purple-600 rounded-full" />
            <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-purple-600 rounded-full" />
          </div>

          {/* Tooltip */}
          {showTooltip && !isChatOpen && (
            <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2">
              Ask me anything!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
            </div>
          )}

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-20" />
        </button>
      </div>
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
    </>
  )
}