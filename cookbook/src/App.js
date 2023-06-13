import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbarheader from "./components/Navbarheader";
import FilterBar from "./components/FilterBar";

import AddRecipeModal from "./components/AddRecipeModal";
import { Alert, Container, Button } from "react-bootstrap";
import axios from "axios";
import RecipeBoxes from "./components/RecipeBoxes";

function App() {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "token"
    )}`;

    useEffect(() => {
        const getData = async () => {
            axios
                .get("http://26.65.125.199:8000/categories/get")
                .then((response) => {
                    // console.log("Результат получения категорий:");
                    // console.log(response.data.data);
                    // Преобразование массива данных в объект для удобства доступа по id
                    const categoriesIdToName = response.data.data.map(
                        (item) => {
                            return {
                                id: item.id,
                                name: item.name,
                            };
                        }
                    );
                    // response.data.data.forEach((item) => {
                    //     categories[item.id] = item.name;
                    // });
                    // Сохранение объекта в localStorage
                    localStorage.setItem(
                        "categories",
                        JSON.stringify(categoriesIdToName)
                    );
                    console.log(JSON.parse(localStorage.getItem("categories")));
                })
                .catch((error) => console.error(error));
        };
        getData();
    }, []);
    
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="App">
            <Navbarheader />
            <Container style={{ maxWidth: 1000 }}>
                <h1 className="mt-5 mb-5">
                    Все
                    <br />
                    Рецепты
                </h1>
                {localStorage.getItem("user") ? (
                    <RecipeBoxes />
                ) : (
                    <Alert variant="danger">
                        Необходимо авторизоваться загрузки рецептов.
                    </Alert>
                )}

                <Button variant="success" onClick={() => setModalShow(true)}>
                    <i className="bi bi-plus-lg"></i>
                </Button>
                <AddRecipeModal
                    //categories={categories}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Container>
        </div>
    );
}

export default App;
