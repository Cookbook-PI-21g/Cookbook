import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AddRecipeModal(props) {
    return (
        <Modal {...props} aria-labelledby="addRecipeModalLabel" center>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title id="addRecipeModalLabel">
                        Добавить рецепт
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label></Form.Label>
                        <Form.Control type="" placeholder=""/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={props.onHide}>Добавить</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
