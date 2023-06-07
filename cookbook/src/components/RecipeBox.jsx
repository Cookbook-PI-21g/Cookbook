import axios from "axios";
import { async } from "q";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

let imgPlaceholder = [
    "../pics/1.jpg",
    "../pics/3.png",
    "../pics/4.jpg",
    "../pics/5.jpg",
    "../pics/6.jpg",
    "../pics/7.jpg",
    "../pics/8.jpg",
];

export default function RecipeBox({ id, ...props }) {
    const [recipe, setRecipe] = useState({});

    let randomImg = imgPlaceholder[Math.floor(Math.random() * imgPlaceholder.length)];
    // console.log(randomImg)

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
    const deleteRecipe = (e) => {
        
    };

    return (
        <Container
            className="mb-3 p-2 border border-warning rounded-3"
            style={{ width: 460 }}
        >
            <Row className="mb-1">
                <Col className="p-0">
                    <Image
                        className="object-fit-cover w-100 h-100 rounded"
                        src={randomImg}
                    ></Image>
                </Col>
                <Col className="p-0">
                    <Row>
                        <small>{recipe.category}</small>
                    </Row>
                    <Row>
                        <h3>{recipe.title}</h3>
                    </Row>
                    <Row>
                        <small className="fst-italic">
                            {recipe.description}
                        </small>
                    </Row>
                </Col>
            </Row>
            <Row>
                {recipe.portions} порций | {recipe.hours} часа {recipe.minutes}{" "}
                мин | {} ингридиентов
            </Row>
            <Row>
                <Col>
                    <a href="">в избранное</a>
                </Col>
                <Col>
                    <a onClick={deleteRecipe} href="">
                        удалить
                    </a>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    );
}
