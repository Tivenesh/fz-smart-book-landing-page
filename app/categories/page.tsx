import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotButton } from "@/components/chatbot-button"
import Link from "next/link"
import { motion } from "framer-motion"
const categories = [
  { name: "Buku Bergambar 3 Bahasa", slug: "buku-bergambar-3-bahasa", icon: "🌍", color: "from-blue-400 to-blue-600" },
  {
    name: "Buku Bergambar 2 Bahasa",
    slug: "buku-bergambar-2-bahasa",
    icon: "📖",
    color: "from-purple-400 to-purple-600",
  },
  { name: "Buku Pasti Mengenal", slug: "buku-pasti-mengenal", icon: "🎯", color: "from-pink-400 to-pink-600" },
  {
    name: "Buku Sayangku Mari Mengenal",
    slug: "buku-sayangku-mari-mengenal",
    icon: "💝",
    color: "from-red-400 to-red-600",
  },
  { name: "Buku Lets Learn Series", slug: "buku-lets-learn-series", icon: "🎓", color: "from-green-400 to-green-600" },
  {
    name: "Buku Aktiviti Matematik 1-4",
    slug: "buku-aktiviti-matematik",
    icon: "🔢",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Buku English Reading Book 1-4",
    slug: "buku-english-reading-book",
    icon: "📚",
    color: "from-indigo-400 to-indigo-600",
  },
  { name: "Shape Story Book 1-8", slug: "shape-story-book", icon: "🔷", color: "from-teal-400 to-teal-600" },
  {
    name: "Buku Cerita Bahasa Melayu",
    slug: "buku-cerita-bahasa-melayu",
    icon: "📕",
    color: "from-orange-400 to-orange-600",
  },
  { name: "Word Search 1-4", slug: "word-search", icon: "🔍", color: "from-cyan-400 to-cyan-600" },
  { name: "Sound Book", slug: "sound-book", icon: "🔊", color: "from-violet-400 to-violet-600" },
  { name: "My First Book", slug: "my-first-book", icon: "👶", color: "from-rose-400 to-rose-600" },
  { name: "Busy Book", slug: "busy-book", icon: "✂️", color: "from-lime-400 to-lime-600" },
  { name: "Sticker Book", slug: "sticker-book", icon: "⭐", color: "from-amber-400 to-amber-600" },
  { name: "Snail Snuffing Toys", slug: "snail-snuffing-toys", icon: "🐌", color: "from-emerald-400 to-emerald-600" },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <ChatbotButton />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-purple-600 mb-4">Our Book Categories</h1>
            <p className="text-gray-600 text-lg">Explore our wide range of educational books for children</p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="group">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full flex flex-col items-center justify-center text-center transform hover:-translate-y-2">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <div className="mt-auto pt-4">
                    <span className="text-purple-600 text-sm font-medium group-hover:underline">View Books →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
