"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Bot, Send } from "lucide-react"

// --- DEFINISI DATA PRODUK (HARDCODED) ---

interface Book {
  id: number;
  title: string;
  price: number;
  rack: string;
  description: string;
  image: string;
  categorySlug: string;
}

// Data lengkap katalog buku diambil dari input pengguna
const ALL_BOOKS_DATA: Book[] = [
  // --- Kategori: buku-bergambar-3-bahasa (R01) ---
  { id: 1, title: "BUKU BERGAMBAR 3 BAHASA (VERSION 1)", price: 25.00, rack: "R01", description: "Buku bergambar 3 in 1 (bahasa melayu, english, jawi) bacaan mengikut suku kata.", image: "/BUKU BERGAMBAR 3 BAHASA.jpg", categorySlug: "buku-bergambar-3-bahasa" },
  { id: 2, title: "BUKU BERGAMBAR 3 BAHASA (VERSION 2)", price: 25.00, rack: "R01", description: "Buku bergambar 3 in 1 (bahasa melayu, english, jawi) bacaan mengikut suku kata.", image: "/BUKU BERGAMBAR 3 BAHASA (2).jpg", categorySlug: "buku-bergambar-3-bahasa" },

  // --- Kategori: buku-bergambar-2-bahasa (R02) ---
  { id: 3, title: "My Early Amazing Picture Books Board - Family", price: 23.90, rack: "R02", description: "Buku bergambar My early Amazing Picture Books Board sesuai untuk anak yang berumur 1 tahun sehingga 6 tahun (material tahan lasak).", image: "/colorful-children-s-book-cover-with-happy-family-i.jpg", categorySlug: "buku-bergambar-2-bahasa" },
  { id: 4, title: "My Early Amazing Picture Books Board - Colors", price: 23.90, rack: "R02", description: "Buku bergambar My early Amazing Picture Books Board sesuai untuk anak yang berumur 1 tahun sehingga 6 tahun (material tahan lasak).", image: "/colorful-children-s-book-cover-with-rainbow-and-co.jpg", categorySlug: "buku-bergambar-2-bahasa" },

  // --- Kategori: buku-pasti-mengenal (R03) ---
  { id: 5, title: "PASTI MENGENAL ABC", price: 9.00, rack: "R03", description: "Buku bergambar 2 in 1 Bahasa Melayu dan English. ABC yang sesuai untuk umur 1 tahun dan keatas.", image: "/PASTI MENGENAL ABC.jpg", categorySlug: "buku-pasti-mengenal" },
  { id: 6, title: "PASTI MENGENAL 123", price: 9.00, rack: "R03", description: "Buku bergambar 2 in 1 Bahasa Melayu dan English. 123 yang sesuai untuk umur 1 tahun dan keatas.", image: "/PASTI MENGENAL 123.jpg", categorySlug: "buku-pasti-mengenal" },
  { id: 7, title: "PASTI MENGENAL BUAH-BUAHAN", price: 9.00, rack: "R03", description: "Buku bergambar 2 in 1 Bahasa Melayu dan English. Makanan/sayur-sayuran yang sesuai untuk umur 1 tahun dan keatas.", image: "/PASTI MENGENAL BUAH-BUAHAN.jpg", categorySlug: "buku-pasti-mengenal" },
  { id: 8, title: "PASTI MENGENAL HAIWAN", price: 9.00, rack: "R03", description: "Buku bergambar 2 in 1 Bahasa Melayu dan English. Haiwan yang sesuai untuk umur 1 tahun dan keatas.", image: "/PASTI MENGENAL HAIWAN.jpg", categorySlug: "buku-pasti-mengenal" },
  { id: 9, title: "PASTI MENGENAL PEKERJAAN", price: 9.00, rack: "R03", description: "Buku bergambar 2 in 1 Bahasa Melayu dan English. Pekerjaan yang sesuai untuk umur 1 tahun dan keatas.", image: "/PASTI MENGENAL PERKEJAAN.jpg", categorySlug: "buku-pasti-mengenal" },

  // --- Kategori: buku-sayangku-mari-mengenal (R04) ---
  { id: 10, title: "SAYANGKU MARI MENGENAL ABC", price: 16.90, rack: "R04", description: "Buku 3-in-1 (Melayu, Inggeris, Jawi) untuk mengenalkan konsep ABC.", image: "/SAYANGKU MARI MENGENAL ABC.jpg", categorySlug: "buku-sayangku-mari-mengenal" },
  { id: 11, title: "SAYANGKU MARI MENGENAL 123", price: 16.90, rack: "R04", description: "Buku 3-in-1 (Melayu, Inggeris, Jawi) untuk mengenalkan konsep 123.", image: "/SAYANGKU MARI MENGENAL 123.jpg", categorySlug: "buku-sayangku-mari-mengenal" },
  { id: 12, title: "SAYANGKU MARI MENGENAL HAIWAN", price: 16.90, rack: "R04", description: "Buku 3-in-1 (Melayu, Inggeris, Jawi) untuk mengenalkan Haiwan.", image: "/SAYANGKU MARI MENGENAL HAIWAN.jpg", categorySlug: "buku-sayangku-mari-mengenal" },
  { id: 13, title: "SAYANGKU MARI MENGENAL JAWI", price: 16.90, rack: "R04", description: "Buku 3-in-1 (Melayu, Inggeris, Jawi) untuk mengenalkan Jawi.", image: "/SAYANGKU MARI MENGENAL JAWI.jpg", categorySlug: "buku-sayangku-mari-mengenal" },

  // --- Kategori: buku-lets-learn-series (R05) ---
  { id: 14, title: "LET’S LEARN 128 ANIMALS", price: 29.90, rack: "R05", description: "Buku bergambar let’s learn series yang mudah di bawa untuk travel, balik kampung, untuk distract anak anak dari main gadget!", image: "/LET’S LEARN 128 ANIMALS.jpg", categorySlug: "buku-lets-learn-series" },
  { id: 15, title: "LET’S LEARN 128 WORDS", price: 29.90, rack: "R05", description: "Buku bergambar let’s learn series yang mudah di bawa untuk travel, balik kampung, untuk distract anak anak dari main gadget!", image: "/LET’S LEARN 128 WORDS.jpg", categorySlug: "buku-lets-learn-series" },
  { id: 16, title: "LET’S LEARN ABC, 123, MY BODY", price: 29.90, rack: "R05", description: "Buku bergambar let’s learn series yang mudah di bawa untuk travel, balik kampung, untuk distract anak anak dari main gadget!", image: "/LET’S LEARN ABC ,123, MY BODY.jpg", categorySlug: "buku-lets-learn-series" },

  // --- Kategori: buku-aktiviti-matematik (R06) ---
  { id: 17, title: "BUKU AKTIVITI MATEMATIK - 1", price: 9.90, rack: "R06", description: "Buku Latihan Matematik Prasekolah Umur 4 tahun sehingga 6 tahun.", image: "/BUKU AKTIVITI MATEMATIK -1.jpg", categorySlug: "buku-aktiviti-matematik" },
  { id: 18, title: "BUKU AKTIVITI MATEMATIK - 2", price: 9.90, rack: "R06", description: "Buku Latihan Matematik Prasekolah Umur 4 tahun sehingga 6 tahun.", image: "/BUKU AKTIVITI MATEMATIK -2.jpg", categorySlug: "buku-aktiviti-matematik" },
  { id: 19, title: "BUKU AKTIVITI MATEMATIK - 3", price: 9.90, rack: "R06", description: "Buku Latihan Matematik Prasekolah Umur 4 tahun sehingga 6 tahun.", image: "/BUKU AKTIVITI MATEMATIK -3.jpg", categorySlug: "buku-aktiviti-matematik" },
  { id: 20, title: "BUKU AKTIVITI MATEMATIK - 4", price: 9.90, rack: "R06", description: "Buku Latihan Matematik Prasekolah Umur 4 tahun sehingga 6 tahun.", image: "/BUKU AKTIVITI MATEMATIK -4.jpg", categorySlug: "buku-aktiviti-matematik" },

  // --- Kategori: buku-english-reading-book (R07) ---
  { id: 21, title: "ENGLISH READING BOOK - 1", price: 8.40, rack: "R07", description: "Graded-specific activities inspired for total school success ahead.", image: "/ENGLISH READING BOOK -1.jpg", categorySlug: "buku-english-reading-book" },
  { id: 22, title: "ENGLISH READING BOOK - 2", price: 8.40, rack: "R07", description: "Graded-specific activities inspired for total school success ahead.", image: "/ENGLISH READING BOOK -2.jpg", categorySlug: "buku-english-reading-book" },
  { id: 23, title: "ENGLISH READING BOOK - 3", price: 8.40, rack: "R07", description: "Graded-specific activities inspired for total school success ahead.", image: "/ENGLISH READING BOOK -3.jpg", categorySlug: "buku-english-reading-book" },
  { id: 24, title: "ENGLISH READING BOOK - 4", price: 8.40, rack: "R07", description: "Graded-specific activities inspired for total school success ahead.", image: "/ENGLISH READING BOOK -4.jpg", categorySlug: "buku-english-reading-book" },

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
  { id: 47, title: "SOUND BOOK ENGLISH & B. MALAYSIA (VERSION 1)", price: 35.00, rack: "R11", description: "Buku berbunyi dwi bahasa (Melayu & Inggeris) dengan pelbagai topik termasuk Surah Al-Quran.", image: "/SOUND BOOK ENGLISH & BAHASA MALAYSIA.jpg", categorySlug: "sound-book" },
  { id: 48, title: "SOUND BOOK ENGLISH (VERSION 2)", price: 35.00, rack: "R11", description: "Buku berbunyi dwi bahasa (Melayu & Inggeris) dengan pelbagai topik termasuk Surah Al-Quran.", image: "/SOUND BOOK ENGLISH 2.jpg", categorySlug: "sound-book" },

  // --- Kategori: my-first-book (R12) ---
  { id: 49, title: "MY FIRST BOOK - BABY DAY", price: 5.90, rack: "R12", description: "Soft Books untuk memperkenalkan konsep asas seperti warna dan bentuk kepada bayi/kanak-kanak.", image: "/MY FIRST BOOK - BABY DAY.jpg", categorySlug: "my-first-book" },
  { id: 50, title: "MY FIRST BOOK - RECOGNIZE ANIMAL", price: 5.90, rack: "R12", description: "Soft Books untuk memperkenalkan konsep asas seperti warna dan bentuk kepada bayi/kanak-kanak.", image: "/MY FIRST BOOK - RECOGNIZE ANIMAL.jpg", categorySlug: "my-first-book" },
  { id: 51, title: "MY FIRST BOOK - VEGETABLES", price: 5.90, rack: "R12", description: "Soft Books untuk memperkenalkan konsep asas seperti warna dan bentuk kepada bayi/kanak-kanak.", image: "/MY FIRST BOOK - VEGETABLES.jpg", categorySlug: "my-first-book" },

  // --- Kategori: busy-book (R13) ---
  { id: 52, title: "BUSY BOOK - BLUE", price: 80.00, rack: "R13", description: "Mainan pendidikan yang mengalakkan ikatan ibu ayah dan anak-anak, pengganti 'screen time'.", image: "/BUSY BOOK - BLUE.jpg", categorySlug: "busy-book" },
  { id: 53, title: "BUSY BOOK - PINK", price: 80.00, rack: "R13", description: "Mainan pendidikan yang mengalakkan ikatan ibu ayah dan anak-anak, pengganti 'screen time'.", image: "/BUSY BOOK - PINK.jpg", categorySlug: "busy-book" },

  // --- Kategori: sticker-book (R14) ---
  { id: 54, title: "MAGNETIC STICKER BOOK - ANIMAL & OCEAN", price: 19.90, rack: "R14", description: "Sticker book kalis air dengan ilustrasi berwarna-warni dan sticker yang mudah dikupas.", image: "/MAGNETIC STICKER BOOK - ANIMAL & OCEAN.jpg", categorySlug: "sticker-book" },

  // --- Kategori: snail-snuffing-toys (R15) ---
  { id: 55, title: "SNAIL SNUFFING TOYS", price: 34.90, rack: "R15", description: "Produk untuk membantu perkembangan sensori anak, meningkatkan pengenalan bentuk/warna dan koordinasi mata-tangan.", image: "/SNAIL SNUFFING TOYS.jpg", categorySlug: "snail-snuffing-toys" },
];

