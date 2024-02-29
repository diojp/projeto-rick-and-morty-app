import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterType, EpisodeType } from "../../Types";
import { getDataByID } from '../../utils/fetchData';
import CharacterList from "../List/CharacterList";

const EpisodeDetails = () => {

    const { id } = useParams();
    const [episode, setEpisode] = useState<EpisodeType>();
    const [character, setCharacter] = useState<CharacterType[]>([]);

    const getData = async () => {
        try {
            const episodeRes: any = await getDataByID('episode', id);
            setEpisode(await episodeRes);
            const characterRes: any = await getDataByID('character', listStringBuilder(episodeRes));
            Array.isArray(characterRes) ? setCharacter(characterRes) : setCharacter([characterRes]);
        } catch (err) {
            console.error(err);
        }
    };

    const listStringBuilder = (list: EpisodeType) => {
        let characterList = '';
        list?.characters.map((character:string) => characterList += character.split('/character/')[1] + ',');
        console.log("list", list);
        characterList = characterList.slice(0, -1);        
        return characterList;
    };

    useEffect(() => {
        getData();
    }, []);

    if (!episode) {
        return <div>Loading...</div>;
    }


    return (
        <>

            <h1 className="m-2 text-primary text-sm-start">Name: {episode.name}</h1>
            <div className="d-flex">
                <div className="d-flex text-dark ">
                    <p className="m-2 fs-1 text-success ">Air Date: {episode.air_date}</p>                                     
                </div>

            </div>
            <hr className="text-success" />
            <h3 className="text-success">List of Characters</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {character?.map(element => <CharacterList character={element} key={element.id} />)}
            </div>
        </>
    );
};

export default EpisodeDetails;