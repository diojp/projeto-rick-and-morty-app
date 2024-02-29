import React, { useEffect, useState } from "react";

import axios from 'axios';


import EpisodeCard from "../Card/EpisodeCard";
import { Routes, Route, Navigate, Link, useParams } from "react-router-dom";
import { EpisodeType, InfoType } from "../../Types";
import Pagination from "../Pagination/Pagination";



const Episode = () => {

    const { page } = useParams();


    const [episodes, setEpisode] = useState<EpisodeType[]>([]);
    const [info, setInfo] = useState<InfoType>({});



    const getData = () => {
        try {
            axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
                .then(function (resposta: any) {
                    setEpisode(resposta.data.results);
                    setInfo(resposta.data.info);
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

            <Pagination info={info} currentPage={page} namePage='episode' />

        </>
    );
};

export default Episode;
