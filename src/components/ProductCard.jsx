export default function ProductCard({ product }) {
  return (
    <div className="shadow bg-white rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
      <img
        src={product.image}
        className="w-full h-56 object-cover"
        alt={product.name}
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.category}</p>
        <p className="text-gold font-semibold mt-2">₹{product.price}</p>
      </div>
    </div>
  );
}
