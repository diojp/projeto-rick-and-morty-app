import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {


    const [character, setCharacter] = useState({ id: -1, name: 'aaa' });

    const { id } = useParams();


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

    return (
        <>
            <h1>
                Detalhes {character.id}
            </h1>
            <h2>
                name {character.name}
            </h2>
        </>
    );
};

export default Details;
