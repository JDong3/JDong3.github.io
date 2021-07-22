import {connect} from 'react-redux'
import {
        AppBar,
        Container,
        Button,
        Card,
        Toolbar,
        Typography,
        Link,
        IconButton,
        makeStyles
    } from '@material-ui/core'

import cat from './assets/octokat.png'
import yt from './assets/yt.png'
import disco from './assets/disco.png'
import {Idea} from './colorful-text'

let useStyles = makeStyles(theme => (
    {
        title: {
            flexGrow: 1,
        },

        pixelIcons: {
            borderRadius: '33%',
            opacity: '0.5',
            margin: '5px',
            padding: '2px',
            cursor: 'pointer',
            '&:hover': {
                borderStyle: 'solid',
                borderColor: 'white',
                borderWidth: '2px',
                margin: '5px',
                padding: '0px',
            }
        }
    }
))

function AppHeader(props) {
    let classes = useStyles()
    return (
        <Container maxWidth="md">
            <Toolbar disableGutters={true}>
                <Typography variant="h5" color="primary" className={classes.title}>
                </Typography>
                <Idea variant="h6" style={{margin: '7px'}} to="/">
                "most trees are blue" - Jaden Smith</Idea>

                <a href="https://github.com/JDong3" target="_blank"><img src={cat} className={classes.pixelIcons}></img></a>
                <a href="https://www.youtube.com/channel/UC-jLazDu7aKu2deIzVLArjw" target="_blank"><img src={yt} className={classes.pixelIcons}></img></a>
                <a href="https://discord.com/invite/jybCSXhCrt" target="_blank"><img src={disco} className={classes.pixelIcons}></img></a>
            </Toolbar>
        </Container>
    )
}

export default AppHeader;
