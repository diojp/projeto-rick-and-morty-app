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

                    console.log(resposta)
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

            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className={page !== '1' ? "page-item" : "page-item disabled"}>
                        <Link to={`/location/${(parseInt(page || '0') - 1)}`} className="page-link">Previous</Link>
                    </li>
                    {
                        page !== '1' ? <li className="page-item"><Link to={`/location/${page}`} className="page-link">{(parseInt(page || '0') - 1)}</Link></li> : <></>
                    }
                    <li className="page-item active" aria-current="page">
                        <Link to={`/location/${page}`} className="page-link" >{page}</Link>
                    </li>
                    {
                        page !== '4' ? <li className="page-item"><Link to={`/location/${page}`} className="page-link">{(parseInt(page || '0') + 1)}</Link></li> : <></>
                    }
                    <li className={page !== '42' ? "page-item" : "page-item disabled"}>
                        <Link to={`/location/${(parseInt(page || '0') + 1)}`} className="page-link">Next</Link>
                    </li>
                </ul>
            </nav>

        </>
    );
};

export default Location;
