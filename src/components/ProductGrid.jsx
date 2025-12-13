import ProductCard from "./ProductCard";

const sampleProducts = [
  { name: "Marble Radha Krishna Statue", category: "Marble God Statues", price: 25000, image: "/prod-rk.jpg" },
  { name: "Marble Shiva Lingam", category: "Marble God Statues", price: 18000, image: "/prod-shivling.jpg" },
  { name: "White Marble Human Bust", category: "Marble Human Statues", price: 32000, image: "/prod-bust.jpg" },
  { name: "Marble Elephant Sculpture", category: "Marble Animals", price: 15000, image: "/prod-elephant.jpg" }
];

export default function ProductGrid() {
  return (
    <section id="products" className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gold">
        Featured Products
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {sampleProducts.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </section>
  );
}
