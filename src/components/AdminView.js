import React from "react";

import { Container, Form, Button, Stack, Table } from "react-bootstrap";

import getAllOrdenes from "../functions/getAllOrdenes";

//Modelos
import ModalEditar from "./ModalEditar";

import filtrarDatos from "../functions/filtrarDatos";

function AdminView() {
  const [ordenes, setOrdenes] = React.useState([]);
  const [isModalEditar, setIsModalEditar] = React.useState(false);
  const [ordenEditar, setOrdenEditar] = React.useState({});

  async function busquedaFormHandler(e){
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const nuevosDocs = await filtrarDatos(busqueda);
    setOrdenes(nuevosDocs);
  }

  function actualizarEstadoOrdenes() {
    getAllOrdenes().then((ordenes) => {
      setOrdenes(ordenes);
    });
  }

  React.useEffect(() => {
    actualizarEstadoOrdenes();
  }, []);

  return (
    <Container fluid>
      {ordenEditar && (
        <ModalEditar
          isModalEditar={isModalEditar}
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoOrdenes={actualizarEstadoOrdenes}
          ordenEditar={ordenEditar}
          setOrdenEditar={setOrdenEditar}
        />
      )}
      <Form onSubmit={busquedaFormHandler}>
        <Stack direction="horizontal">
          <Form.Group controlId="busqueda" className="w-75 m-3">
            <Form.Control type="text" placeholder="Buscar" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Buscar
          </Button>
          <Button variant="light" onClick={() =>{
            const input = document.getElementById("busqueda");
            input.value = "";
            actualizarEstadoOrdenes();
          }}>Restear</Button>
        </Stack>
      </Form>

      <hr />
      <Button variant="primary" onClick={actualizarEstadoOrdenes}> Actualizar ordenes </Button>

      <Table>
        <thead>
          <tr>
            <th>ID Compra</th>
            <th>Cliente</th>
            <th>Fecha de compra</th>
            <th>Fecha de entrega</th>
            <th>Courier</th>
            <th>Tracking</th>
            <th>Costo de compra</th>
            <th>Detalle</th>
            <th>Observacion</th>
            <th>Estado</th>
            <th>Cambiar estado</th>
          </tr>
        </thead>

        <tbody>
          {ordenes &&
            ordenes.map((orden, index) => (
              <tr key={index}>
                <td>{orden.idCompra}</td>
                <td>{orden.cliente}</td>
                <td>{orden.fechaCompra}</td>
                <td>{orden.fechaEntrega}</td>
                <td>{orden.courier}</td>
                <td>{orden.tracking}</td>
                <td>{orden.costo}</td>
                <td>{orden.detalle}</td>
                <td>{orden.observacion}</td>
                <td>{orden.estado}</td>
                <td>
                  <Button
                    variant="dark"
                    onClick={() => {
                      setOrdenEditar({...orden});
                      setIsModalEditar(true);
                    }}
                  >
                    Editar estado
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminView;
