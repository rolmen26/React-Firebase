import React from "react";

import { Container, Form, Button } from "react-bootstrap";

import loginEmailAndPassword from "../functions/loginEmailPassword";

function Login() {
  async function submitHandler(e) {
    e.preventDefault();
    const email = e.target.elements.formCorreo.value;
    const password = e.target.elements.formContra.value;
    await loginEmailAndPassword(email, password);
  }

  return (
    <Container>
      <h1>Inicia sesión</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formCorreo">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formContra">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
