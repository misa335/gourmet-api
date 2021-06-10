import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import fetch from 'node-fetch';

const ListPlaces = () => {
    const [places, setPlaces] = useState([]);

    // get place Lists
    const getPlaces = async () => {
        await axios.get("/api")
            .then(res => {
                console.log("res:", res);
                console.log("data:", res.data);
            })
            .catch(err => console.log('error:', err));
    }

    useEffect(() => {
        getPlaces();
    }, []);

    return (
        <div>
            <div>
            Hello!
            </div>
        </div>
    )
};

export default ListPlaces;