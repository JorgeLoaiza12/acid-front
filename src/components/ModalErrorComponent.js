import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../assets/styles/ModalComponent.css';

const LoadingSpinner = (props) => {
    return (
        <Modal show={props.show} onHide={props.closeModalError}>
            <Modal.Body>
                <p className="text-center">{props.errorText}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModalError}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default LoadingSpinner;