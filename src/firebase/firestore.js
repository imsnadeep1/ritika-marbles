import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './config';
const ref = collection(db, 'products');
export const addProduct = (p) => addDoc(ref, p);
export const getProducts = async () => (await getDocs(ref)).docs.map(d=>({id:d.id,...d.data()}));