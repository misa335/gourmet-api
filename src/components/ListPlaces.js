import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));


const ListPlaces = () => {
    const classes = useStyles();
    const [places, setPlaces] = useState([]);
    const [expanded, setExpanded] = useState(false);

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
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        getPlaces();
    }, []);

    return (
        <Container>
            <Grid container spacing={3}>
            {places.map((place, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
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
                        <CardActions>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon fontSize="large" />
                            </IconButton>
                            <IconButton aria-label="add to wishlist">
                                <GradeRoundedIcon fontSize="large" />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </Container>
    )
};

export default ListPlaces;