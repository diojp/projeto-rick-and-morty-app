import React, { useEffect, useState } from "react";

import { CharacterType } from "../../Types/CharacterType";

import axios from 'axios';
import { Link } from "react-router-dom";

const CharacterCard = ({ character }: { character: CharacterType; }) => {

    return (
        <Link to={`/characterdetails/${character.id}`}>
            <div className="card m-2 border-success" style={{ width: "19rem", height: "28rem" }}>
                <img src={character.image} className="card-img-top" alt="..." />
                <div className="card-body justify-content-center">
                    <label className="card-text">
                        Name: {character.name}
                    </label><br />
                    <label className="card-text">
                        Status: {character.status}
                    </label> <br />
                    <label className="card-text">
                        Species: {character.species}
                    </label><br />
                    <label className="card-text">
                        Location: {character.location.name}
                    </label>
                </div>
            </div>
        </Link>
    );
};

export default CharacterCard;
