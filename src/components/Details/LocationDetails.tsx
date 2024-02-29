import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LocationType } from "../../Types";

const LocationDetails = () => {

    const { id } = useParams();
    const [location, setCharacter] = useState<LocationType>();


    const getData = () => {
        try {
            axios.get(`https://rickandmortyapi.com/api/location/${id}`)
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



    if (!location) {
        return <div>Loading...</div>;
    }




    return (
        <>
            <h1 className="m-2 text-primary text-sm-start">{location.name}</h1>
            <div className="d-flex">

                <div className="text-dark ">
                    <p className="m-2 fs-1 text-success ">Type: {location.type}</p>
                    <p className="m-2 fs-1 text-success ">Dimension: {location.dimension}</p>
                    
                </div>
                {/* <div className="div">
                    <h2>{location.residents}</h2>
                </div> */}

            </div>


        </>
    );
};

export default LocationDetails;
