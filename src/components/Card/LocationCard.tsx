import React, { useEffect, useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";


const LocationCard = ({ location }: { location: any; }) => {


    return (
        <Link to={`/locationdetails/${location.id}`}>
            <div className="card m-2" style={{ width: "18rem", height: "18rem" }}>
                <div className="card-body">
                    <p className="m-2 fs-5">Name: {location.name}</p>
                    <p className="m-2 fs-5">Type: {location.type}</p>
                    <p className="m-2 fs-5">Dimension: {location.dimension}</p>
                </div>
            </div>
        </Link>

    );
};

export default LocationCard;
