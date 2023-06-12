import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import RecipeBox from "./RecipeBox";
import axios from "axios";

export default function SearchResultsModal({ results, ...props }) {
    const [searchResults, setSearchIResults] = useState(results)
    const deleteRecipe = (recipeToDelete) => {
        axios
            .delete(`http://26.65.125.199:8000/recipes/remove/${recipeToDelete.id}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.error(error));
            setSearchIResults(searchResults.filter(r => r.id !== recipeToDelete.id))
    }
    return (
        <Modal {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title>Результаты</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {results
                    ? results.map((result) => (
                          <RecipeBox id={result.id} remove={deleteRecipe} key={result.id} />
                      ))
                    : console.log("пустой")}
            </Modal.Body>
        </Modal>
    );
}
