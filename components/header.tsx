import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold text-purple-600">FZ SMART BOOK</div>
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/categories" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            All Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
