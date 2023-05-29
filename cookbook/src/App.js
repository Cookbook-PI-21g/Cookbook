import React from "react";
import Navbarheader from "./components/Navbarheader";
import FilterBar from "./components/FilterBar";
import { Container } from "react-bootstrap";


function App() {
    return (
        <div className="App">
            <Navbarheader />
            <Container>
                <h1 className="mt-5 mb-5">
                    Все
                    <br />
                    Рецепты
                </h1>
                <FilterBar />
            </Container>
        </div>
    );
}

export default App;
