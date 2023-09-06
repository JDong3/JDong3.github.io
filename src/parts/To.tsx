import {
    makeStyles,
} from '@material-ui/core';
import {
    Link, LinkProps,
} from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(() => (
    {
        standard: {
            color: 'inherit',
            // textDecoration: 'underline',
        },
    }
));

/**
 * a custom Link element
 */
const To = ({to, children, onClick, ...rest}: LinkProps) => {

    const classes = useStyles();
    // let scrollToTop;

    // if (scroll) {
    //     scrollToTop = () => window.scrollTo(0, 0);
    // }

    return (
        <Link {...rest} onClick={onClick} to={to} className={clsx(classes.standard)}>
            {children}
        </Link>
    );
};

export default To;
