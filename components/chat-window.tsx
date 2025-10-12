"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

interface Message {
  text: string
  sender: "user" | "bot"
}

interface ChatWindowProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          text: "Hi! I'm your friendly book assistant. You can ask me about a book's price or its location (rack number).",
          sender: "bot",
        },
      ])
    }
  }, [isOpen])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    const userMessage: Message = { text: inputValue, sender: "user" }
    
    const lowerCaseInput = inputValue.toLowerCase()

    let botResponse: Message;

    if (lowerCaseInput.includes("price") && lowerCaseInput.includes("sound book")) {
      botResponse = { text: "The Sound Book is RM 35.00.", sender: "bot" }
    } else if (
      (lowerCaseInput.includes("where") || lowerCaseInput.includes("rack")) &&
      lowerCaseInput.includes("busy book")
    ) {
      botResponse = { text: "You can find the Busy Book on Rack R13!", sender: "bot" }
    } else if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
      botResponse = { text: "Hello! How can I help you find the perfect book today?", sender: "bot" }
    } else {
      botResponse = {
        text: "I'm sorry, I can only help with questions about book prices and rack numbers right now. Try asking 'What is the price of the Sticker Book?'",
        sender: "bot",
      }
    }
    
    setMessages((prevMessages) => [...prevMessages, userMessage, botResponse]);
    setInputValue("")
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed bottom-24 right-8 w-96 h-[60vh] bg-white rounded-2xl shadow-2xl flex flex-col transition-transform duration-300 transform animate-in slide-in-from-bottom-4 z-50">
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 flex justify-between items-center rounded-t-2xl">
        <h2 className="font-bold text-lg">FZ Smart Bot</h2>
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </header>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-lg p-3 max-w-xs ${
                message.sender === "user"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Ask about a book..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  )
}