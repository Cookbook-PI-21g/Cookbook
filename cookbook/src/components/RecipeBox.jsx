import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function RecipeBox({remove, ...props}) {
    const deleteRecipe = (e) => {
        e.preventDefault();
        console.log(props.recipe);
        remove(props.recipe);
    };

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
                        <small>категория, категория, категория</small>
                    </Row>
                    <Row>
                        <h4>{props.recipe.title}</h4>
                    </Row>
                </Col>
            </Row>
            <Row>
                {props.recipe.portions} порций | {props.recipe.hours} часа{" "}
                 мин |  ингридиентов
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
