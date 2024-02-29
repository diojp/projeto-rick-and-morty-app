import React, { useEffect, useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";


const EpisodeCard = ({ episode }: { episode: any; }) => {


    return (
        <Link to={`/episodedetails/${episode.id}`}>
            <div className="card m-2" style={{ width: "18rem", height: "10rem" }}>
                {/* <img src={episode.image} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <p className="m-2 fs-5">Name: {episode.name}</p>
                    <p className="m-2 fs-5">On air: {episode.air_date}</p>
                </div>
            </div>
        </Link>
    );
};

export default EpisodeCard;
