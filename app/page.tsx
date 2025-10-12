import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { CategoriesSection } from "@/components/categories-section"
import { ChatbotButton } from "@/components/chatbot-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VisionSection />
      <CategoriesSection />
      <ChatbotButton />
    </main>
  )
}
