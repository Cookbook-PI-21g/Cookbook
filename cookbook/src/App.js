import React, { useState } from "react";
import Navbarheader from "./components/Navbarheader";
import FilterBar from "./components/FilterBar";
import RecipeBox from "./components/RecipeBox";
import { Container, Button } from "react-bootstrap";
import AddRecipeModal from "./components/AddRecipeModal";

function App() {
    //  Массив рецептов
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            title: "DavaPod Pizza",
            portions: 1,
            hours: 1,
            minutes: 1,
            ingr: 1,
        },
        {
            id: 2,
            title: "DavaPod Pizza 2",
            portions: 2,
            hours: 2,
            minutes: 2,
            ingr: 2,
        },
        {
            id: 3,
            title: "DavaPod Pizza 3",
            portions: 3,
            hours: 3,
            minutes: 3,
            ingr: 3,
        },
        {
            id: 4,
            title: "DavaPod Pizza 4",
            portions: 4,
            hours: 4,
            minutes: 4,
            ingr: 4,
        },
        {
            id: 5,
            title: "DavaPod Pizza 5",
            portions: 5,
            hours: 5,
            minutes: 5,
            ingr: 5,
        },
        {
            id: 6,
            title: "DavaPod Pizza 6",
            portions: 6,
            hours: 6,
            minutes: 6,
            ingr: 6,
        },
    ]);

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="App">
            {/* Компонент навигационной панели */}
            <Navbarheader />
            <Container style={{ maxWidth: 1000 }}>
                <h1 className="mt-5 mb-5">
                    Все
                    <br />
                    Рецепты
                </h1>
                {/* Компонент панели фильтрации */}
                <FilterBar />
                <Container className="d-flex flex-wrap justify-content-around">
                    {recipes.map((recipe) => (
                        <RecipeBox post={recipe} key={recipe.id} />
                    ))}
                </Container>

                <Button variant="success" onClick={() => setModalShow(true)}>
                    <i class="bi bi-plus-lg"></i>
                </Button>
                <Button variant="warning">
                    <i class="bi bi-star text-light"></i>
                </Button>
                <AddRecipeModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Container>
        </div>
    );
}

export default App;
