import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";


const Navbar = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);

    let totalCartQuantity = 0;
    cart.cartItems.map(
        (eachItem) => (totalCartQuantity += eachItem.itemQuantity)
    );
    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            setLoginStatus(false);

        }
        else {
            setLoginStatus(true);
        }
    }, [loginStatus]);

    const onLogoutHandler = () => {
        localStorage.clear();
        setLoginStatus(false);
    };

    return (
        <nav className="navbar navbar-expand-lg ">
          <span>
            <Link className="navbar-brand" to="/">
                <text style={{ color: 'blue', fontSize: 30 }} >SHOP</text>
                <text style={{ color: 'black', fontSize: 30 }}>LANE</text>
            </Link>
            </span>
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
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {loginStatus ? (
                        <li className="nav-item">
                            <Link className="nav-link btn btn-log btn-danger" onClick={onLogoutHandler}>
                                Logout
                            </Link>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Link className="nav-link btn btn-log btn-primary " to="/login">
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            
            <div>
          <Link to={"/favorites"} className="navbarWishDiv">
            <div>
              <FaHeart size={"1.9em"} color="red" />
            </div>
            <div
              className={cart.wishListItems.length > 0 ? "wishLengthDiv" : null}
            >
              <span className="wishLengthSpan">
                {cart.wishListItems.length > 0
                  ? cart.wishListItems.length
                  : null}
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link to={"/cartPage"} className="navbarCartDiv">
            <div>
              <AiOutlineShoppingCart color="black" size={"2.5rem"} />
            </div>
            <div className={cart.cartItems.length > 0 ? "cartLengthDiv" : null}>
              <span className="cartLengthSpan">
                {cart.cartItems.length > 0 ? totalCartQuantity : null}
              </span>
            </div>
          </Link>
        </div>
        
        </nav>
    );
};

export default Navbar;
