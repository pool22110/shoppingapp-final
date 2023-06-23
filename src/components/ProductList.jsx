import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Product";
import Endpoints from "../api/Endpoints";

const ProductList = () => {
    const [Products, setProducts] = useState([]);

    const getData = () => {
        axios
            .get(Endpoints.CATEGORY_URL)
            .then(response => {
                console.log(response.data.data);
                setProducts(response.data.data);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <h2 className="text-center">All Categories</h2>
            <div className="row">
                {Products.map(Products => (
                    <Products key={Products.catId} data={Products} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
