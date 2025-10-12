import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-purple-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-start">
            <div className="text-3xl font-bold mb-4">FZ SMART BOOK</div>
            <p className="text-purple-200 text-sm">
              Nurturing young minds through quality educational materials since 2023.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-purple-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/categories" className="text-purple-200 hover:text-white transition-colors">
                All Products
              </Link>
              <Link href="/about" className="text-purple-200 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-purple-200 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl">📘</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl">📷</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl">🐦</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-600 mt-8 pt-8 text-center">
          <p className="text-purple-200 text-sm">© 2025 FZ SMART BOOK. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
