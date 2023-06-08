import React, { useEffect, useLayoutEffect, useState } from "react";
import RecipeBox from "./RecipeBox";
import axios from "axios";
import { Container } from "react-bootstrap";

export default function RecipeBoxes() {
    const [ids, setIds] = useState([]);
    //const controller = new AbortController();
    useEffect(() => {
        const getData = async () => {
            axios
                .get("http://26.65.125.199:8000/recipes/getLast")
                .then((response) => {
                    console.log("Результат получения recipes/getLast:");
                    console.log(response.data.recipes);
                    setIds(response.data.recipes);
                })
                .catch((error) => console.error(error));
        }
        getData();
        
    }, []);

    // console.log("Массив рецептов:");
    // console.log(ids);

    return (
        <Container className="d-flex flex-wrap justify-content-around">
            {ids.map((recipe) => (
                //console.log(recipe.id)
                <RecipeBox id={recipe.id} key={recipe.id} />
                ))}
        </Container>
    );
}
