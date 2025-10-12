import { BookOpen, Languages, Baby, Calculator, BookA, Shapes, Search, Volume2, Puzzle } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Buku Bergambar 3 Bahasa",
    icon: Languages,
    color: "from-yellow-400 to-orange-400",
    href: "/categories/buku-bergambar-3-bahasa",
  },
  {
    title: "Buku Bergambar 2 Bahasa",
    icon: BookOpen,
    color: "from-pink-400 to-rose-400",
    href: "/categories/buku-bergambar-2-bahasa",
  },
  {
    title: "Buku Pasti Mengenal",
    icon: Baby,
    color: "from-green-400 to-emerald-400",
    href: "/categories/buku-pasti-mengenal",
  },
  {
    title: "Buku Aktiviti Matematik",
    icon: Calculator,
    color: "from-blue-400 to-cyan-400",
    href: "/categories/buku-aktiviti-matematik",
  },
  {
    title: "English Reading Book",
    icon: BookA,
    color: "from-purple-400 to-violet-400",
    href: "/categories/english-reading-book",
  },
  {
    title: "Shape Story Book",
    icon: Shapes,
    color: "from-red-400 to-pink-400",
    href: "/categories/shape-story-book",
  },
  {
    title: "Word Search",
    icon: Search,
    color: "from-teal-400 to-cyan-400",
    href: "/categories/word-search",
  },
  {
    title: "Sound Book",
    icon: Volume2,
    color: "from-orange-400 to-amber-400",
    href: "/categories/sound-book",
  },
  {
    title: "Busy Book",
    icon: Puzzle,
    color: "from-indigo-400 to-purple-400",
    href: "/categories/busy-book",
  },
]

export function CategoriesSection() {
  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-purple-600 mb-16">Our Book Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href={category.href}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-transparent hover:border-purple-300 block"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Decorative clouds */}
      <div className="absolute bottom-20 left-10 w-24 h-12 bg-white rounded-full opacity-50 blur-sm" />
      <div className="absolute bottom-20 left-6 w-16 h-10 bg-white rounded-full opacity-50 blur-sm" />
      <div className="absolute top-20 right-20 w-32 h-14 bg-white rounded-full opacity-50 blur-sm" />
      <div className="absolute top-20 right-16 w-20 h-12 bg-white rounded-full opacity-50 blur-sm" />
    </section>
  )
}
