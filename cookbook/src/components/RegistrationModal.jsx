import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function RegistrationModal(props) {
    const [regInfo, setRegInfo] = useState({
        name: "Святослав",
        surname: "Подимир",
        email: "Rus1337@rus.ru",
        password: "podpodpod",
        password_confirmation: "podpodpod",
        csrf: "",
        csrf_token: "",
    });

    useEffect(() => {
        const getData = async () => {
            axios
                .get("http://26.65.125.199:8000/csrf")
                .then((response) => {
                    console.log("Полученный сsrf перед регистрацией:")
                    console.log(response.data);
                    setRegInfo({ ...regInfo, csrf: response.data.token });
                    setRegInfo({ ...regInfo, csrf_token: response.data.token });
                })
                .catch((error) => console.error(error));
        };
        getData();
    }, []);

    const registration = (e) => {
        console.log(regInfo);
        e.preventDefault();

        axios
            .post("http://26.65.125.199:8000/auth/register", regInfo)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.error(error));

        props.onHide();
    };

    return (
        <Modal {...props} aria-labelledby="addRecipeModalLabel" centered>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title id="">Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                            value={regInfo.name}
                            onChange={(e) =>
                                setRegInfo({
                                    ...regInfo,
                                    name: e.target.value,
                                })
                            }
                            placeholder="Ваше имя..."
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control
                            value={regInfo.surname}
                            onChange={(e) =>
                                setRegInfo({
                                    ...regInfo,
                                    surname: e.target.value,
                                })
                            }
                            placeholder="Ваша фамилия..."
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            value={regInfo.email}
                            onChange={(e) =>
                                setRegInfo({
                                    ...regInfo,
                                    email: e.target.value,
                                })
                            }
                            placeholder="Ваш e-mail..."
                            type="email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            value={regInfo.password}
                            onChange={(e) =>
                                setRegInfo({
                                    ...regInfo,
                                    password: e.target.value,
                                })
                            }
                            placeholder="Придумайте пароль..."
                            type="password"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Подтвердите пароль</Form.Label>
                        <Form.Control
                            value={regInfo.password_confirmation}
                            onChange={(e) =>
                                setRegInfo({
                                    ...regInfo,
                                    password_confirmation: e.target.value,
                                })
                            }
                            placeholder="Повторите пароль..."
                            type="password"
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={registration}
                    >
                        Регистрация
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
