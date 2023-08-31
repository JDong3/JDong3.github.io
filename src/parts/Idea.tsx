import {
    makeStyles,
    Typography,
    TypographyProps,
} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() => (
    {
        ideaStuff: {
            color: 'black',
            textDecoration: 'underline',
            fontFamily: 'seif',
        },
    }
));

export interface IdeaProps extends TypographyProps {
    to: string
}

const Idea = ({to, variant, children}: IdeaProps) => {

    const c = useStyles();

    return (
        <Link to={to}>
            <Typography variant={variant} className={c.ideaStuff}>
                {children}
            </Typography>
        </Link>
    );
    // {hovered && hoveredStuff()}
};

export default Idea;
