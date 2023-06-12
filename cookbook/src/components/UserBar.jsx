import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import RegistrationModal from "./RegistrationModal";
import LoginModal from "./LoginModal";
import axios from "axios";

export default function UserBar() {
    const [modalLoginShow, setLoginModalShow] = useState(false);
    const [modalRegShow, setRegModalShow] = useState(false);

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.setItem("token", "");
        window.location.reload();
    };

    const userInfo = JSON.parse(localStorage.getItem("user"));
    //console.log(userInfo.email);
    return (
        <div className="d-flex">
            {localStorage.getItem("user") ? (
                <Nav className="align-middle">
                    <Nav.Item>
                        <Nav.Link>{userInfo.email}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={logout}>Выход</Nav.Link>
                    </Nav.Item>
                </Nav>
            ) : (
                <Nav>
                    <Nav.Item>
                        <Nav.Link onClick={() => setLoginModalShow(true)}>
                            Вход
                        </Nav.Link>
                    </Nav.Item>
                    <LoginModal
                        show={modalLoginShow}
                        onHide={() => setLoginModalShow(false)}
                    />
                    <Nav.Item>
                        <Nav.Link onClick={() => setRegModalShow(true)}>
                            Регистрация
                        </Nav.Link>
                    </Nav.Item>
                    <RegistrationModal
                        show={modalRegShow}
                        onHide={() => setRegModalShow(false)}
                    />
                </Nav>
            )}
        </div>
    );
}
