import firebaseApp from "../firebase/credenciales";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const db = getFirestore();

async function filtrarDatos(stringBusqueda) {
  const docsFiltrado = [];

  const collectionRef = collection(db, "ordenes");
  const queryCliente = query(
    collectionRef,
    where("cliente", "==", stringBusqueda)
  );

  const queryCourier = query(
    collectionRef,
    where("courier", "==", stringBusqueda)
  );

  const arraySnapshots = await Promise.all([
    getDocs(queryCliente),
    getDocs(queryCourier),
  ]);

  arraySnapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      docsFiltrado.push(doc.data());
    });
  });
  console.log(docsFiltrado);

  return docsFiltrado;
}

export default filtrarDatos;
