import { useState, useEffect } from "react";

const categories = [
  "Marble God Statues",
  "Marble Human Statues",
  "Marble Temples",
  "Marble Animals",
  "Decorative Items",
  "Custom Marble Work"
];

export default function ProductForm({ onSubmit, defaultValues }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    image: ""
  });

  useEffect(() => {
    if (defaultValues) setForm(defaultValues);
  }, [defaultValues]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      className="shadow p-6 bg-white rounded"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({ name: "", category: "", price: "", image: "" });
      }}
    >
      <h3 className="text-xl font-bold mb-4">
        {defaultValues ? "Edit Product" : "Add New Product"}
      </h3>

      <input name="name" placeholder="Product Name" value={form.name}
        onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

      <select name="category" value={form.category} onChange={handleChange}
        className="w-full p-2 border rounded mb-3" required>
        <option value="">Select Category</option>
        {categories.map((c, i) => (
          <option key={i} value={c}>{c}</option>
        ))}
      </select>

      <input name="price" type="number" placeholder="Price (₹)" value={form.price}
        onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

      <input name="image" placeholder="Image URL" value={form.image}
        onChange={handleChange} className="w-full p-2 border rounded mb-3" required />

      <button className="px-4 py-2 bg-gold text-white rounded shadow">
        {defaultValues ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
