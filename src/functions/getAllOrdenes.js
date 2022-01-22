import firebaseApp from "../firebase/credenciales";

import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default async function getAllOrdenes() {
  const ordenes = [];
  const ordenesRef = collection(db, "ordenes");
  const snapshot = await getDocs(ordenesRef);
  snapshot.forEach((doc) => {
    ordenes.push(doc.data());
  });
  return ordenes;
}
 