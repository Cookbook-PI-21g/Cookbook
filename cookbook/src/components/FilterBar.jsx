import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function FilterBar() {
    return (
        <Container className="d-flex">
            <Form className="d-flex justify-content-between w-100 align-items-center">
                <Form.Select className="m-1">
                    <option value="">Любая кухня</option>
                </Form.Select>
                <Form.Select className="m-1">
                    <option value="">Любое блюдо</option>
                </Form.Select>
                <Form.Select className="m-1">
                    <option value="">Любое меню</option>
                </Form.Select>
                <Button><i class="bi bi-arrow-right"></i></Button>
            </Form>
        </Container>
    );
}
