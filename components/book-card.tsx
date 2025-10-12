"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Book {
  id: number
  title: string
  price: number
  image: string
}

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-4 border-purple-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Book Image */}
      <div className="relative h-72 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
        <Image
          src={book.image || "/placeholder.svg"}
          alt={book.title}
          fill
          className={`object-cover transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        {/* Decorative corner badge */}
        <div className="absolute top-3 right-3 bg-yellow-400 text-purple-700 font-bold text-xs px-3 py-1 rounded-full shadow-md rotate-12">
          Bestseller!
        </div>
      </div>

      {/* Book Details */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 min-h-[3.5rem]">{book.title}</h3>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl px-4 py-2 rounded-full shadow-md">
            RM {book.price.toFixed(2)}
          </div>
        </div>

        <Link href={`/categories/buku-bergambar-2-bahasa/${book.id}`}>
          <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-bold py-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
            Lihat Butiran
          </Button>
        </Link>
      </div>

      {/* Decorative bottom wave */}
      <div className="h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"></div>
    </div>
  )
}
