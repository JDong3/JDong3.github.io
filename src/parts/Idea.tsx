import {
    makeStyles,
    Typography,
} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() => (
    {
        ideaStuff: {
            // Color: '#e88e8e',
            color: 'black',
            textDecoration: 'underline',
            fontFamily: 'seif',
        },
    }
));

const Idea = props => {
/**
 * :param props.text: the text for the idea
 * :param props.to: link to where
 *
 */

    const classes = useStyles();
    const {to} = props;

    return (
        <Link to={to}><Typography
            variant={props.variant || 'body'}
            className={classes.ideaStuff}>

            {props.children}

        </Typography></Link>
    );
    // {hovered && hoveredStuff()}
};

export default Idea;
