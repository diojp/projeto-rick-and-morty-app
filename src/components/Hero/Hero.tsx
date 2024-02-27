import React, { useEffect, useState } from "react";

import axios from 'axios';


import CharacterCard from "../CharacterCard/CharacterCard";
import { Routes, Route, Navigate, Link, useParams } from "react-router-dom";
import { CharacterResponse, getCharacters } from "../../services";



const Hero = () => {

    const { page } = useParams() || 1;


    const [characters, setCharacters] = useState<any[]>([]);



    const getData = () => {
        try {
            axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then(function (resposta: any) {
                    setCharacters(resposta.data.results);
                });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
    }, [page]);

    <Route path="/character" element={<Navigate to="/character/1" />} />;

    return (
        <>

            <div className="d-flex flex-wrap justify-content-center">
                {characters.map(element => <CharacterCard character={element} key={element.id} />)}
            </div>

            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className={page !== '1' ? "page-item" : "page-item disabled"}>
                        <Link to={`/${(parseInt(page || '0') - 1)}`} className="page-link">Previous</Link>
                    </li>
                    {
                        page !== '1' ? <li className="page-item"><Link to={`/${page}`} className="page-link">{(parseInt(page || '0') - 1)}</Link></li> : <></>
                    }
                    <li className="page-item active" aria-current="page">
                        <Link to={`/${page}`} className="page-link" >{page}</Link>
                    </li>
                    {
                        page !== '42' ? <li className="page-item"><Link to={`/${page}`} className="page-link">{(parseInt(page || '0') + 1)}</Link></li> : <></>
                    }
                    <li className={page !== '42' ? "page-item" : "page-item disabled"}>
                        <Link to={`/${(parseInt(page || '0') + 1)}`} className="page-link">Next</Link>
                    </li>
                </ul>
            </nav>

        </>
    );
};

export default Hero;
