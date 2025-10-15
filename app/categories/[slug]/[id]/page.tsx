import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { ChatbotButton } from "@/components/chatbot-button"
import { ArrowLeft, ShoppingCart } from "lucide-react"

// --- ALL_BOOKS_DATA: Complete Book Catalog with Slugs and Descriptions ---
const ALL_BOOKS_DATA = [
  // --- Kategori: buku-bergambar-3-bahasa (R01) ---
  {
    id: 1,
    title: "BUKU BERGAMBAR 3 BAHASA (VERSION 1)",
    price: 25.00,
    rack: "R01",
    description: "Buku bergambar 3 in 1 (bahasa melayu, english, jawi) bacaan mengikut suku kata.",
    image: "/BUKU BERGAMBAR 3 BAHASA.jpg",
    categorySlug: "buku-bergambar-3-bahasa",
  },
  {
    id: 2,
    title: "BUKU BERGAMBAR 3 BAHASA (VERSION 2)",
    price: 25.00,
    rack: "R01",
    description: "Buku bergambar 3 in 1 (bahasa melayu, english, jawi) bacaan mengikut suku kata.",
    image: "/BUKU BERGAMBAR 3 BAHASA (2).jpg",
    categorySlug: "buku-bergambar-3-bahasa",
  },

  // --- Kategori: buku-bergambar-2-bahasa (R02) ---
  // Note: No specific images were provided for this category, using placeholders.
  {
    id: 3,
    title: "My Early Amazing Picture Books Board - Family",
    price: 23.90,
    rack: "R02",
    description: "Buku bergambar My early Amazing Picture Books Board sesuai untuk anak yang berumur 1 tahun sehingga 6 tahun (material tahan lasak).",
    image: "/colorful-children-s-book-cover-with-happy-family-i.jpg",
    categorySlug: "buku-bergambar-2-bahasa",
  },
  {
    id: 4,
    title: "My Early Amazing Picture Books Board - Colors",
    price: 23.90,
    rack: "R02",
    description: "Buku bergambar My early Amazing Picture Books Board sesuai untuk anak yang berumur 1 tahun sehingga 6 tahun (material tahan lasak).",
    image: "/colorful-children-s-book-cover-with-rainbow-and-co.jpg",
    categorySlug: "buku-bergambar-2-bahasa",
  },

  // --- Kategori: buku-pasti-mengenal (R03) ---
  {
    id: 5,
    title: "PASTI MENGENAL ABC",
    price: 9.00,
    rack: "R03",
    description: "Buku bergambar 2 in 1 Bahasa Melayu dan English. ABC yang sesuai untuk umur 1 tahun dan keatas.",
    image: "/PASTI MENGENAL ABC.jpg",
    categorySlug: "buku-pasti-mengenal",
  },
  {
    id: 6,
    title: "PASTI MENGENAL 123",
    price: 9.00,
    rack: "R03",
    description: "Buku bergambar 2 in 1 Bahasa Melayu dan English. 123 yang sesuai untuk umur 1 tahun dan keatas.",
    image: "/PASTI MENGENAL 123.jpg",
    categorySlug: "buku-pasti-mengenal",
  },
  {
    id: 7,
    title: "PASTI MENGENAL BUAH-BUAHAN",
    price: 9.00,
    rack: "R03",
    description: "Buku bergambar 2 in 1 Bahasa Melayu dan English. Makanan/sayur-sayuran yang sesuai untuk umur 1 tahun dan keatas.",
    image: "/PASTI MENGENAL BUAH-BUAHAN.jpg",
    categorySlug: "buku-pasti-mengenal",
  },
  {
    id: 8,
    title: "PASTI MENGENAL HAIWAN",
    price: 9.00,
    rack: "R03",
    description: "Buku bergambar 2 in 1 Bahasa Melayu dan English. Haiwan yang sesuai untuk umur 1 tahun dan keatas.",
    image: "/PASTI MENGENAL HAIWAN.jpg",
    categorySlug: "buku-pasti-mengenal",
  },
  {
    id: 9,
    title: "PASTI MENGENAL PEKERJAAN",
    price: 9.00,
    rack: "R03",
    description: "Buku bergambar 2 in 1 Bahasa Melayu dan English. Pekerjaan yang sesuai untuk umur 1 tahun dan keatas.",
    image: "/PASTI MENGENAL PERKEJAAN.jpg",
    categorySlug: "buku-pasti-mengenal",
  },

  // --- Kategori: buku-sayangku-mari-mengenal (R04) ---
  {
    id: 10,
    title: "SAYANGKU MARI MENGENAL ABC",
    price: 16.90,
    rack: "R04",
    description: "Buku 3-in-1 (Melayu, Inggeris, Jawi) untuk mengenalkan konsep ABC.",
    image: "/SAYANGKU MARI MENGENAL ABC.jpg",
    categorySlug: "buku-sayangku-mari-mengenal",
  },
  {
    id: 11,
    title: "SAYANGKU MARI MENGENAL 123",
    price: 16.90,
    rack: "R04",
    description: "Buku 3-in-1 (Melayu, Inggeris, Jawi) untuk mengenalkan konsep 123.",
    image: "/SAYANGKU MARI MENGENAL 123.jpg",
    categorySlug: "buku-sayangku-mari-mengenal",
  },
  {
    id: 12,
    title: "SAYANGKU MARI MENGENAL HAIWAN",
    price: 16.90,
    rack: "R04",
    description: "Buku 3-in-1 (Melayu, Inggeris, Jawi) untuk mengenalkan Haiwan.",
    image: "/SAYANGKU MARI MENGENAL HAIWAN.jpg",
    categorySlug: "buku-sayangku-mari-mengenal",
  },
  {
    id: 13,
    title: "SAYANGKU MARI MENGENAL JAWI",
    price: 16.90,
    rack: "R04",
    description: "Buku 3-in-1 (Melayu, Inggeris, Jawi) untuk mengenalkan Jawi.",
    image: "/SAYANGKU MARI MENGENAL JAWI.jpg",
    categorySlug: "buku-sayangku-mari-mengenal",
  },

  // --- Kategori: buku-lets-learn-series (R05) ---
  {
    id: 14,
    title: "LET’S LEARN 128 ANIMALS",
    price: 29.90,
    rack: "R05",
    description: "Buku bergambar let’s learn series yang mudah di bawa untuk travel, balik kampung, untuk distract anak anak dari main gadget!",
    image: "/LET’S LEARN 128 ANIMALS.jpg",
    categorySlug: "buku-lets-learn-series",
  },
  {
    id: 15,
    title: "LET’S LEARN 128 WORDS",
    price: 29.90,
    rack: "R05",
    description: "Buku bergambar let’s learn series yang mudah di bawa untuk travel, balik kampung, untuk distract anak anak dari main gadget!",
    image: "/LET’S LEARN 128 WORDS.jpg",
    categorySlug: "buku-lets-learn-series",
  },
  {
    id: 16,
    title: "LET’S LEARN ABC, 123, MY BODY",
    price: 29.90,
    rack: "R05",
    description: "Buku bergambar let’s learn series yang mudah di bawa untuk travel, balik kampung, untuk distract anak anak dari main gadget!",
    image: "/LET’S LEARN ABC ,123, MY BODY.jpg",
    categorySlug: "buku-lets-learn-series",
  },

  // --- Kategori: buku-aktiviti-matematik (R06) ---
  {
    id: 17,
    title: "BUKU AKTIVITI MATEMATIK - 1",
    price: 9.90,
    rack: "R06",
    description: "Buku Latihan Matematik Prasekolah Umur 4 tahun sehingga 6 tahun.",
    image: "/BUKU AKTIVITI MATEMATIK -1.jpg",
    categorySlug: "buku-aktiviti-matematik",
  },
  {
    id: 18,
    title: "BUKU AKTIVITI MATEMATIK - 2",
    price: 9.90,
    rack: "R06",
    description: "Buku Latihan Matematik Prasekolah Umur 4 tahun sehingga 6 tahun.",
    image: "/BUKU AKTIVITI MATEMATIK -2.jpg",
    categorySlug: "buku-aktiviti-matematik",
  },
  {
    id: 19,
    title: "BUKU AKTIVITI MATEMATIK - 3",
    price: 9.90,
    rack: "R06",
    description: "Buku Latihan Matematik Prasekolah Umur 4 tahun sehingga 6 tahun.",
    image: "/BUKU AKTIVITI MATEMATIK -3.jpg",
    categorySlug: "buku-aktiviti-matematik",
  },
  {
    id: 20,
    title: "BUKU AKTIVITI MATEMATIK - 4",
    price: 9.90,
    rack: "R06",
    description: "Buku Latihan Matematik Prasekolah Umur 4 tahun sehingga 6 tahun.",
    image: "/BUKU AKTIVITI MATEMATIK -4.jpg",
    categorySlug: "buku-aktiviti-matematik",
  },

  // --- Kategori: buku-english-reading-book (R07) ---
  {
    id: 21,
    title: "ENGLISH READING BOOK - 1",
    price: 8.40,
    rack: "R07",
    description: "Graded-specific activities inspired for total school success ahead.",
    image: "/ENGLISH READING BOOK -1.jpg",
    categorySlug: "buku-english-reading-book",
  },
  {
    id: 22,
    title: "ENGLISH READING BOOK - 2",
    price: 8.40,
    rack: "R07",
    description: "Graded-specific activities inspired for total school success ahead.",
    image: "/ENGLISH READING BOOK -2.jpg",
    categorySlug: "buku-english-reading-book",
  },
  {
    id: 23,
    title: "ENGLISH READING BOOK - 3",
    price: 8.40,
    rack: "R07",
    description: "Graded-specific activities inspired for total school success ahead.",
    image: "/ENGLISH READING BOOK -3.jpg",
    categorySlug: "buku-english-reading-book",
  },
  {
    id: 24,
    title: "ENGLISH READING BOOK - 4",
    price: 8.40,
    rack: "R07",
    description: "Graded-specific activities inspired for total school success ahead.",
    image: "/ENGLISH READING BOOK -4.jpg",
    categorySlug: "buku-english-reading-book",
  },

  // --- Kategori: shape-story-book (R08) ---
  { id: 25, title: "SHAPE STORY BOOK 1", price: 8.90, rack: "R08", description: "Buku cerita mengunakan aras bahasa yang mudah dan bacaan mengikut suku kata.", image: "/SHAPE STORY BOOK 1.jpg", categorySlug: "shape-story-book" },
  { id: 26, title: "SHAPE STORY BOOK 2", price: 8.90, rack: "R08", description: "Buku cerita mengunakan aras bahasa yang mudah dan bacaan mengikut suku kata.", image: "/SHAPE STORY BOOK 2.jpg", categorySlug: "shape-story-book" },
  { id: 27, title: "SHAPE STORY BOOK 3", price: 8.90, rack: "R08", description: "Buku cerita mengunakan aras bahasa yang mudah dan bacaan mengikut suku kata.", image: "/SHAPE STORY BOOK 3.jpg", categorySlug: "shape-story-book" },
  { id: 28, title: "SHAPE STORY BOOK 4", price: 8.90, rack: "R08", description: "Buku cerita mengunakan aras bahasa yang mudah dan bacaan mengikut suku kata.", image: "/SHAPE STORY BOOK 4.jpg", categorySlug: "shape-story-book" },
  { id: 29, title: "SHAPE STORY BOOK 5", price: 8.90, rack: "R08", description: "Buku cerita mengunakan aras bahasa yang mudah dan bacaan mengikut suku kata.", image: "/SHAPE STORY BOOK 5.jpg", categorySlug: "shape-story-book" },
  { id: 30, title: "SHAPE STORY BOOK 6", price: 8.90, rack: "R08", description: "Buku cerita mengunakan aras bahasa yang mudah dan bacaan mengikut suku kata.", image: "/SHAPE STORY BOOK 6.jpg", categorySlug: "shape-story-book" },
  { id: 31, title: "SHAPE STORY BOOK 7", price: 8.90, rack: "R08", description: "Buku cerita mengunakan aras bahasa yang mudah dan bacaan mengikut suku kata.", image: "/SHAPE STORY BOOK 7.jpg", categorySlug: "shape-story-book" },

  // --- Kategori: buku-cerita-bahasa-melayu (R09) ---
  { id: 32, title: "SANG SINGA DAN SANG ARNAB", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Teladan Series)", image: "/SANG SINGA DAN SANG ARNAB.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 33, title: "EMPAT SAHABAT KARIB", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Teladan Series)", image: "/EMPAT SAHABAT KARIB.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 34, title: "KELDAI YANG TIDAK MEMPUNYAI OTAK", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Teladan Series)", image: "/KELDAI YANG TIDAK MEMPUNYAI OTAK.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 35, title: "SANG SERIGALA DAN SANG BANGAU", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Teladan Series)", image: "/SANG SERIGALA DAN SANG BANGAU.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 36, title: "KURA-KURA YANG TIDAK MENDENGAR NASIHAT", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Teladan Series)", image: "/KURA-KURA YANH TIDAK MENDENGAR NASIHAT.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 37, title: "SANG MONYET DAN SANG BUAYA", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Teladan Series)", image: "/SANG MONYET DAN SANG BUAYA.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 38, title: "SANG MONYET DAN SANG BUAYA (ALT COVER)", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Teladan Series)", image: "/SANG MONYET DAN SANG BUAYA(1).jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 39, title: "TERIMA KASIH AYAH", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Siri Keluarga)", image: "/TERIMA KASIH AYAH.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 40, title: "TERIMA KASIH DATUK", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Siri Keluarga)", image: "/TERIMA KASIH DATUK.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 41, title: "TERIMA KASIH IBU", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Siri Keluarga)", image: "/TERIMA KASIH IBU.jpg", categorySlug: "buku-cerita-bahasa-melayu" },
  { id: 42, title: "TERIMA KASIH NENEK", price: 8.90, rack: "R09", description: "Excellent resource to help children improve language skills and learn important life lessons. (Siri Keluarga)", image: "/TERIMA KASIH NENEK.jpg", categorySlug: "buku-cerita-bahasa-melayu" },

  // --- Kategori: word-search (R10) ---
  { id: 43, title: "WORD SEARCH - ADORABLE", price: 8.90, rack: "R10", description: "Buku 'Pocket Words Search' membantu menambah kosa kata Bahasa Inggeris dengan cara yang menyeronokkan.", image: "/WORD SEARCH - ADORABLE.jpg", categorySlug: "word-search" },
  { id: 44, title: "WORD SEARCH - ENJOYABLE", price: 8.90, rack: "R10", description: "Buku 'Pocket Words Search' membantu menambah kosa kata Bahasa Inggeris dengan cara yang menyeronokkan.", image: "/WORD SEARCH - ENJOYABLE.jpg", categorySlug: "word-search" },
  { id: 45, title: "WORD SEARCH - KNOWLEDGEABLE", price: 8.90, rack: "R10", description: "Buku 'Pocket Words Search' membantu menambah kosa kata Bahasa Inggeris dengan cara yang menyeronokkan.", image: "/WORD SEARCH - KNOWLEDGEABLE.jpg", categorySlug: "word-search" },
  { id: 46, title: "WORD SEARCH - RELAXABLE", price: 8.90, rack: "R10", description: "Buku 'Pocket Words Search' membantu menambah kosa kata Bahasa Inggeris dengan cara yang menyeronokkan.", image: "/WORD SEARCH - RELAXABLE.jpg", categorySlug: "word-search" },

  // --- Kategori: sound-book (R11) ---
  {
    id: 47,
    title: "SOUND BOOK ENGLISH & B. MALAYSIA (VERSION 1)",
    price: 35.00,
    rack: "R11",
    description: "Buku berbunyi dwi bahasa (Melayu & Inggeris) dengan pelbagai topik termasuk Surah Al-Quran.",
    image: "/SOUND BOOK ENGLISH & BAHASA MALAYSIA.jpg",
    categorySlug: "sound-book",
  },
  {
    id: 48,
    title: "SOUND BOOK ENGLISH (VERSION 2)",
    price: 35.00,
    rack: "R11",
    description: "Buku berbunyi dwi bahasa (Melayu & Inggeris) dengan pelbagai topik termasuk Surah Al-Quran.",
    image: "/SOUND BOOK ENGLISH 2.jpg",
    categorySlug: "sound-book",
  },

  // --- Kategori: my-first-book (R12) ---
  {
    id: 49,
    title: "MY FIRST BOOK - BABY DAY",
    price: 5.90,
    rack: "R12",
    description: "Soft Books untuk memperkenalkan konsep asas seperti warna dan bentuk kepada bayi/kanak-kanak.",
    image: "/MY FIRST BOOK - BABY DAY.jpg",
    categorySlug: "my-first-book",
  },
  {
    id: 50,
    title: "MY FIRST BOOK - RECOGNIZE ANIMAL",
    price: 5.90,
    rack: "R12",
    description: "Soft Books untuk memperkenalkan konsep asas seperti warna dan bentuk kepada bayi/kanak-kanak.",
    image: "/MY FIRST BOOK - RECOGNIZE ANIMAL.jpg",
    categorySlug: "my-first-book",
  },
  {
    id: 51,
    title: "MY FIRST BOOK - VEGETABLES",
    price: 5.90,
    rack: "R12",
    description: "Soft Books untuk memperkenalkan konsep asas seperti warna dan bentuk kepada bayi/kanak-kanak.",
    image: "/MY FIRST BOOK - VEGETABLES.jpg",
    categorySlug: "my-first-book",
  },

  // --- Kategori: busy-book (R13) ---
  {
    id: 52,
    title: "BUSY BOOK - BLUE",
    price: 80.00,
    rack: "R13",
    description: "Mainan pendidikan yang mengalakkan ikatan ibu ayah dan anak-anak, pengganti 'screen time'.",
    image: "/BUSY BOOK - BLUE.jpg",
    categorySlug: "busy-book",
  },
  {
    id: 53,
    title: "BUSY BOOK - PINK",
    price: 80.00,
    rack: "R13",
    description: "Mainan pendidikan yang mengalakkan ikatan ibu ayah dan anak-anak, pengganti 'screen time'.",
    image: "/BUSY BOOK - PINK.jpg",
    categorySlug: "busy-book",
  },

  // --- Kategori: sticker-book (R14) ---
  {
    id: 54,
    title: "MAGNETIC STICKER BOOK - ANIMAL & OCEAN",
    price: 19.90,
    rack: "R14",
    description: "Sticker book kalis air dengan ilustrasi berwarna-warni dan sticker yang mudah dikupas.",
    image: "/MAGNETIC STICKER BOOK - ANIMAL & OCEAN.jpg",
    categorySlug: "sticker-book",
  },

  // --- Kategori: snail-snuffing-toys (R15) ---
  {
    id: 55,
    title: "SNAIL SNUFFING TOYS",
    price: 34.90,
    rack: "R15",
    description: "Produk untuk membantu perkembangan sensori anak, meningkatkan pengenalan bentuk/warna dan koordinasi mata-tangan.",
    image: "/SNAIL SNUFFING TOYS.jpg",
    categorySlug: "snail-snuffing-toys",
  },
];

