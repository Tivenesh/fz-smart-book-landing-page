import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotButton } from "@/components/chatbot-button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ALL } from "dns"

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
// --- ALL_BOOKS_DATA ---
// NOTE: I've assigned a default price of 23.9 and rack R02 to items where
// specific data wasn't provided, adjust these values as needed for accuracy.

const All_BookData = [
  // --- Kategori: buku-bergambar-3-bahasa ---
  {
    id: 1,
    title: "BUKU BERGAMBAR 3 BAHASA (VERSION 1)",
    price: 23.9,
    rack: "R01",
    image: "/BUKU BERGAMBAR 3 BAHASA.jpg",
    categorySlug: "buku-bergambar-3-bahasa",
  },
  {
    id: 2,
    title: "BUKU BERGAMBAR 3 BAHASA (VERSION 2)",
    price: 23.9,
    rack: "R01",
    image: "/BUKU BERGAMBAR 3 BAHASA (2).jpg",
    categorySlug: "buku-bergambar-3-bahasa",
  },

  // --- Kategori: buku-pasti-mengenal ---
  {
    id: 3,
    title: "PASTI MENGENAL ABC",
    price: 18.5,
    rack: "R03",
    image: "/PASTI MENGENAL ABC.jpg",
    categorySlug: "buku-pasti-mengenal",
  },
  {
    id: 4,
    title: "PASTI MENGENAL 123",
    price: 18.5,
    rack: "R03",
    image: "/PASTI MENGENAL 123.jpg",
    categorySlug: "buku-pasti-mengenal",
  },
  {
    id: 5,
    title: "PASTI MENGENAL BUAH-BUAHAN",
    price: 18.5,
    rack: "R03",
    image: "/PASTI MENGENAL BUAH-BUAHAN.jpg",
    categorySlug: "buku-pasti-mengenal",
  },
  {
    id: 6,
    title: "PASTI MENGENAL HAIWAN",
    price: 18.5,
    rack: "R03",
    image: "/PASTI MENGENAL HAIWAN.jpg",
    categorySlug: "buku-pasti-mengenal",
  },
  {
    id: 7,
    title: "PASTI MENGENAL PEKERJAAN",
    price: 18.5,
    rack: "R03",
    image: "/PASTI MENGENAL PERKEJAAN.jpg",
    categorySlug: "buku-pasti-mengenal",
  },

  // --- Kategori: buku-aktiviti-matematik ---
  {
    id: 8,
    title: "BUKU AKTIVITI MATEMATIK - 1",
    price: 15.0,
    rack: "R05",
    image: "/BUKU AKTIVITI MATEMATIK -1.jpg",
    categorySlug: "buku-aktiviti-matematik",
  },
  {
    id: 9,
    title: "BUKU AKTIVITI MATEMATIK - 2",
    price: 15.0,
    rack: "R05",
    image: "/BUKU AKTIVITI MATEMATIK -2.jpg",
    categorySlug: "buku-aktiviti-matematik",
  },
  {
    id: 10,
    title: "BUKU AKTIVITI MATEMATIK - 3",
    price: 15.0,
    rack: "R05",
    image: "/BUKU AKTIVITI MATEMATIK -3.jpg",
    categorySlug: "buku-aktiviti-matematik",
  },
  {
    id: 11,
    title: "BUKU AKTIVITI MATEMATIK - 4",
    price: 15.0,
    rack: "R05",
    image: "/BUKU AKTIVITI MATEMATIK -4.jpg",
    categorySlug: "buku-aktiviti-matematik",
  },

  // --- Kategori: buku-english-reading-book ---
  {
    id: 12,
    title: "ENGLISH READING BOOK - 1",
    price: 16.5,
    rack: "R06",
    image: "/ENGLISH READING BOOK -1.jpg",
    categorySlug: "buku-english-reading-book",
  },
  {
    id: 13,
    title: "ENGLISH READING BOOK - 2",
    price: 16.5,
    rack: "R06",
    image: "/ENGLISH READING BOOK -2.jpg",
    categorySlug: "buku-english-reading-book",
  },
  {
    id: 14,
    title: "ENGLISH READING BOOK - 3",
    price: 16.5,
    rack: "R06",
    image: "/ENGLISH READING BOOK -3.jpg",
    categorySlug: "buku-english-reading-book",
  },
  {
    id: 15,
    title: "ENGLISH READING BOOK - 4",
    price: 16.5,
    rack: "R06",
    image: "/ENGLISH READING BOOK -4.jpg",
    categorySlug: "buku-english-reading-book",
  },

  // --- Kategori: buku-sayangku-mari-mengenal ---
  {
    id: 16,
    title: "SAYANGKU MARI MENGENAL ABC",
    price: 19.9,
    rack: "R04",
    image: "/SAYANGKU MARI MENGENAL ABC.jpg",
    categorySlug: "buku-sayangku-mari-mengenal",
  },
  {
    id: 17,
    title: "SAYANGKU MARI MENGENAL 123",
    price: 19.9,
    rack: "R04",
    image: "/SAYANGKU MARI MENGENAL 123.jpg",
    categorySlug: "buku-sayangku-mari-mengenal",
  },
  {
    id: 18,
    title: "SAYANGKU MARI MENGENAL HAIWAN",
    price: 19.9,
    rack: "R04",
    image: "/SAYANGKU MARI MENGENAL HAIWAN.jpg",
    categorySlug: "buku-sayangku-mari-mengenal",
  },
  {
    id: 19,
    title: "SAYANGKU MARI MENGENAL JAWI",
    price: 19.9,
    rack: "R04",
    image: "/SAYANGKU MARI MENGENAL JAWI.jpg",
    categorySlug: "buku-sayangku-mari-mengenal",
  },

  // --- Kategori: buku-lets-learn-series ---
  {
    id: 20,
    title: "LET’S LEARN 128 ANIMALS",
    price: 25.0,
    rack: "R07",
    image: "/LET’S LEARN 128 ANIMALS.jpg",
    categorySlug: "buku-lets-learn-series",
  },
  {
    id: 21,
    title: "LET’S LEARN 128 WORDS",
    price: 25.0,
    rack: "R07",
    image: "/LET’S LEARN 128 WORDS.jpg",
    categorySlug: "buku-lets-learn-series",
  },
  {
    id: 22,
    title: "LET’S LEARN ABC ,123, MY BODY",
    price: 25.0,
    rack: "R07",
    image: "/LET’S LEARN ABC ,123, MY BODY.jpg",
    categorySlug: "buku-lets-learn-series",
  },

  // --- Kategori: shape-story-book ---
  { id: 23, title: "SHAPE STORY BOOK 1", price: 12.0, rack: "R08", image: "/SHAPE STORY BOOK 1.jpg", categorySlug: "shape-story-book" },
  { id: 24, title: "SHAPE STORY BOOK 2", price: 12.0, rack: "R08", image: "/SHAPE STORY BOOK 2.jpg", categorySlug: "shape-story-book" },
  { id: 25, title: "SHAPE STORY BOOK 3", price: 12.0, rack: "R08", image: "/SHAPE STORY BOOK 3.jpg", categorySlug: "shape-story-book" },
  { id: 26, title: "SHAPE STORY BOOK 4", price: 12.0, rack: "R08", image: "/SHAPE STORY BOOK 4.jpg", categorySlug: "shape-story-book" },
  { id: 27, title: "SHAPE STORY BOOK 5", price: 12.0, rack: "R08", image: "/SHAPE STORY BOOK 5.jpg", categorySlug: "shape-story-book" },
  { id: 28, title: "SHAPE STORY BOOK 6", price: 12.0, rack: "R08", image: "/SHAPE STORY BOOK 6.jpg", categorySlug: "shape-story-book" },
  { id: 29, title: "SHAPE STORY BOOK 7", price: 12.0, rack: "R08", image: "/SHAPE STORY BOOK 7.jpg", categorySlug: "shape-story-book" },

  // --- Kategori: buku-cerita-bahasa-melayu ---
  { id: 30, title: "EMPAT SAHABAT KARIB", price: 14.5, rack: "R09", image: "/EMPAT SAHABAT KARIB.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 31, title: "KELDAI YANG TIDAK MEMPUNYAI OTAK", price: 14.5, rack: "R09", image: "/KELDAI YANG TIDAK MEMPUNYAI OTAK.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 32, title: "KURA-KURA YANG TIDAK MENDENGAR NASIHAT", price: 14.5, rack: "R09", image: "/KURA-KURA YANH TIDAK MENDENGAR NASIHAT.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 33, title: "SANG MONYET DAN SANG BUAYA (1)", price: 14.5, rack: "R09", image: "/SANG MONYET DAN SANG BUAYA(1).jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 34, title: "SANG MONYET DAN SANG BUAYA", price: 14.5, rack: "R09", image: "/SANG MONYET DAN SANG BUAYA.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 35, title: "SANG SERIGALA DAN SANG BANGAU", price: 14.5, rack: "R09", image: "/SANG SERIGALA DAN SANG BANGAU.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 36, title: "SANG SINGA DAN SANG ARNAB", price: 14.5, rack: "R09", image: "/SANG SINGA DAN SANG ARNAB.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 37, title: "TERIMA KASIH AYAH", price: 14.5, rack: "R09", image: "/TERIMA KASIH AYAH.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 38, title: "TERIMA KASIH DATUK", price: 14.5, rack: "R09", image: "/TERIMA KASIH DATUK.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 39, title: "TERIMA KASIH IBU", price: 14.5, rack: "R09", image: "/TERIMA KASIH IBU.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 40, title: "TERIMA KASIH NENEK", price: 14.5, rack: "R09", image: "/TERIMA KASIH NENEK.jpg", categorySlug: "buku-cerita-bahasa-melayu" },

  // --- Kategori: word-search ---
  { id: 41, title: "WORD SEARCH - ADORABLE", price: 11.9, rack: "R10", image: "/WORD SEARCH - ADORABLE.jpg", categorySlug: "word-search" },
  { id: 42, title: "WORD SEARCH - ENJOYABLE", price: 11.9, rack: "R10", image: "/WORD SEARCH - ENJOYABLE.jpg", categorySlug: "word-search" },
  { id: 43, title: "WORD SEARCH - KNOWLEDGEABLE", price: 11.9, rack: "R10", image: "/WORD SEARCH - KNOWLEDGEABLE.jpg", categorySlug: "word-search" },
  { id: 44, title: "WORD SEARCH - RELAXABLE", price: 11.9, rack: "R10", image: "/WORD SEARCH - RELAXABLE.jpg", categorySlug: "word-search" },

  // --- Kategori: sound-book ---
  { id: 45, title: "SOUND BOOK ENGLISH 2", price: 35.0, rack: "R11", image: "/SOUND BOOK ENGLISH 2.jpg", categorySlug: "sound-book" },
  { id: 46, title: "SOUND BOOK ENGLISH & BAHASA MALAYSIA", price: 35.0, rack: "R11", image: "/SOUND BOOK ENGLISH & BAHASA MALAYSIA.jpg", categorySlug: "sound-book" },

  // --- Kategori: my-first-book ---
  { id: 47, title: "MY FIRST BOOK - BABY DAY", price: 20.0, rack: "R12", image: "/MY FIRST BOOK - BABY DAY.jpg", categorySlug: "my-first-book" },
  { id: 48, title: "MY FIRST BOOK - RECOGNIZE ANIMAL", price: 20.0, rack: "R12", image: "/MY FIRST BOOK - RECOGNIZE ANIMAL.jpg", categorySlug: "my-first-book" },
  { id: 49, title: "MY FIRST BOOK - VEGETABLES", price: 20.0, rack: "R12", image: "/MY FIRST BOOK - VEGETABLES.jpg", categorySlug: "my-first-book" },

  // --- Kategori: busy-book ---
  { id: 50, title: "BUSY BOOK - BLUE", price: 40.0, rack: "R13", image: "/BUSY BOOK - BLUE.jpg", categorySlug: "busy-book" },
  { id: 51, title: "BUSY BOOK - PINK", price: 40.0, rack: "R13", image: "/BUSY BOOK - PINK.jpg", categorySlug: "busy-book" },

  // --- Kategori: sticker-book ---
  { id: 52, title: "MAGNETIC STICKER BOOK - ANIMAL & OCEAN", price: 38.0, rack: "R14", image: "/MAGNETIC STICKER BOOK - ANIMAL & OCEAN.jpg", categorySlug: "sticker-book" },

  // --- Kategori: snail-snuffing-toys ---
  { id: 53, title: "SNAIL SNUFFING TOYS", price: 55.0, rack: "R15", image: "/SNAIL SNUFFING TOYS.jpg", categorySlug: "snail-snuffing-toys" },
  {
    id: 54,
    title: "BUKU BERGAMBAR 2 BAHASA",
    price: 23.90,
    rack: "R02",
    image: "/BUKU BERGAMBAR 2 BAHASA.jpg",
    categorySlug: "buku-bergambar-2-bahasa",
  },
];
export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const currentSlug = awaitedParams.slug; // Get the slug once


  const category = categoryData[awaitedParams.slug] || {
    name: "Kategori Buku",
    description: "Koleksi buku pilihan untuk pembelajaran anak-anak.",
  }
  const booksToDisplay = All_BookData.filter(
    (book) => book.categorySlug === currentSlug
  );


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
            {/* ✨ Use the filtered booksToDisplay array */}
            {booksToDisplay.length > 0 ? (
              booksToDisplay.map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
                >
                  <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                    <Image
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
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
                    <Link href={`/categories/${currentSlug}/${book.id}`}>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        Lihat Butiran
                      </Button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              // Display a message if no books are found
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">Tiada buku ditemui dalam kategori ini. 😔</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
