import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "./config";

const productRef = collection(db, "products");

export const addProduct = async (product) => {
  await addDoc(productRef, product);
};

export const getProducts = async () => {
  const snapshot = await getDocs(productRef);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const updateProduct = async (id, data) => {
  const ref = doc(db, "products", id);
  await updateDoc(ref, data);
};

export const deleteProductById = async (id) => {
  const ref = doc(db, "products", id);
  await deleteDoc(ref);
};
