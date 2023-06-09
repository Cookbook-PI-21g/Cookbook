import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ProductInput() {
    return (
        <div className="input-group input-group-sm mb-2">
            <Form.Control type="text" />
            <Form.Control type="number" />
            <Form.Select>
                <option value="шт.">шт.</option>
                <option value="гр.">гр.</option>
                <option value="кг.">кг.</option>
            </Form.Select>
            <Button variant="danger">Удалить</Button>
        </div>
    );
}
