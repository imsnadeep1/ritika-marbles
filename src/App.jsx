import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminPanel from "./admin/AdminPanel";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            <ProductGrid />
          </>
        } />

        <Route path="/admin" element={<AdminPanel />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
