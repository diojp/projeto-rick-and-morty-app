import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar bg-body-tertiary mr-auto">
            <div className="d-flex flex-row m-2">
                <Link to={'/'}>
                    <div className="navbar-nav">Personagem</div>
                </Link>
                <Link to={'/'}>
                    <div className="navbar-nav">Episodios</div>
                </Link>
                <Link to={'/'}>
                    <div className="navbar-nav">Localização</div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
