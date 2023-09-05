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
            textDecoration: 'underline',
        },
    }
));

const To = ({to, children, className, ...rest}: LinkProps) => {
/**
 * :param props.href:
 * :param link: bool, use Link element
 */

    const classes = useStyles();
    // let scrollToTop;

    // if (scroll) {
    //     scrollToTop = () => window.scrollTo(0, 0);
    // }

    return (
        <Link {...rest} to={to} className={clsx(classes.standard, className)} >
            {children}
        </Link>
    );
};

export default To;
