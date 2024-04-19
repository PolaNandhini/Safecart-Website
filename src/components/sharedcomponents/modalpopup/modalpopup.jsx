import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { CloseButton } from 'react-bootstrap';

function Modalpopup(props) {
    const [show,setShow] = useState([]);
    useEffect(()=>{
        setShow(props.open)
    },[props.open])
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>
                        {
                            props && props.title
                        }
                    </Modal.Title>
                    <CloseButton variant='black' onClick={()=>{props.closeModal()}}></CloseButton>
                </Modal.Header>

                <Modal.Body>
                    <p>
                        {
                            props && props.children
                        }
                    </p>
                </Modal.Body>
                {
                    props && props.action &&
                    <Modal.Footer>
                        Footer
                    </Modal.Footer>
                }

            </Modal>
        </div>
    );
}

export default Modalpopup;