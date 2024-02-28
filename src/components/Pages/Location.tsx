import React, { useEffect, useState } from "react";

import axios from 'axios';


import LocationCard from "../Card/LocationCard";
import { Routes, Route, Navigate, Link, useParams } from "react-router-dom";
import { CharacterResponse, getCharacters } from "../../services";



const Location = () => {

    const { page } = useParams() || 1;


    const [locations, setLocation] = useState<any[]>([]);



    const getData = () => {
        try {
            axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`)
                .then(function (resposta: any) {
                    setLocation(resposta.data.results);
                });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
    }, [page]);

    <Route path="/location" element={<Navigate to="/location/1" />} />;

    return (
        <>

            <div className="d-flex flex-wrap justify-content-center">
                {locations.map(element => <LocationCard location={element} key={element.id} />)}
            </div>

        </>
    );
};

export default Location;
