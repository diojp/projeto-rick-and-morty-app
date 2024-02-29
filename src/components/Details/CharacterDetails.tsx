import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CharacterType, EpisodeType } from "../../Types";

import { getDataByID } from '../../utils/fetchData';

import EpisodeCard from '../Card/EpisodeCard';
import EpisodeList from "../List/EpisodeList";

const CharacterDetails = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState<CharacterType>();
    const [episode, setEpisodes] = useState<EpisodeType[]>([]);

    const getData = async () => {
        try {
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                .then(function (resposta: any) {
                    setCharacter(resposta.data);
                });

            const dataResults: any = await getDataByID('character', id);
            setCharacter(dataResults);

            fetchEpisodes();

        } catch (err) {
            console.error(err);
        }        
    };

    const listStringBuilder = () => {
        let episodesList = '';
        character?.episode.map(episode => episodesList += episode.split('/episode/')[1] + ',');
        episodesList = episodesList.slice(0, -1);
        return episodesList;
    };

    const fetchEpisodes = async () => {
        const dataResults: any = await getDataByID('episode', listStringBuilder());
        setEpisodes(dataResults.results);
        // console.log(dataResults.results);
        console.log(listStringBuilder());
    };

    useEffect(() => {
        getData();        
    }, []);

    if (!character) {
        return <div>Loading...</div>;
    }
    

    return (
        <>
            <h1 className="m-2 text-primary text-sm-start">{character.name}</h1>
            <div className="d-flex">
                <h2>
                    <img src={character.image} alt="" />
                </h2>
                <div className="text-dark ">
                    <p className="m-2 fs-1 text-success ">Status: {character.status}</p>
                    <p className="m-2 fs-1 text-success ">Species: {character.species}</p>
                    <p className="m-2 fs-1 text-success">Origin: {character.origin.name}</p>
                    <p className="m-2 fs-1 text-success">Location {character.location.name}</p>
                </div>
            </div>
            <hr className="text-success" />
            <h3 className="text-success">Lista de episódios</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {episode?.map(element => <EpisodeList episode={element} key={element.id} />)}
            </div>
        </>
    );
};

export default CharacterDetails;
