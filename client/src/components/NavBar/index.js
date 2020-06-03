import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg fixed-top bg-light">
            <div className="container-fluid">
                <div className="row">
                <Link className="navbar-brand" to="/">Google Books</Link>
                <Link
                    to="/search"
                    className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                > Search</Link>
                <Link
                    to="/saved"
                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                >Saved</Link>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;