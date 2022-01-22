import React from "react";

import AdminView from "../components/AdminView";
import UserView from "../components/UserView";

import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";

import { Container, Stack, Button } from "react-bootstrap";

const auth = getAuth(firebaseApp);

function Home({ user }) {
  return (
    <Container fluid>
      <Stack direction="horizontal" className="justify-content-between">
        <p style={{ fontSize: 24 }}> Bienvenido, {user.email} </p>
        <Button onClick={() => signOut(auth)}>Cerrar sesion</Button>
      </Stack>
      <hr />
      {user.rol === "admin" ? <AdminView /> : <UserView />}
    </Container>
  );
}

export default Home;
