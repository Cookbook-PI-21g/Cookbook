import React from "react";
import { Container, Navbar, Button, Form } from "react-bootstrap";
import UserBar from "./UserBar";
import SearchBar from "./SearchBar";

export default function Navbarheader() {
    return (
        <Navbar className="justify-content-between">
            <Container>
                <Navbar.Brand>
                    <i className="bi bi-book me-2"></i>Кулинарная книга
                </Navbar.Brand>

                <Form className="d-flex">
                    <SearchBar />
                </Form>
                <UserBar />
            </Container>
        </Navbar>
    );
}
