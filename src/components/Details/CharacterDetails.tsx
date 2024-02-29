import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterType } from "../../Types";

const CharacterDetails = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState<CharacterType>();


    const getData = () => {
        try {
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                .then(function (resposta: any) {
                    setCharacter(resposta.data);

                });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    if (!character) {
        return <div>Loading...</div>;
    }




    return (
        <>
            <h1 className = "m-2 text-primary text-sm-start">{character.name}</h1>
            <div className="d-flex">
                <h2>
                    <img src={character.image} alt="" />
                </h2>
                <div className="text-dark ">
                    <p className = "m-2 fs-1 text-success ">Status: {character.status}</p>
                    <p className = "m-2 fs-1 text-success ">Species: {character.species}</p>
                    <p className = "m-2 fs-1 text-success">Origin: {character.origin.name}</p>
                    <p className = "m-2 fs-1 text-success">Location {character.location.name}</p>                    
                </div>
                {/* <div className="div">
                    <h2>{character.episode}</h2>
                </div> */}

            </div>


        </>
    );
};

export default CharacterDetails;
