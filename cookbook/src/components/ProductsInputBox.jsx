import React, { useState } from "react";
import ProductInput from "./ProductInput";
import { Button, Form } from "react-bootstrap";

export default function ProductsInputBox() {
    const [products, setProduct] = useState([{}])
    const addInput = () => {
            
    }
    return (
        <Form.Group className="mb-3">
            {products.map((pdoduct, index) => (
                <ProductInput key={index} />
            ))}
            <Button onClick={addInput} variant="success" className="btn-sm">
                <i className="bi bi-plus-lg"></i>
            </Button>
        </Form.Group>
    );
}
