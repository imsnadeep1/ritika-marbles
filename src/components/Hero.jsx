export default function Hero() {
  return (
    <div
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-marble.jpg')" }}
    >
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded shadow-xl text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gold drop-shadow">
          Premium Hand-Carved Marble Statues & Temples
        </h1>

        <p className="mt-4 text-gray-700 text-lg">
          Finest craftsmanship from skilled artisans in India.
        </p>
      </div>
    </div>
  );
}
