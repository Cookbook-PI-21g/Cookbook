import axios from "axios";
import { async } from "q";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";

export default function RecipeBox({ remove, allowDelete, id, ...props }) {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        async function getData() {
            axios
                .get(`http://26.65.125.199:8000/recipes/getById/${id}`)
                .then((response) => {
                    setRecipe(response.data.recipe);
                })
                .catch((error) => console.error(error));
        }

        getData();
    }, []);

    return (
        <Container
            className="mb-3 p-2 border border-secondary rounded-3"
            style={{ width: 460 }}
        >
            <Row className="mb-1">
                <Col className="p-0">
                    <Image
                        className="object-fit-cover w-100 rounded"
                        src={`../pics/${Math.floor(Math.random() * 24)}.png`}
                    ></Image>
                </Col>
                <Col className="p-0">
                    <Row>
                        <small>{recipe.category}</small>
                    </Row>
                    <Row>
                        <h3 className="fw-bold">{recipe.title}</h3>
                    </Row>
                    <Row>
                        <small className="fst-italic">
                            {recipe.description}
                        </small>
                    </Row>
                </Col>
            </Row>
            <Row>
                {recipe.portions} порций | {recipe.hours} часа {recipe.minutes} мин.
            </Row>
            <Row>
                <Row className="fw-semibold">Ингридиенты:</Row>
                {recipe.products ? (
                    recipe.products.map((product) => (
                        <Row className="lh-sm">
                            <small>
                                {product.name} - {product.count} {product.unit}
                            </small>
                        </Row>
                    ))
                ) : (
                    <Row></Row>
                )}
            </Row>
            {allowDelete == true ? (
                <Row className="align-self-end">
                    <a className="text-danger text-end" onClick={() => remove(recipe)}>Удалить</a>
                </Row>
            ) : (
                <Row></Row>
            )}
        </Container>
    );
}
