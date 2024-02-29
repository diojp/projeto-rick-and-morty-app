import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterType, EpisodeType, LocationType } from "../../Types";
import { getDataByID } from '../../utils/fetchData';
import CharacterList from "../List/CharacterList";

const LocationDetails = () => {

    const { id } = useParams();
    const [location, setLocation] = useState<LocationType>();
    const [character, setCharacter] = useState<CharacterType[]>([]);

    const getData = async () => {
        try {
            const locationRes: any = await getDataByID('location', id);
            setLocation(await locationRes);
            const characterRes: any = await getDataByID('character', listStringBuilder(locationRes));
            Array.isArray(characterRes) ? setCharacter(characterRes) : setCharacter([characterRes]);
        } catch (err) {
            console.error(err);
        }
    };

    const listStringBuilder = (list: LocationType) => {
        let characterList = '';
        list?.residents.map((character: string) => characterList += character.split('/character/')[1] + ',');
        console.log("list", list);
        characterList = characterList.slice(0, -1);
        return characterList;
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
            </div>
            <hr className="text-success" />
            <h3 className="text-success">List of Residents</h3>
           {location.residents.length !== 0 ?  <div className="d-flex flex-wrap justify-content-center">
                {character?.map(element => <CharacterList character={element} key={element.id} />)}
            </div> : <p>Não Existe</p> }
        </>
    );
};

export default LocationDetails;
