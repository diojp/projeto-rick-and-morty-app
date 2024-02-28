import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EpisodeDetails = () => {


    const [episode, setEpisode] = useState({ id: -1, name: 'aaa' });

    const { id } = useParams();


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

    return (
        <>
            <h1>
                Detalhes {episode.id}
            </h1>
            <h2>
                name {episode.name}
            </h2>
        </>
    );
};

export default EpisodeDetails;
