import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import {getLabels} from "../utils";

const HandleList = (props) => {
    const {handleChange, singledata, listHandler, label, id = ''} = props
    const [show, setShow] = useState(false)


    const {buttonTitle, actionLabel} = getLabels(label)
    const isActionDelete = actionLabel === 'Delete'

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (<>
        <Button variant={isActionDelete ? "danger" : "primary"} onClick={handleShow}> {buttonTitle} </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title> {label} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    placeholder="Title"
                    name="title" value={singledata.title}
                    onChange={(event) => handleChange(event, singledata.index)}
                    className="d-block my-3"
                    disabled={isActionDelete}
                />
                <input
                    type="text"
                    placeholder="Author"
                    name="author" value={singledata.author}
                    onChange={(event) => handleChange(event, singledata.index)}
                    className="d-block my-3"
                    disabled={isActionDelete}
                />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant={isActionDelete ? "danger" : "primary"} onClick={() => {
                    listHandler(id, singledata.index)
                    handleClose()
                }}>
                    {actionLabel}
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}

export default HandleList