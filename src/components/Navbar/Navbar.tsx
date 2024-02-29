import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar bg-body-tertiary mr-auto d-flex justify-content-end">
            <div className="btn-group me-2">
                <Link to={'/character'} className="btn btn-primary btn-success" aria-current="page">Personagem</Link>
                <Link to={'/episode'} className="btn btn-primary btn-success">Episódios</Link>
                <Link to={'/location'} className="btn btn-primary btn-success">Localização</Link>
            </div>
        </nav>
    );
};

export default Navbar;
