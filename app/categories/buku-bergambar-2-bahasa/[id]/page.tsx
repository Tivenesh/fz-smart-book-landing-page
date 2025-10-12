import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingCart } from "lucide-react"

// Sample book data - in a real app, this would come from a database
const books = [
  {
    id: 1,
    title: "Buku Pasti Mengenal",
    price: 9.0,
    rack: "R03",
    description:
      "Buku bergambar 2 in 1 Bahasa Melayu dan English. ABC , 123, makanan sayur sayuran, pekerjaan, haiwan, yang sesuai untuk umur 1 tahun dan keatas.",
    image: "/colorful-children-s-book-cover-with-forest-animals.jpg",
  },
  {
    id: 2,
    title: "Buah-Buahan Tempatan / Local Fruits",
    price: 23.9,
    rack: "R05",
    description:
      "Buku bergambar 2 in 1 Bahasa Melayu dan English. Mengenali pelbagai buah-buahan tempatan dengan ilustrasi yang menarik dan berwarna-warni.",
    image: "/colorful-children-s-book-cover-with-tropical-fruit.jpg",
  },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === Number.parseInt(params.id)) || books[0]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      {/* Header with back button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/categories/buku-bergambar-2-bahasa"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Senarai Buku
        </Link>
      </div>

      {/* Product Detail Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-200">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Book Image */}
            <div className="relative h-[500px] md:h-auto bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 p-12 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-yellow-300 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-pink-300 rounded-full opacity-50 blur-xl"></div>
            </div>

            {/* Right: Product Information */}
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              {/* Title */}
              <h1 className="font-black text-4xl md:text-5xl text-gray-800 leading-tight">{book.title}</h1>

              {/* Price */}
              <div className="inline-flex items-center gap-3">
                <span className="text-gray-600 font-semibold text-lg">Harga:</span>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-3xl px-6 py-3 rounded-2xl shadow-lg">
                  RM {book.price.toFixed(2)}
                </div>
              </div>

              {/* Rack Number */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-semibold text-lg">Rak:</span>
                <div className="bg-yellow-400 text-purple-700 font-bold text-xl px-5 py-2 rounded-xl shadow-md">
                  {book.rack}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h2 className="text-gray-700 font-bold text-xl">Penerangan:</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{book.description}</p>
              </div>

              {/* Add to Cart Button */}
              <Button className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-bold text-xl py-7 px-10 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                Tambah ke Troli
              </Button>

              {/* Additional Info */}
              <div className="pt-6 border-t-2 border-purple-100">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Sesuai untuk 1+ tahun
                  </span>
                  <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Dwibahasa
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Bergambar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bottom wave */}
          <div className="h-3 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"></div>
        </div>
      </div>
    </div>
  )
}
