import React, { useEffect, useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";


const LocationCard = ({ location }: { location: any; }) => {


    return (
        <Link to={`/locationdetails/${location.id}`}>
            <div className="card m-1" style={{ width: "18rem" }}>
                <img src={location.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        Name: {location.name}
                    </p>
                    <p className="card-text">
                        Tyoe: {location.type}
                    </p>
                    <p className="card-text">
                        Dimension: {location.dimension}
                    </p>
                </div>
            </div>
        </Link>

    );
};

export default LocationCard;
