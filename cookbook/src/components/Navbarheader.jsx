import React from "react";
import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";
import LoginModal from "./LoginModal";

export default function Navbarheader() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Navbar className="justify-content-between">
            <Container>
                <Navbar.Brand>
                    <i className="bi bi-book me-2"></i>Кулинарная книга
                </Navbar.Brand>

                <Form className="d-flex">
                    <Form.Control type="text"></Form.Control>
                    <Button className="ms-1" variant="success">
                        <i className="bi bi-search"></i>
                    </Button>
                </Form>
                <Nav>
                    <Nav.Link onClick={() => setModalShow(true)}>Вход</Nav.Link>
                    <LoginModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <Nav.Link href="">Регистрация</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
