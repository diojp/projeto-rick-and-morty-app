import React, { useEffect, useState } from "react";

import axios from 'axios';


import EpisodeCard from "../Card/EpisodeCard";
import { Routes, Route, Navigate, Link, useParams } from "react-router-dom";
import { CharacterResponse, getCharacters } from "../../services";



const Episode = () => {

    const { page } = useParams() || 1;


    const [episodes, setEpisode] = useState<any[]>([]);



    const getData = () => {
        try {
            axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
                .then(function (resposta: any) {
                    setEpisode(resposta.data.results);

                    console.log(resposta)
                });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
    }, [page]);

    <Route path="/episode" element={<Navigate to="/episode/1" />} />;

    return (
        <>

            <div className="d-flex flex-wrap justify-content-center">
                {episodes.map(element => <EpisodeCard episode={element} key={element.id} />)}
            </div>

            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className={page !== '1' ? "page-item" : "page-item disabled"}>
                        <Link to={`/episode/${(parseInt(page || '0') - 1)}`} className="page-link">Previous</Link>
                    </li>
                    {
                        page !== '1' ? <li className="page-item"><Link to={`/episode/${page}`} className="page-link">{(parseInt(page || '0') - 1)}</Link></li> : <></>
                    }
                    <li className="page-item active" aria-current="page">
                        <Link to={`/episode/${page}`} className="page-link" >{page}</Link>
                    </li>
                    {
                        page !== '4' ? <li className="page-item"><Link to={`/episode/${page}`} className="page-link">{(parseInt(page || '0') + 1)}</Link></li> : <></>
                    }
                    <li className={page !== '42' ? "page-item" : "page-item disabled"}>
                        <Link to={`/episode/${(parseInt(page || '0') + 1)}`} className="page-link">Next</Link>
                    </li>
                </ul>
            </nav>

        </>
    );
};

export default Episode;
