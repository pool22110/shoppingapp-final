import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Categorybar = () => {
    const [loginStatus, setLoginStatus] = useState(false);


    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            setLoginStatus(false);

        }
        else {
            setLoginStatus(true);
        }
    }, [loginStatus]);



    return (
        <>
        <hr/>
        <nav className="navbar navbar-expand-lg justify-content-center">

            {/* <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <hr />
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">All</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/cat/electronics"}>Eletronics</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/cat/jewelery"}>Jewelery</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/cat/men's%20clothing"}>Men Clothing</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/cat/women's%20clothing"}>Women Clothing</Link>
                </li>

            </ul>
            <hr />

        </nav>
        <hr />
        </>
    );
}

export default Categorybar;
