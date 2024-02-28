import React, { useEffect, useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";


const CharacterCard = ({ episode }: { episode: any; }) => {


    return (
        <Link to={`/episodedetails/${episode.id}`}>
            <div className="card m-1" style={{ width: "18rem" }}>
                <img src={episode.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        Name: {episode.name}
                    </p>
                    <p className="card-text">
                        Status: {episode.air_date}
                    </p>
                    <p className="card-text">
                        Status: {episode.episode}
                    </p>
                </div>
            </div>
        </Link>

    );
};

export default CharacterCard;
