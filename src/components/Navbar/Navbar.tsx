import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid ">
                <Link to={'/'}>
                    <div className="navbar-brand">Home</div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
