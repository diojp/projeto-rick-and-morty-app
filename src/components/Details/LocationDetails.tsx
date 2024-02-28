import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LocationDetails = () => {


    const [location, setLocation] = useState({ id: -1, name: 'aaa' });

    const { id } = useParams();


    const getData = () => {

        try {
            axios.get(`https://rickandmortyapi.com/api/location/${id}`)
                .then(function (resposta: any) {
                    setLocation(resposta.data);
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
                Detalhes {location.id}
            </h1>
            <h2>
                name {location.name}
            </h2>
        </>
    );
};

export default LocationDetails;
