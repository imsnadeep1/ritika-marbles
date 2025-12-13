export default function Footer() {
  return (
    <footer id="contact" className="bg-marble py-10 mt-12 text-center">
      <h3 className="text-2xl font-bold text-gold">Ritika Marbles</h3>

      <p className="mt-2 text-gray-700">Jaipur, Rajasthan</p>
      <p className="text-gray-700">Contact: +91-9900635326</p>

      <p className="text-gray-600 mt-4">
        © {new Date().getFullYear()} Ritika Marbles — All Rights Reserved.
      </p>
    </footer>
  );
}
