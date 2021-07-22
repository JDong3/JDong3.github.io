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
import {Text} from './colorful-text'

let useStyles = makeStyles(theme => (
    {
        title: {
            flexGrow: 1,
        },
    }
))

let AppFooter = () => {
    let classes = useStyles()
    return (
        <Container maxWidth="md">
            <Toolbar disableGutters={true}>
                <span className={classes.title}><Text variant="body2">This is a footer</Text></span>
                <Text variant="body2">e-mail: josephdong1998@gmail.com</Text>
            </Toolbar>
        </Container>
    )
}

export default AppFooter
