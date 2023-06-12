import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbarheader from "./components/Navbarheader";
import FilterBar from "./components/FilterBar";

import AddRecipeModal from "./components/AddRecipeModal";
import { Alert, Container, Button } from "react-bootstrap";
import axios from "axios";
import RecipeBoxes from "./components/RecipeBoxes";

function App() {
    // console.log(localStorage.getItem("token"));
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "token"
    )}`;
    
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="App">
            {/* Компонент навигационной панели */}
            <Navbarheader />
            {/* Главный контейнер */}
            <Container style={{ maxWidth: 1000 }}>
                <h1 className="mt-5 mb-5">
                    Все
                    <br />
                    Рецепты
                </h1>
                {/* Компонент панели фильтрации */}
                <FilterBar />
                {localStorage.getItem("user") ? (<RecipeBoxes/>) : (<Alert variant="danger">Необходимо авторизоваться загрузки рецептов.</Alert>)}
                
                {/* Кнопка создания рецепта */}
                <Button variant="success" onClick={() => setModalShow(true)}>
                    <i className="bi bi-plus-lg"></i>
                </Button>
                <AddRecipeModal // Параметр с функцией создания
                    show={modalShow} // Показ самого окна
                    onHide={() => setModalShow(false)} // Удаление модального окна по выходу из него
                />
            </Container>
        </div>
    );
}

export default App;
