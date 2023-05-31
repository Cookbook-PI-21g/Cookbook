import React, { useState } from "react";
import Navbarheader from "./components/Navbarheader";
import FilterBar from "./components/FilterBar";
import RecipeBox from "./components/RecipeBox";
import AddRecipeModal from "./components/AddRecipeModal";
import { Container, Button } from "react-bootstrap";

function App() {
    //  Массив рецептов (Нужно поменять структуру (и везде, где с такой же структурой работаем))
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            title: "DavaPod Pizza",
            portions: 1,
            hours: 1,
            minutes: 1,
            ingr: [],
            description: "Cool colab with Da_Max",
        },
    ]);
    // Фи-я получения нового рецепта из AddRecipeModal для создания рецепта setRecipe
    const createRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    const deleteRecipe = (recipe) => {
        setRecipes(recipes.filter(r => r.id !== recipe.id))
    }

    const [modalShow, setModalShow] = React.useState(false);

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
                {/* Вывод всех элеменов рецептов (из массива) */}
                <Container className="d-flex flex-wrap justify-content-around">
                    {recipes.map((recipe) => (  // Достаем все элементы из массива recipes
                        <RecipeBox remove={deleteRecipe} recipe={recipe} key={recipe.id} />     // Вывод поэлементно компонента RecipeBox c id рецепта в качестве ключа 
                    ))}
                </Container>
                {/* Кнопка создания рецепта */}
                <Button variant="success" onClick={() => setModalShow(true)}>
                    <i className="bi bi-plus-lg"></i>
                </Button>
                {/* <Button variant="warning">
                    <i class="bi bi-star text-light"></i>   // Кнопка "Избранное" (Если будем делать)
                </Button> */}
                {/* Модальное окно "Добавить" */}
                <AddRecipeModal
                    create={createRecipe} // Параметр с функцией создания
                    show={modalShow} // Показ самого окна
                    onHide={() => setModalShow(false)} // Удаление модального окна по выходу из него
                />
            </Container>
        </div>
    );
}

export default App;
