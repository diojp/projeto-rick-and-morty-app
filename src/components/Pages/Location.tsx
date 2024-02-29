import React, { useEffect, useState } from "react";

import axios from 'axios';


import LocationCard from "../Card/LocationCard";
import { Routes, Route, Navigate, Link, useParams } from "react-router-dom";
import { InfoType, LocationType } from "../../Types";
import Pagination from "../Pagination/Pagination";




const Location = () => {

    const { page } = useParams() || 1;


    const [locations, setLocation] = useState<LocationType[]>([]);
    const [info, setInfo] = useState<InfoType>({});



    const getData = () => {
        try {
            axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`)
                .then(function (resposta: any) {
                    setLocation(resposta.data.results);
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
                {locations.map(element => <LocationCard location={element} key={element.id} />)}
            </div>
            {/* <Pagination info={info} currentPage={page} namePage='location' /> */}
        </>
    );
};

export default Location;
