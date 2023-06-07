import axios from "axios";
import { async } from "q";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function RecipeBox({ id, ...props }) {
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

    // console.log(recipe);
    const deleteRecipe = (e) => {};

    return (
        <Container
            className="mb-3 p-2 border border-warning"
            style={{ width: 460 }}
        >
            <Row className="mb-1">
                <Col className="p-0">
                    <Image
                        className="object-fit-cover w-100 h-100"
                        src={require("../pics/1.jpg")}
                    ></Image>
                </Col>
                <Col className="p-0">
                    <Row>
                        <small>{recipe.category}</small>
                    </Row>
                    <Row>
                        <h4>{recipe.title}</h4>
                    </Row>
                </Col>
            </Row>
            <Row>
                {/* {recipe.portions} порций | {recipe.hours} часа {recipe.minutes}{" "}
                мин | {recipe.products.length} ингридиентов */}
                {recipe.portions} порций | {recipe.hours} часа {recipe.minutes}{" "}
                мин | ингридиентов
            </Row>
            <Row>
                <Col>
                    <a href="">в избранное</a>
                </Col>
                <Col>
                    <a href="">поделиться</a>
                </Col>
                <Col>
                    <a onClick={deleteRecipe} href="">
                        удалить
                    </a>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}
