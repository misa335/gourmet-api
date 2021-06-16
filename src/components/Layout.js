import { makeStyles } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import bg from '../bg.jpg';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            padding: theme.spacing(3)
        },
        toolbar: theme.mixins.toolbar
    }
})

export default function Layout({children}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar>
                <ToolBar>
                    <Typography>
                        🧁 🥞 Foodie! 🍩 🍕
                    </Typography>
                </ToolBar>
            </AppBar>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}