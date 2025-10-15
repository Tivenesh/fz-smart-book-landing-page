'use client';

import { useState, useMemo } from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChatbotButton } from "@/components/chatbot-button";
import { Search, ShoppingCart, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// --- Category Data Mapping (Used for filter names) ---
const categoryData: Record<string, { name: string; description: string }> = {
    "buku-bergambar-3-bahasa": {
        name: "Buku Bergambar 3 Bahasa",
        description: "Koleksi buku bergambar trilingual...",
    },
    "buku-bergambar-2-bahasa": {
        name: "Buku Bergambar 2 Bahasa",
        description: "Koleksi buku bergambar dwibahasa...",
    },
    "buku-pasti-mengenal": {
        name: "Buku Pasti Mengenal",
        description: "Siri buku pengenalan asas...",
    },
    "buku-sayangku-mari-mengenal": {
        name: "Buku Sayangku Mari Mengenal",
        description: "Buku pembelajaran yang penuh kasih sayang...",
    },
    "buku-lets-learn-series": {
        name: "Buku Lets Learn Series",
        description: "Siri pembelajaran interaktif...",
    },
    "buku-aktiviti-matematik": {
        name: "Buku Aktiviti Matematik 1-4",
        description: "Latihan matematik yang menarik...",
    },
    "buku-english-reading-book": {
        name: "Buku English Reading Book 1-4",
        description: "Koleksi buku bacaan Bahasa Inggeris...",
    },
    "shape-story-book": {
        name: "Shape Story Book 1-8",
        description: "Cerita menarik yang mengajar tentang bentuk...",
    },
    "buku-cerita-bahasa-melayu": {
        name: "Buku Cerita Bahasa Melayu",
        description: "Koleksi cerita Bahasa Melayu...",
    },
    "word-search": {
        name: "Word Search 1-4",
        description: "Aktiviti carian perkataan...",
    },
    "sound-book": {
        name: "Sound Book",
        description: "Buku interaktif dengan bunyi...",
    },
    "my-first-book": {
        name: "My First Book",
        description: "Buku pertama yang sempurna...",
    },
    "busy-book": {
        name: "Busy Book",
        description: "Buku aktiviti yang penuh dengan tugasan menarik...",
    },
    "sticker-book": {
        name: "Sticker Book",
        description: "Buku pelekat yang kreatif...",
    },
    "snail-snuffing-toys": {
        name: "Snail Snuffing Toys",
        description: "Mainan pendidikan yang unik...",
    },
}

// --- ALL_BOOKS_DATA: Complete Book Catalog (Full List) ---
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


export default function AllProductPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Generate unique categories for the filter dropdown
    const categories = useMemo(() => {
        const uniqueSlugs = [...new Set(ALL_BOOKS_DATA.map(book => book.categorySlug))];
        return [
            { slug: 'all', name: 'Semua Produk' },
            ...uniqueSlugs.map(slug => ({
                slug,
                name: categoryData[slug]?.name || slug.replace(/-/g, ' ')
            }))
        ];
    }, []);

    // Filter logic using useMemo for performance
    const filteredBooks = useMemo(() => {
        const lowerCaseSearch = searchTerm.toLowerCase();

        return ALL_BOOKS_DATA.filter(book => {
            // 1. Filter by Category
            const categoryMatch = selectedCategory === 'all' || book.categorySlug === selectedCategory;

            // 2. Filter by Search Term (matching title or description)
            const searchMatch = book.title.toLowerCase().includes(lowerCaseSearch) ||
                book.description.toLowerCase().includes(lowerCaseSearch);

            return categoryMatch && searchMatch;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
            <Header />
            <ChatbotButton />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">Semua Produk Kami</h1>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Lihat koleksi lengkap buku dan mainan pendidikan, dengan fungsi carian dan tapisan.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mt-4"></div>
                    </div>

                    {/* --- Search and Filter Bar --- */}
                    <div className="max-w-4xl mx-auto mb-12 p-4 bg-white rounded-2xl shadow-xl border border-purple-100">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search Input */}
                            <div className="relative flex-grow">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Cari mengikut tajuk atau penerangan..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400 transition duration-150 text-lg"
                                />
                            </div>

                            {/* Category Filter Dropdown */}
                            <div className="relative">
                                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full md:w-56 appearance-none pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-white focus:border-purple-400 focus:ring-purple-400 transition duration-150 text-lg font-medium text-gray-700"
                                >
                                    {categories.map((category) => (
                                        <option key={category.slug} value={category.slug}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --- End Search and Filter Bar --- */}


                    {/* --- Books Grid --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
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
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-2xl font-black text-purple-600">RM {book.price.toFixed(2)}</span>
                                            <span className="bg-yellow-400 text-purple-700 font-bold px-3 py-1 rounded-lg text-sm">
                                                {book.rack}
                                            </span>
                                        </div>
                                        {/* The link now uses the specific categorySlug and ID for the product detail page */}
                                        <Link href={`/categories/${book.categorySlug}/${book.id}`}>
                                            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                                                <ShoppingCart className="w-5 h-5" />
                                                Lihat Butiran
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Empty search result message
                            <div className="col-span-full text-center py-12 bg-white rounded-xl shadow-md">
                                <p className="text-2xl text-gray-500 font-semibold mb-2">😭 Tiada Produk Ditemui</p>
                                <p className="text-gray-600">Sila cuba carian atau pilihan kategori lain.</p>
                            </div>
                        )}
                    </div>
                    {/* --- End Books Grid --- */}

                </div>
            </main>

            <Footer />
        </div>
    )
}