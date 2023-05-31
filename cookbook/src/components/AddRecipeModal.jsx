import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AddRecipeModal({ create, ...props }) {
    const [recipe, setRecipe] = useState({
        title: "",
        portions: 1,
        hours: 2,
        minutes: 3,
        ingr: [],
        description: "",
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
            // Обнуление состояния (пока не совсем обнуление)
            title: "",
            portions: 1,
            hours: 2,
            minutes: 3,
            ingr: [],
            description: "",
        });
        console.log(newRecipe);
        props.onHide();
    };

    const newIngrInput = (i) => {
        
    }

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
                    {/* <Form.Group className="mb-3" controlId="">
                        <Form.Label>Фото</Form.Label>
                        <Form.File placeholder="" />
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="">
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
                    <Form.Group className="mb-3" controlId="">
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
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Ингридиенты</Form.Label>
                        <Form.Control
                            value={recipe.portions}
                            onChange={(e) =>
                                setRecipe({
                                    ...recipe,
                                    portions: e.target.portions,
                                })
                            }
                            type="text"
                            placeholder="Кол-во порций..."
                        />
                        {}
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
