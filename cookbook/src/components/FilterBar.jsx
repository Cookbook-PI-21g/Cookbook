import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function FilterBar() {
    return (
        <Container className="d-flex mb-5">
            <Form className="d-flex justify-content-between w-100 align-items-center">
                <Form.Select className="m-1">
                    <option value="">Любая кухня</option>
                    <option value="">Армянская</option>
                    <option value="">Азиатская</option>
                </Form.Select>
                <Form.Select className="m-1">
                    <option value="">Любое блюдо</option>
                    <option value="">Первое</option>
                    <option value="">Второе</option>
                    <option value="">Десерт</option>
                </Form.Select>
                <Form.Select className="m-1">
                    <option value="">Любое меню</option>
                </Form.Select>
                <Button><i className="bi bi-arrow-right"></i></Button>
            </Form>
        </Container>
    );
}
