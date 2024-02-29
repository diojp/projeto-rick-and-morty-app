import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CharacterList = ({ character }: { character: any; }) => {
    return (
        <Link to={`/characterdetails/${character.id}`}>
            <div className="card m-2 border-success" style={{ width: "10rem", height: "15rem" }}>
                <img src={character.image} className="card-img-top" alt="..." />
                <div className="card-body justify-content-center">
                    <label className="card-text">
                        Name: {character.name}
                    </label><br />                    
                </div>
            </div>
        </Link>
    );
};
export default CharacterList;
