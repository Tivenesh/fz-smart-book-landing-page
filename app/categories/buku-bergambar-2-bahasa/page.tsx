import { Header } from "@/components/header"
import { ChatbotButton } from "@/components/chatbot-button"
import { BookGrid } from "@/components/book-grid"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BukuBergambar2BahasaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Header />

      {/* Breadcrumb and Title Section */}
      <div className="container mx-auto px-4 pt-32 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Halaman Utama
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">Buku Bergambar 2 Bahasa</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Koleksi buku bergambar dwibahasa yang menarik untuk membantu anak-anak belajar dua bahasa sekaligus dengan
            cara yang menyeronokkan!
          </p>
        </div>
      </div>

      {/* Books Grid */}
      <BookGrid />

      <ChatbotButton />
    </main>
  )
}
