import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalDelete(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>  
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Remove Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Delete this customer?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={props.handleSave}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalDelete;