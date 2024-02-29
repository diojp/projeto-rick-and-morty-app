import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EpisodeType } from "../../Types";

const EpisodeDetails = () => {

    const { id } = useParams();
    const [episode, setEpisode] = useState<EpisodeType>();


    const getData = () => {
        try {
            axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
                .then(function (resposta: any) {
                    setEpisode(resposta.data);

                });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    if (!episode) {
        return <div>Loading...</div>;
    }




    return (
        <>
            <h1 className = "m-2 text-primary text-sm-start">Name: {episode.name}</h1>
            <div className="d-flex">                
                <div className="d-flex text-dark ">
                    <p className = "m-2 fs-1 text-success ">Air Date: {episode.air_date}</p>
                    {/* <p className = "m-2 fs-1 text-success">Location {episode.characters}</p>                     */}
                </div>             

            </div>


        </>
    );
};

export default EpisodeDetails;
