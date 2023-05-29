import React from "react";
import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";

export default function Navbarheader() {
    return (
        <Navbar className="justify-content-between">
            <Container>
                <Navbar.Brand>
                    <i class="bi bi-book me-2"></i>Кулинарная книга
                </Navbar.Brand>

                <Form className="d-flex">
                    <Form.Control type="text"></Form.Control>
                    <Button className="ms-1" variant="success">
                        <i class="bi bi-search"></i>
                    </Button>
                </Form>
                <Nav>
                    <Nav.Link href="">Вход</Nav.Link>
                    <Nav.Link href="">Регистрация</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
