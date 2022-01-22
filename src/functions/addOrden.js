import firebaseApp from "../firebase/credenciales"

import {getFirestore, collection, doc, setDoc} from "firebase/firestore"

const db = getFirestore()

function addOrden(infoOrden){
    const collectionRef = collection(db, "ordenes")
    const docRef = doc(collectionRef, infoOrden.idCompra)
    setDoc(docRef, infoOrden)
}

export default addOrden;