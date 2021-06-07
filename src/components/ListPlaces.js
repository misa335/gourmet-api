import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ListPlaces = () => {
    // const [places, setPlaces] = useState([]);

    //get place Lists
    const getPlaces = async () => {
        await axios.get("https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ae1f69b84f3d5295&lat=35.66&lng=139.72&range=3&order=4&count=50&lunch=1&genre=G014")
            .then(res => console.log(res.data))
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