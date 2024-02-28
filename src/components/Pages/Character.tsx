import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "../Card/CharacterCard";
import { Routes, Route, Navigate, Link, useParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { CharacterType, InfoType } from "../../Types";




const Character = () => {

    const { page } = useParams();

    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [info, setInfo] = useState<InfoType[]>([]);

    const getData = () => {
        try {
            axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then(function (resposta: any) {
                    setCharacters(resposta.data.results);
                    setInfo(resposta.data.info);
                });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
    }, [page]);


    return (
        <>

            <div className="d-flex flex-wrap justify-content-center">
                {characters.map((element: any) => <CharacterCard character={element} key={element.id} />)}
            </div>
            <Pagination info={info} currentPage={page} namePage='character' />

        </>
    );
};

export default Character;
