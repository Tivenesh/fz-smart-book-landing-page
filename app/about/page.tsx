import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotButton } from "@/components/chatbot-button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <ChatbotButton />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-purple-600 mb-4">About FZ Smart Book</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-20 -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200 rounded-full opacity-20 -ml-20 -mb-20"></div>

              {/* Story Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-full max-w-2xl">
                    <Image
                      src="/colorful-cartoon-bookstore-with-happy-children-rea.jpg"
                      alt="FZ Smart Book Story"
                      width={600}
                      height={300}
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Fz Smart Book, founded in 2023 by Ms. Sharifah Syafiera bt Syed Ghazalli under Fz Smart Shop, offers
                    interactive and engaging educational materials for children aged 3 months to 12 years.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    With a focus on learning through play, the brand creates fun, user-friendly, and high-quality
                    products that support parents and educators while nurturing a love for learning from an early age.
                  </p>
                </div>

                {/* Mission Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">📚</div>
                    <h3 className="font-bold text-purple-600 mb-2">Quality Books</h3>
                    <p className="text-sm text-gray-600">Carefully curated educational materials</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">🎨</div>
                    <h3 className="font-bold text-pink-600 mb-2">Fun Learning</h3>
                    <p className="text-sm text-gray-600">Interactive and engaging content</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-3">❤️</div>
                    <h3 className="font-bold text-yellow-600 mb-2">Love for Reading</h3>
                    <p className="text-sm text-gray-600">Nurturing young minds daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
