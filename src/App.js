import React, { useState } from "react";

import Container from "react-bootstrap/Container";

import Home from "./screens/Home";
import Login from "./screens/Login";

import firebaseApp from "./firebase/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  async function getRol(uid) {
    const docRef = doc(firestore, `users/${uid}`);
    const docuCifrada = await getDoc(docRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData final", userData);
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

  return <Container fluid>{user ? <Home user = {user} /> : <Login />}</Container>;
}

export default App;
