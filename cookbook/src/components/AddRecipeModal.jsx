import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ActionsInput from "./ActionsInput";
import axios from "axios";
import ProductsInputBox from "./ProductsInputBox";


export default function AddRecipeModal({ create, ...props }) {
    const [recipe, setRecipe] = useState({
        title: "Тестовый запрос с клиента 3",
        description:
            "Тестовый запрос с клиента Тестовый запрос с клиента Тестовый запрос с клиента",
        portions: 2,
        hours: 22,
        minutes: 3,
        category_id: 4,
        products: [
            {
                id: 4,
                count: 5,
                unit_id: 2,
            },
            {
                id: 2,
                count: 1000,
                unit_id: 1,
            },
        ],
    });

    const createRecipe = async (e) => {
        e.preventDefault();
        const newRecipe = recipe;
        console.log(newRecipe);
        await axios
            .post("http://26.65.125.199:8000/recipes/create", newRecipe)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.error(error));

        setRecipe({
            title: "",
            portions: 1,
            hours: 1,
            minutes: 1,
            description: "",
            products: [
                {
                    id: 4,
                    count: 5,
                    unit_id: 2,
                },
                {
                    id: 2,
                    count: 1000,
                    unit_id: 1,
                },
            ],
            actions: [],
        });
        props.onHide();
    };

    return (
        <Modal {...props} aria-labelledby="addRecipeModalLabel" centered>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title id="addRecipeModalLabel">
                        Добавить рецепт
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Название блюда</Form.Label>
                        <Form.Control
                            value={recipe.title}
                            onChange={(e) =>
                                setRecipe({ ...recipe, title: e.target.value })
                            }
                            type="text"
                            placeholder="Ваше название..."
                        />
                    </Form.Group>
                    <div className="row justify-content-center mb-3">
                        <div className="col-auto">
                            <Form.Label>Порции</Form.Label>
                            <Form.Control
                                value={recipe.portions}
                                onChange={(e) =>
                                    setRecipe({
                                        ...recipe,
                                        portions: e.target.portions,
                                    })
                                }
                                type="number"
                                placeholder="Кол-во порций..."
                                size="sm"
                            />
                        </div>
                        <div className="col-auto">
                            <Form.Label>Время</Form.Label>
                            <Form.Control
                                value={recipe.hours}
                                onChange={(e) =>
                                    setRecipe({
                                        ...recipe,
                                        portions: e.target.hours,
                                    })
                                }
                                type="number"
                                placeholder="Кол-во часов..."
                                size="sm"
                            />
                        </div>
                    </div>
                    <Form.Group className="mb-3">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control
                            value={recipe.description}
                            onChange={(e) =>
                                setRecipe({
                                    ...recipe,
                                    description: e.target.value,
                                })
                            }
                            type="text"
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Ингридиенты</Form.Label>
                        <ProductsInputBox></ProductsInputBox>
                        
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="actions">
                        <Form.Label>Шаги</Form.Label>
                        <ActionsInput />
                        <Button variant="success" className="btn-sm">
                            <i className="bi bi-plus-lg"></i>
                        </Button>
                    </Form.Group> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={createRecipe} // срабатывание ф-ии добавления по кнопке
                    >
                        Добавить
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
