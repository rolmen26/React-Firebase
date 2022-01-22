// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAtb8Gqx_cSXgQ79L10lMSwf5Om8_3BsEg",
  authDomain: "proyectomoviles-9d7c4.firebaseapp.com",
  databaseURL: "https://proyectomoviles-9d7c4-default-rtdb.firebaseio.com",
  projectId: "proyectomoviles-9d7c4",
  storageBucket: "proyectomoviles-9d7c4.appspot.com",
  messagingSenderId: "594983031523",
  appId: "1:594983031523:web:fac9580a1d1fcb8cd8ebd6",
  measurementId: "G-YX73C4SX7N",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
