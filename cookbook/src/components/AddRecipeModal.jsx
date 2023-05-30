import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AddRecipeModal({ create, ...props }) {
    const [recipe, setRecipe] = useState({
        title: "",
        portions: 1,
        hours: 2,
        minutes: 3,
        ingr: 4,
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
            ingr: 4,
            description: "",
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
                    {/* <Form.Group className="mb-3" controlId="">
                        <Form.Label>Фото</Form.Label>
                        <Form.File placeholder="" />
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={addNewRecipe}  // срабатывание ф-ии добавления по кнопке 
                    >
                        Добавить
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