interface Message {
  text: string
  sender: "user" | "bot"
}

interface ChatWindowProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Logika Hardcoded Chatbot untuk mencari harga dan lokasi buku.
 */

function getHardcodedBotResponse(query: string): string {
  const lowerQuery = query.toLowerCase().trim();
  // We use lowerQuery.includes() for fuzzy/slang matching, and tokens for more specific checks.
  // const tokens = lowerQuery.split(/\s+/);

  // --- 1. Comprehensive Keyword Definitions ---

  // Greetings and informal salutations (slmt is shorthand for 'selamat')
  const greetingKeywords = ["hello", "hi", "hai", "salam", "assalamualaikum", "wsup", "yo", "apa khabar", "holla", "slmt", "morning", "petang", "boss", "bos", "haiya", "hello boss", "eh hai", "greetings", "test", "testing"];

  // Price keywords (Enhanced)
  const priceKeywords = ["price", "harga", "berapa", "brp", "rege", "cost", "rm", "ringgit", "mampu", "duit", "mahal", "diskaun", "promosi", "promo", "sale", "murah", "mahal ke", "sale ke", "free", "kos", "potongan", "discount", "lelong"];

  // Location keywords (Enhanced)
  const locationKeywords = ["rack", "location", "lokasi", "mana", "where", "kat", "tingkat", "rak", "shelf", "tempat", "area", "zone", "seksyen", "kawasan", "ruang", "kat sini", "letak", "letaknya", "kt mana", "sblh mana", "sini", "bahagian", "area"];

  // Existence/Stock keywords (Enhanced)
  const existenceKeywords = ["ada", "got", "available", "adakah", "check", "stok", "habis", "sold out", "restok", "ready stock", "sampai", "masuk", "still got", "still have", "ade", "ada lagi", "habis jual"];

  // General Intent Keywords (Store Info)
  const hoursKeywords = ["hours", "masa", "buka", "tutup", "operation", "waktu", "pukul", "open", "close"];

  // Transaction/Service Keywords
  const serviceKeywords = ["bayar", "payment", "cara bayar", "kaedah", "kad", "cash", "e-wallet", "membership", "ahli", "tanya", "servis", "service", "kad kredit", "debit"];

  // Gratitude Keywords
  const thankYouKeywords = ["terima kasih", "tq", "thanks", "tenkiu", "syukran", "ok", "okay", "alright", "settle", "faham", "baik"];

  // NEW: Suggestion/Recommendation Keywords
  const suggestionKeywords = ["suggest", "cadang", "rekomendasi", "umur", "adik", "anak", "sesuai", "best", "paling laris", "recommended", "macam mana", "sesuai untuk"];


  // --- 2. General Intent Handling (Must come before Book Search for priority) ---

  // 2a. Store Hours Inquiry
  if (hoursKeywords.some(keyword => lowerQuery.includes(keyword))) {
    return "Kedai kami beroperasi setiap hari dari **10:00 pagi hingga 9:00 malam**. Kami tunggu kedatangan anda! Jika ada soalan tentang buku, sila tanya.";
  }

  // 2b. Greeting Handling
  if (greetingKeywords.some(keyword => lowerQuery.includes(keyword))) {
    return "Hello, apa khabar? Saya FZ Smart Bot. Anda boleh tanya saya tentang **harga**, **lokasi rak** buku, **waktu operasi** kedai, atau **cara pembayaran**. Cuba tanya guna slang pun boleh! (Contoh: 'Sound Book ni rege brp?' atau 'Busy Book ada kat rak mana?').";
  }

  // 2c. Service/Payment Inquiry Handling
  if (serviceKeywords.some(keyword => lowerQuery.includes(keyword))) {
    return "Untuk pembayaran, kami terima tunai (cash), kad kredit/debit, dan e-wallet (TNG, GrabPay, DuitNow). Ada soalan tentang harga buku pula ke? Sila sebutkan tajuk buku!";
  }

  // 2d. Gratitude Handling
  if (thankYouKeywords.some(keyword => lowerQuery.includes(keyword))) {
    return "Sama-sama! Gembira dapat membantu anda. Ada lagi soalan tentang lokasi rak atau harga buku? Jangan segan silu tanya ya.";
  }

  // 2e. Suggestion/Recommendation Inquiry Handling (NEW)
  if (suggestionKeywords.some(keyword => lowerQuery.includes(keyword) && !locationKeywords.some(kw => lowerQuery.includes(kw)))) {
    // Find a book suitable for reading/older kids (based on the added title)
    const recommendation = ALL_BOOKS_DATA.find(book => book.categorySlug.includes('reader-set'));

    if (recommendation) {
      return `Tentu, saya boleh buat cadangan! Berdasarkan pengalaman jualan kami, saya syorkan **${recommendation.title}** (harga **RM ${recommendation.price.toFixed(2)}**) di **Rak ${recommendation.rack}**. Buku ini sangat sesuai untuk adik-adik umur 7 tahun ke atas. Adakah anda ingin saya check stok atau harga buku lain pula?`;
    }
    return "Maaf, buat masa ini saya tak boleh buat cadangan yang spesifik. Tapi buku kami yang **paling laris** ialah **Busy Book 10-in-1**. Boleh saya check harga atau lokasi rak buku itu untuk anda?";
  }


  // --- 3. Book Search and Intent Extraction ---

  // Find the book by checking title, category slug, or partial match (to feel less strict)
  // This logic is enhanced to catch single words like 'bergambar' or 'busy'
  const foundBook = ALL_BOOKS_DATA.find(book =>
    lowerQuery.includes(book.title.toLowerCase()) || // Exact title match
    lowerQuery.includes(book.categorySlug.toLowerCase().replace(/-/g, ' ')) || // Category slug match ('buku bergambar 3 bahasa')
    lowerQuery.includes(book.title.toLowerCase().split(' ')[0]) || // First word match ('busy' from 'Busy Book 10-in-1')
    lowerQuery.includes(book.title.toLowerCase().split(' ')[1]) || // Second word match (to catch 'book' or 'set' or 'abc')
    lowerQuery.includes(book.categorySlug.split('-')[0]) || // Match single category word ('bergambar')
    lowerQuery.includes(book.title.toLowerCase().substring(0, 4)) // Match first few letters for very short query (e.g., 'akti' for 'Aktiviti')
  );

  if (foundBook) {
    // Check user intent based on expanded keyword lists
    const wantsPrice = priceKeywords.some(keyword => lowerQuery.includes(keyword));
    const wantsRack = locationKeywords.some(keyword => lowerQuery.includes(keyword) || lowerQuery.includes("kat mana") || lowerQuery.includes("rak mana"));
    const wantsExist = existenceKeywords.some(keyword => lowerQuery.includes(keyword));

    // Detailed response construction to make it look less generic
    let response = `Terima kasih kerana bertanya tentang **${foundBook.title}**. Saya dah check katalog kami:\n\n`;

    if (wantsPrice && wantsRack) {
      // Priority 1: Both price and location requested
      response += `**Harga Jualan:** **RM ${foundBook.price.toFixed(2)}** (Harga terbaik, boss!)\n`;
      response += `**Lokasi Rak:** Boleh ambil terus di **Rak ${foundBook.rack}**.\n`;
      response += `Selamat mencari, ya!`;

    } else if (wantsPrice) {
      // Priority 2: Only price requested
      const priceMsg = lowerQuery.includes("promo") || lowerQuery.includes("diskaun") || lowerQuery.includes("sale") || lowerQuery.includes("lelong") ?
        `Ada **diskaun** ke? Harga promosi terkini untuk buku ini ialah **RM ${foundBook.price.toFixed(2)}**.` :
        `Harga standard jualan kami untuk buku ini adalah **RM ${foundBook.price.toFixed(2)}** sahaja.`;
      response += priceMsg;

    } else if (wantsRack) {
      // Priority 3: Only location requested
      response += `Buku **${foundBook.title}** terletak di **Rak ${foundBook.rack}**, di bahagian kategori *${foundBook.categorySlug.replace(/-/g, ' ')}*.`;
      response += `Senang je nak cari!`;

    } else if (wantsExist) {
      // Priority 4: Stock check requested
      const stockStatus = foundBook.price > 80 ? "Stok nampak *fresh* dan *ready*!" : "Ya, ada banyak stok! Jangan risau, jom beli.";
      response += `Status Stok: Ya, **${foundBook.title}** ${stockStatus}. Ia berada di **Rak ${foundBook.rack}**.`;

    } else {
      // Default info if book found but intent is general/unclear (The most 'human' sounding response)
      response += `Oh, anda tanya tentang **${foundBook.title}**? Saya boleh berikan detail ringkas:\n`;
      response += `- Harga: **RM ${foundBook.price.toFixed(2)}**\n`;
      response += `- Lokasi rak: **Rak ${foundBook.rack}**\n`;
      response += `Ada nak tanya harga atau lokasi rak lagi ke?`;
    }

    return response;
  }

  // --- 4. Fallback Handling (If book not found, but intent is clear) ---
  const wantsGeneralPrice = priceKeywords.some(keyword => lowerQuery.includes(keyword));
  const wantsGeneralLocation = locationKeywords.some(keyword => lowerQuery.includes(keyword));
  const wantsGeneralExistence = existenceKeywords.some(keyword => lowerQuery.includes(keyword));

  if (wantsGeneralPrice) {
    // Respon untuk 'price'
    return "Anda tanya tentang harga, tetapi buku mana satu ya? Sila beritahu saya **tajuk penuh** buku tu (contoh: 'Harga Busy Book brp?').";
  }

  if (wantsGeneralLocation) {
    // Respon untuk 'rak'/'mana'
    return "Oh, anda nak cari lokasi ya? Maaf, saya tak pasti buku mana satu. Sila sebutkan **tajuk penuh** buku yang anda cari (contoh: 'Busy Book kat rak mana?').";
  }

  if (wantsGeneralExistence) {
    // Respon untuk 'ada'
    return "Anda nak check stok? Boleh! Sila sebutkan nama buku dengan jelas, contohnya 'Sound Book ABC ada stok tak?'.";
  }

  // --- 5. Unrecognized Query (The final fallback) ---
  return "Maaf, saya tak faham soalan anda. Saya hanya boleh bantu untuk mencari **harga**, **lokasi rak** buku, **waktu operasi** kedai, **cara pembayaran**, atau **cadangan buku** yang sesuai. Cuba tanya 'Suggest buku untuk anak 10 tahun'.";
}


