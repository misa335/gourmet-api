import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ListPlaces = () => {
    const [places, setPlaces] = useState([]);

    // get place Lists
    const getPlaces = async () => {
        let result = [];
        await axios.get("/api")
            .then(res => {
                // console.log("res:", res);
                // console.log("data:", res.data);
                result = res.data;
                setPlaces(result);
                // console.log("result:",result);
                // console.log("places:",places);
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