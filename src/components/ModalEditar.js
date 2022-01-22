import React from "react";

import { Modal, Stack, Form, Button} from "react-bootstrap";

import addOrden from "../functions/addOrden";

function ModalEditar({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoOrdenes,
  ordenEditar,
  setOrdenEditar,
}) {
  function editarOrdenModal() {
    //obtener informacion del formulario
    const idCompra = document.getElementById("idCompra").value;
    const cliente = document.getElementById("cliente").value;
    const fechaCompra = document.getElementById("fechaCompra").value;
    const fechaEntrega = document.getElementById("fechaEntrega").value;
    const courier = document.getElementById("courier").value;
    const tracking = document.getElementById("tracking").value;
    const costo = document.getElementById("costo").value;
    const detalle = document.getElementById("detalle").value;
    const observacion = document.getElementById("observacion").value;
    const estado = document.getElementById("estado").value;

    //enviar informacion al servidor
    const infoOrden = {
      idCompra,
      cliente,
      fechaCompra,
      fechaEntrega,
      courier,
      tracking,
      costo,
      detalle,
      observacion,
      estado,
    };
    addOrden(infoOrden);
    //cerrar modal
    setOrdenEditar(null);
    actualizarEstadoOrdenes();
    setIsModalEditar(false);
  }

  const [ordenEstado, setOrdenEstado] = React.useState(ordenEditar);

  return (
    <Modal
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setOrdenEditar(null);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Editar orden</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              id="idCompra"
              type="text"
              placeholder="ID Compra"
              className="mb-1"
              value={ordenEstado.idCompra}
              editable={false}
            />
            <Form.Control
              id="cliente"
              type="text"
              placeholder="Cliente"
              className="mb-1"
              value={ordenEstado.cliente}
              editable={false}
            />
            <Form.Control
              id="fechaCompra"
              type="text"
              placeholder="Fecha de compra"
              className="mb-1"
              value={ordenEstado.fechaCompra}
              editable={false}
            />
            <Form.Control
              id="fechaEntrega"
              type="text"
              placeholder="Fecha de entrega"
              className="mb-1"
              value={ordenEstado.fechaEntrega}
              editable={false}
            />
            <Form.Control
              id="courier"
              type="text"
              placeholder="Courier"
              className="mb-1"
              value={ordenEstado.courier}
              editable={false}
            />
            <Form.Control
              id="tracking"
              type="text"
              placeholder="Tracking"
              className="mb-1"
              value={ordenEstado.tracking}
              editable={false}
            />
            <Form.Control
              id="costo"
              type="int"
              placeholder="Costo de compra"
              className="mb-1"
              value={ordenEstado.costo}
              editable={false}
            />
            <Form.Control
              id="detalle"
              type="text"
              placeholder="Detalle"
              className="mb-1"
              value={ordenEstado.detalle}
              editable={false}
            />
            <Form.Control
              id="observacion"
              type="text"
              placeholder="Observacion"
              className="mb-1"
              value={ordenEstado.observacion}
              editable={false}
            />
            <Form.Control
              id="estado"
              type="text"
              placeholder="Estado"
              className="mb-1"
              value={ordenEstado.estado}
              onChange={(e) =>
                setOrdenEstado({
                  ...ordenEstado,
                  estado: e.target.value,
                })
              }
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditar(false);
            setOrdenEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarOrdenModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditar;
