import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import SearchResultsModal from "./SearchResultsModal";
import axios from "axios";

export default function SearchBar() {
    const [modalResultsShow, setResultsModalShow] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const [recipesToSearch, setRecipesToSearch] = useState();
    const [recipesSearched, setRecipesSearched] = useState();

    useEffect(() => {
        const getData = async () => {
            axios
                .get("http://26.65.125.199:8000/recipes/getLast")
                .then((response) => {
                    console.log(
                        "Результат получения recipes/getLast для поиска:"
                    );
                    console.log(response.data.recipes);
                    setRecipesToSearch(response.data.recipes);
                })
                .catch((error) => console.error(error));
        };
        getData();
    }, []);

    const search = (e) => {
        e.preventDefault();
        const recipesSearched = recipesToSearch.filter(
            (item) =>
                item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.description
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                item.category.toLowerCase().includes(searchInput.toLowerCase())
        );
        setRecipesSearched(recipesSearched);
        console.log(recipesSearched);
        setResultsModalShow(true);
    };

    return (
        <div className="input-group input-group-sm d-flex">
            <Form.Control
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            ></Form.Control>
            <Button variant="success" type="submit" onClick={search}>
                <i className="bi bi-search"></i>
            </Button>
            <SearchResultsModal
                results={recipesSearched}
                show={modalResultsShow}
                onHide={() => setResultsModalShow(false)}
            />
        </div>
    );
}
