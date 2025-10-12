import { BookCard } from "./book-card"

const books = [
  {
    id: 1,
    title: "Haiwan di Hutan / Animals in the Forest",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-forest-animals.jpg",
  },
  {
    id: 2,
    title: "Buah-Buahan Tempatan / Local Fruits",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-tropical-fruit.jpg",
  },
  {
    id: 3,
    title: "Keluarga Saya / My Family",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-happy-family-i.jpg",
  },
  {
    id: 4,
    title: "Warna-Warni / Colors",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-rainbow-and-co.jpg",
  },
  {
    id: 5,
    title: "Nombor 1-10 / Numbers 1-10",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-numbers-and-co.jpg",
  },
  {
    id: 6,
    title: "Bentuk dan Saiz / Shapes and Sizes",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-geometric-shap.jpg",
  },
  {
    id: 7,
    title: "Hari Saya / My Day",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-daily-activiti.jpg",
  },
  {
    id: 8,
    title: "Cuaca / Weather",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-sun-rain-cloud.jpg",
  },
  {
    id: 9,
    title: "Kenderaan / Vehicles",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-cars-trucks-bu.jpg",
  },
  {
    id: 10,
    title: "Makanan Kegemaran / Favorite Foods",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-delicious-food.jpg",
  },
  {
    id: 11,
    title: "Pakaian / Clothing",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-clothes-shirt-.jpg",
  },
  {
    id: 12,
    title: "Muzik dan Bunyi / Music and Sounds",
    price: 23.9,
    image: "/colorful-children-s-book-cover-with-musical-instru.jpg",
  },
]

export function BookGrid() {
  return (
    <section className="container mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  )
}
