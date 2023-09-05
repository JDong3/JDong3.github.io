import {
    Container,
    Toolbar,
    makeStyles,
} from '@material-ui/core';
import Text from './parts/Text';

const useStyles = makeStyles(() => (
    {
        title: {
            flexGrow: 1,
        },
    }
));

const AppFooter = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Toolbar disableGutters={true}>
                <span className={classes.title}><Text variant="body2">
                    website footer:
                </Text></span>
                <Text variant="body2">
                    <i>last revised July 2023</i>
                </Text>
            </Toolbar>
        </Container>
    );
};

export default AppFooter;
