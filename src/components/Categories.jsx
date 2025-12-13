const categories = [
  { name: "Marble God Statues", image: "/cat-god.jpg" },
  { name: "Marble Human Statues", image: "/cat-human.jpg" },
  { name: "Marble Temples", image: "/cat-temple.jpg" },
  { name: "Marble Animals", image: "/cat-animals.jpg" },
  { name: "Decorative Items", image: "/cat-decor.jpg" },
  { name: "Custom Marble Work", image: "/cat-custom.jpg" }
];

export default function Categories() {
  return (
    <section id="categories" className="py-12 bg-marble">
      <h2 className="text-3xl font-bold text-center mb-8 text-gold">
        Categories
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition cursor-pointer"
          >
            <img src={cat.image} className="w-full h-48 object-cover" />
            <div className="p-4 text-center font-semibold">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
