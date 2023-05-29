import React from "react";
import Navbarheader from "./components/Navbarheader";
import FilterBar from "./components/FilterBar";
import RecipeBox from "./components/RecipeBox";
import { Container } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navbarheader />
            <Container style={{ maxWidth: 1000 }}>
                <h1 className="mt-5 mb-5">
                    Все
                    <br />
                    Рецепты
                </h1>
                <FilterBar />
                <Container className="d-flex flex-wrap justify-content-around">
                    <RecipeBox post={{id: 1, title: "Гамбургер Союз приколсистов", portions: 99, hours: 4, minutes: 75, ingr: 42}}/>
                    <RecipeBox post={{id: 2, title: "Пицца подзола", portions: 1, hours: 5, minutes: 25, ingr: 222}}/>
                    <RecipeBox post={{id: 3, title: "Кит-кат", portions: 69, hours: 66, minutes: 95, ingr: 12}}/>
                    <RecipeBox post={{id: 4, title: "Кирпич", portions: 8, hours: 2, minutes: 5, ingr: 2}}/>
                    <RecipeBox post={{id: 5, title: "Крабсбургер", portions: 9, hours: 4, minutes: 88, ingr: 0}}/>
                </Container>
            </Container>
            
        </div>
    );
}

export default App;
