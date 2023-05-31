import React from "react";
import { Button, Form } from "react-bootstrap";

export default function ActionsInput() {
    return (
        <Form.Group>
            <Form.Control className="mb-2" type="text" size="sm" />
            <Form.Control className="mb-2" as="textarea" rows={3} size="sm" />
            <Button className="mb-2" variant="danger" size="sm">Удалить</Button>
        </Form.Group>
    );
}
