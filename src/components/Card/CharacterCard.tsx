import React, { useEffect, useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";


const CharacterCard = ({ character }: { character: any; }) => {


    return (
        <Link to={`/characterdetails/${character.id}`}>
            <div className="card m-1" style={{ width: "18rem" }}>
                <img src={character.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        Name: {character.name}
                    </p>
                    <p className="card-text">
                        Status: {character.status}
                    </p>
                </div>
            </div>
        </Link>

    );
};

export default CharacterCard;
