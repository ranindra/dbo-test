import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalAddCustomer(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>  
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="city" placeholder="Address" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={props.handleSave}>
              Add Customer
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalAddCustomer;