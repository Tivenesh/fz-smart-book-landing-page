import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-500 to-purple-600 pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side plants */}
        <div className="absolute left-0 top-20 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-400 opacity-80">
            <path d="M20,80 Q20,60 30,50 Q40,40 50,45 Q60,50 50,60 Q40,70 30,75 Z" fill="currentColor" />
            <path d="M25,85 Q25,70 35,60 Q45,50 55,55 Q65,60 55,70 Q45,80 35,85 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Right side plants */}
        <div className="absolute right-0 top-40 w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400 opacity-80">
            <path d="M50,20 L55,40 L60,20 L65,40 L70,20 L75,40 L80,20 L80,80 L50,80 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Clouds */}
        <div className="absolute top-32 left-20 w-24 h-12 bg-white rounded-full opacity-70" />
        <div className="absolute top-32 left-16 w-16 h-10 bg-white rounded-full opacity-70" />
        <div className="absolute top-40 right-32 w-32 h-14 bg-white rounded-full opacity-70" />
        <div className="absolute top-40 right-28 w-20 h-12 bg-white rounded-full opacity-70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">FZ SMART BOOK</h1>
        <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-md font-medium">
          Explore the World of EcoSmart Catalogue
        </p>

        {/* Cartoon Animals */}
        <div className="relative mb-8 flex justify-center gap-8">
          {/* Tiger */}
          <div className="w-32 h-32 relative animate-bounce" style={{ animationDuration: "3s" }}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="35" fill="#FF8C42" />
              <circle cx="40" cy="45" r="5" fill="#000" />
              <circle cx="60" cy="45" r="5" fill="#000" />
              <path d="M35,60 Q50,70 65,60" stroke="#000" strokeWidth="3" fill="none" />
              <circle cx="30" cy="30" r="8" fill="#FF8C42" />
              <circle cx="70" cy="30" r="8" fill="#FF8C42" />
            </svg>
          </div>

          {/* Fox */}
          <div
            className="w-32 h-32 relative animate-bounce"
            style={{ animationDuration: "3s", animationDelay: "0.5s" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="55" r="30" fill="#FF6B35" />
              <polygon points="30,30 40,50 35,50" fill="#FF6B35" />
              <polygon points="70,30 60,50 65,50" fill="#FF6B35" />
              <circle cx="42" cy="50" r="4" fill="#000" />
              <circle cx="58" cy="50" r="4" fill="#000" />
              <path d="M40,65 Q50,72 60,65" stroke="#000" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        <Link href="#products">
          <Button
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            View All Products
          </Button>
        </Link>
      </div>

      {/* Wavy Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,60 Q360,0 720,60 T1440,60 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
