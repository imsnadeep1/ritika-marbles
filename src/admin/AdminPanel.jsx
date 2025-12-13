import { useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { addProduct, getProducts, updateProduct, deleteProductById } from "../firebase/firestore";
import ProductForm from "./ProductForm";

const ADMIN_EMAIL = "ssandeep1360@gmail.com";

export default function AdminPanel() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => { loadProducts(); }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const login = async () => await signInWithPopup(auth, provider);
  const logout = async () => await signOut(auth);

  if (!user)
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
        <button onClick={login} className="px-6 py-3 bg-gold text-white rounded shadow">
          Sign in with Google
        </button>
      </div>
    );

  if (user.email !== ADMIN_EMAIL)
    return (
      <div className="p-10 text-center text-red-600 font-bold text-xl">
        Access Denied — You are not an Admin
      </div>
    );

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded">
          Logout
        </button>
      </div>

      <ProductForm
        onSubmit={async (data) => {
          if (editing) { 
            await updateProduct(editing.id, data);
            setEditing(null);
          } else { 
            await addProduct(data); 
          }
          loadProducts();
        }}
        defaultValues={editing}
      />

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-6">All Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="shadow p-4 rounded bg-white">
              <img src={p.image} className="h-40 w-full object-cover rounded" />
              <h4 className="font-bold mt-2">{p.name}</h4>
              <p className="text-sm text-gray-600">{p.category}</p>
              <p className="text-gold font-semibold mt-1">₹{p.price}</p>

              <div className="flex gap-2 mt-4">
                <button onClick={() => setEditing(p)} className="px-3 py-1 bg-blue-500 text-white rounded">
                  Edit
                </button>
                <button onClick={async () => { await deleteProductById(p.id); loadProducts(); }}
                  className="px-3 py-1 bg-red-500 text-white rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
