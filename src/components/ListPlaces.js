import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
}));


const ListPlaces = () => {
    const classes = useStyles();
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
                console.log("places:",places);
            })
            .catch(err => console.log('error:', err));
    }

    useEffect(() => {
        getPlaces();
    }, []);

    return (
        <div>
            <div>
            {places.map((place, index) => (
                <Card key={index} className={classes.root}>
                    <CardHeader
                    title={place.name}
                    subheader={place.station_name}
                    />
                    <CardMedia
                        className={classes.media}
                        image={place.photo.pc.l}
                        title={place.name}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {place.catch}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            </div>
        </div>
    )
};

export default ListPlaces;