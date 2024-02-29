import React, { useEffect, useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";


const CharacterList = ({ character }: { character: any; }) => {
    return (
        <Link to={`/charactertails/${character.id}`}>
            <div className="card m-2" style={{ width: "19rem", height: "5rem" }}>
                <p className="list-group-item list-group-item-action p-1 m-0 fs-5">{character.name}</p>                
            </div>
        </Link>
    );
};

export default CharacterList;
