import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

export default function LoginModal({ get, ...props }) {
    const [userInfo, setUserInfo] = useState({
        email: "Denis@denis.den",
        password: "denisdenis",
    });
    const login = (e) => {
        console.log(userInfo);
        e.preventDefault();

        axios
            .get("http://26.65.125.199:8000/csrf")
            .then((response) => {
                const csrfToken = response.data.token;

                // console.log(csrfToken);

                const formData = new URLSearchParams();
                formData.append("email", userInfo.email);
                formData.append("password", userInfo.password);
                formData.append("csrfToken", csrfToken);

                const config = {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                };

                axios
                    .post(
                        "http://26.65.125.199:8000/auth/login",
                        formData.toString(),
                        config
                    )
                    .then((response) => {
                        console.log(response.data);
                        console.log(
                            "акцесс токен: " + response.data.access_token
                        );
                        localStorage.setItem(
                            "token",
                            response.data.access_token
                        );
                        localStorage.setItem("user", JSON.stringify(userInfo));
                    })
                    .catch((error) => console.error(error));
            })
            .catch((error) => console.error(error));
        props.onHide();
    };
    return (
        <Modal {...props} aria-labelledby="addRecipeModalLabel" centered>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title id="">Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            value={userInfo.email}
                            onChange={(e) =>
                                setUserInfo({
                                    ...userInfo,
                                    email: e.target.value,
                                })
                            }
                            placeholder="Ваш email..."
                            type="email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            value={userInfo.password}
                            onChange={(e) =>
                                setUserInfo({
                                    ...userInfo,
                                    password: e.target.value,
                                })
                            }
                            placeholder="Ваш пароль..."
                            type="password"
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={login}>
                        Вход
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
