export default function Navbar() {
  return (
    <nav className="w-full shadow bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-gold">Ritika Marbles</h1>
        </div>

        <div className="hidden md:flex gap-6 font-medium">
          <a href="#categories" className="hover:text-gold">Categories</a>
          <a href="#products" className="hover:text-gold">Products</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
          <a href="/admin" className="text-gold font-semibold">Admin</a>
        </div>

      </div>
    </nav>
  );
}
