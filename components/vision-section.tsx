import { Button } from "@/components/ui/button"
import Link from "next/link"

export function VisionSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-5xl font-bold text-purple-600 mb-8">Our Vision</h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          Ecosmart catalogue for FZ Smart Book is a dedicated platform showcasing a wide range of products related to FZ
          Smart Book. We are committed to providing innovative and eco-friendly solutions that inspire creativity and
          learning for all ages.
        </p>
        <Link href="#about">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 rounded-full bg-transparent"
          >
            Discover More
          </Button>
        </Link>
      </div>

      {/* Wavy Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,60 Q360,100 720,60 T1440,60 L1440,120 L0,120 Z" fill="#E0F2FE" />
        </svg>
      </div>
    </section>
  )
}
