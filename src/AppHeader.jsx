import {
    Container,
    Toolbar,
    Typography,
    makeStyles,
} from '@material-ui/core';

import cat from './assets/octokat.png';
import yt from './assets/yt.png';
import disco from './assets/disco.png';
import Idea from './parts/Idea';
import {
    useEffect,
} from 'react';

const useStyles = makeStyles(() => (
    {
        title: {
            flexGrow: 1,
        },

        pixelIcons: {
            borderRadius: '33%',
            opacity: '0.7',
            margin: '5px',
            padding: '2px',
            cursor: 'pointer',
            '&:hover': {
                borderStyle: 'solid',
                borderColor: 'grey',
                borderWidth: '2px',
                margin: '5px',
                padding: '0px',
            },
        },
    }
));

function AppHeader() {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Toolbar disableGutters={true}>
                <Typography variant="h5" color="primary" className={classes.title}>
                </Typography>
                <Idea variant="h5" style={{margin: '7px', opacity: '0.9'}} to="/">
                &quot;most trees are blue&quot; - Jaden Smith</Idea>

                <a href="https://github.com/JDong3" target="_blank" rel="noreferrer"><img src={cat} className={classes.pixelIcons}></img></a>
                <a href="https://www.youtube.com/channel/UC-jLazDu7aKu2deIzVLArjw" target="_blank" rel="noreferrer"><img src={yt} className={classes.pixelIcons}></img></a>
                <a href="https://discord.com/invite/jybCSXhCrt" target="_blank" rel="noreferrer"><img src={disco} className={classes.pixelIcons}></img></a>
            </Toolbar>
        </Container>
    );
}

export default AppHeader;