export function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  // Initial welcome message
  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          text: "Hi! Saya FZ Smart Bot. Saya boleh membantu anda mencari harga atau lokasi rak buku di sini. Sila bertanya!",
          sender: "bot",
        },
      ])
    }
  }, [isOpen])

  const handleSendMessage = useCallback(async () => {
    const query = inputValue.trim()
    if (query === "") return

    const userMessage: Message = { text: query, sender: "user" }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    setInputValue("")

    // Logika Hardcoded
    const botText = getHardcodedBotResponse(query);
    const botMessage: Message = { text: botText, sender: "bot" }

    // Tambah balasan bot selepas sedikit kelewatan untuk kesan 'menulis'
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessage])
    }, 300);

  }, [inputValue]);


  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed bottom-24 right-8 w-80 sm:w-96 h-[60vh] bg-white rounded-2xl shadow-2xl flex flex-col transition-transform duration-300 transform animate-in slide-in-from-bottom-4 z-50 font-sans">
      <header className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-4 flex justify-between items-center rounded-t-2xl shadow-md">
        <h2 className="font-bold text-lg flex items-center gap-2">
          <Bot className="w-5 h-5" /> FZ Smart Bot
        </h2>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/20 transition"
          aria-label="Close Chatbot"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-xl p-3 max-w-[85%] sm:max-w-xs text-sm shadow-md whitespace-pre-line ${message.sender === "user"
                ? "bg-cyan-600 text-white rounded-br-none"
                : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Tanya tentang buku, harga, atau lokasi..."
            className="flex-1 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
          />
          <Button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === ""}
            className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition duration-200 shadow-md flex items-center gap-1"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
