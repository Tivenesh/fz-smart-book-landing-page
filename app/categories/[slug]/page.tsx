import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotButton } from "@/components/chatbot-button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Category data mapping
const categoryData: Record<string, { name: string; description: string }> = {
  "buku-bergambar-3-bahasa": {
    name: "Buku Bergambar 3 Bahasa",
    description: "Koleksi buku bergambar trilingual yang membantu anak-anak menguasai tiga bahasa sekaligus!",
  },
  "buku-bergambar-2-bahasa": {
    name: "Buku Bergambar 2 Bahasa",
    description: "Koleksi buku bergambar dwibahasa yang menarik untuk membantu anak-anak belajar dua bahasa sekaligus.",
  },
  "buku-pasti-mengenal": {
    name: "Buku Pasti Mengenal",
    description: "Siri buku pengenalan asas untuk kanak-kanak mengenali objek, warna, bentuk dan banyak lagi.",
  },
  "buku-sayangku-mari-mengenal": {
    name: "Buku Sayangku Mari Mengenal",
    description: "Buku pembelajaran yang penuh kasih sayang untuk mengenalkan konsep asas kepada anak-anak.",
  },
  "buku-lets-learn-series": {
    name: "Buku Lets Learn Series",
    description: "Siri pembelajaran interaktif yang menyeronokkan untuk pelbagai topik pendidikan.",
  },
  "buku-aktiviti-matematik": {
    name: "Buku Aktiviti Matematik 1-4",
    description: "Latihan matematik yang menarik untuk membantu anak-anak menguasai kemahiran asas matematik.",
  },
  "buku-english-reading-book": {
    name: "Buku English Reading Book 1-4",
    description: "Koleksi buku bacaan Bahasa Inggeris yang sesuai untuk pembaca awal.",
  },
  "shape-story-book": {
    name: "Shape Story Book 1-8",
    description: "Cerita menarik yang mengajar tentang bentuk geometri dengan cara yang kreatif.",
  },
  "buku-cerita-bahasa-melayu": {
    name: "Buku Cerita Bahasa Melayu",
    description: "Koleksi cerita Bahasa Melayu yang menarik untuk memupuk minat membaca.",
  },
  "word-search": {
    name: "Word Search 1-4",
    description: "Aktiviti carian perkataan yang mencabar dan menyeronokkan untuk meningkatkan perbendaharaan kata.",
  },
  "sound-book": {
    name: "Sound Book",
    description: "Buku interaktif dengan bunyi yang menarik perhatian dan merangsang deria pendengaran.",
  },
  "my-first-book": {
    name: "My First Book",
    description: "Buku pertama yang sempurna untuk bayi dan kanak-kanak kecil.",
  },
  "busy-book": {
    name: "Busy Book",
    description: "Buku aktiviti yang penuh dengan tugasan menarik untuk mengasah kemahiran motor halus.",
  },
  "sticker-book": {
    name: "Sticker Book",
    description: "Buku pelekat yang kreatif dan menyeronokkan untuk pembelajaran sambil bermain.",
  },
  "snail-snuffing-toys": {
    name: "Snail Snuffing Toys",
    description: "Mainan pendidikan yang unik dan menarik untuk perkembangan kanak-kanak.",
  },
}

// Sample books for each category
const sampleBooks = [
  {
    id: 1,
    title: "Buku Bergambar My Early Amazing Picture Books Board",
    price: 23.9,
    rack: "R02",
    image: "/colorful-children-s-book-cover-with-forest-animals.jpg",
  },
  {
    id: 2,
    title: "Buah-Buahan Tempatan / Local Fruits",
    price: 23.9,
    rack: "R02",
    image: "/colorful-children-s-book-cover-with-tropical-fruit.jpg",
  },
  {
    id: 3,
    title: "Keluarga Saya / My Family",
    price: 23.9,
    rack: "R02",
    image: "/colorful-children-s-book-cover-with-happy-family-i.jpg",
  },
  {
    id: 4,
    title: "Warna-Warni / Colors",
    price: 23.9,
    rack: "R02",
    image: "/colorful-children-s-book-cover-with-rainbow-and-co.jpg",
  },
]

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryData[params.slug] || {
    name: "Kategori Buku",
    description: "Koleksi buku pilihan untuk pembelajaran anak-anak.",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Header />
      <ChatbotButton />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Semua Kategori
          </Link>

          {/* Category Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">{category.name}</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">{category.description}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {sampleBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-3 line-clamp-2 min-h-[3.5rem]">{book.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-purple-600">RM {book.price.toFixed(2)}</span>
                    <span className="bg-yellow-400 text-purple-700 font-bold px-3 py-1 rounded-lg text-sm">
                      {book.rack}
                    </span>
                  </div>
                  <Link href={`/categories/${params.slug}/${book.id}`}>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      Lihat Butiran
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