export default function ProductDetailPage({ params }: { params: { slug: string; id: string } }) {
  const book = ALL_BOOKS_DATA.find((b) => b.id === Number.parseInt(params.id)) || books[0]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      <ChatbotButton />

      {/* Header with back button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href={`/categories/${params.slug}`}
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Senarai Buku
        </Link>
      </div>

      {/* Product Detail Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-200">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Book Image */}
            <div className="relative h-[500px] md:h-auto bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 p-12 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-yellow-300 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-pink-300 rounded-full opacity-50 blur-xl"></div>
            </div>

            {/* Right: Product Information */}
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              {/* Title */}
              <h1 className="font-black text-4xl md:text-5xl text-gray-800 leading-tight">{book.title}</h1>

              {/* Price */}
              <div className="inline-flex items-center gap-3">
                <span className="text-gray-600 font-semibold text-lg">Harga:</span>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-3xl px-6 py-3 rounded-2xl shadow-lg">
                  RM {book.price.toFixed(2)}
                </div>
              </div>

              {/* Rack Number */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-semibold text-lg">Rak:</span>
                <div className="bg-yellow-400 text-purple-700 font-bold text-xl px-5 py-2 rounded-xl shadow-md">
                  {book.rack}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h2 className="text-gray-700 font-bold text-xl">Penerangan:</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{book.description}</p>
              </div>

              {/* Add to Cart Button */}
              <Button className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-bold text-xl py-7 px-10 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                Tambah ke Troli
              </Button>

              {/* Additional Info */}
              <div className="pt-6 border-t-2 border-purple-100">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Sesuai untuk 1+ tahun
                  </span>
                  <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Dwibahasa
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Bergambar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bottom wave */}
          <div className="h-3 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"></div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
