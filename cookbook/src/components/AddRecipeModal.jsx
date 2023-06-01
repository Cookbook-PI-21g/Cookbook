import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import IngrInput from "./IngrInput";
import ActionsInput from "./ActionsInput";

export default function AddRecipeModal({ create, ...props }) {
    const [recipe, setRecipe] = useState({
        title: "",
        portions: 1,
        hours: 1,
        description: "",
        ingredients: [],
        actions: [],
    });

    // Создание и возвращение newRecipe в App посредством параметра create
    const addNewRecipe = (e) => {
        e.preventDefault(); // Всем знакомо
        const newRecipe = {
            ...recipe,
            id: Date.now(),
        };
        create(newRecipe);
        setRecipe({
            // Обнуление состояния
            title: "",
            portions: 1,
            hours: 1,
            description: "",
            ingredients: [],
            actions: [],
        });
        console.log(newRecipe);
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
                    <Form.Group className="mb-3" controlId="title">
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
                        <div className="col-auto" controlId="portions">
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
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control
                            value={recipe.description}
                            onChange={(e) =>
                                setRecipe({
                                    ...recipe,
                                    description: e.target.description,
                                })
                            }
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ingredients">
                        <Form.Label>Ингридиенты</Form.Label>
                        <IngrInput/>
                        <Button variant="success" className="btn-sm">
                            <i className="bi bi-plus-lg"></i>
                        </Button>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="actions">
                        <Form.Label>Шаги</Form.Label>
                        <ActionsInput />
                        <Button variant="success" className="btn-sm">
                            <i className="bi bi-plus-lg"></i>
                        </Button>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={addNewRecipe} // срабатывание ф-ии добавления по кнопке
                    >
                        Добавить
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
