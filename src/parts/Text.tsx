import {Typography, TypographyProps, makeStyles} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => (
    {
        text: {
            // Color: '#f3ef94',
            color: 'black',
        },

        largerText: {
            fontSize: '17px',
        },

        serif: {
            fontFamily: 'serif',
        },

        sansSerif: {
            fontFamily: 'sans-serif',
        },
    }
));

export interface TextProps extends TypographyProps {
    serif: boolean,
}

const Text = (props: TextProps) => {
/**
 * :param props.variant: variant parameter for typography
 * :param props.id:
*/
    const {variant, id, serif, className, onClick} = props;
    const classes = useStyles();

    let theme = classes.text;
    if (!variant || variant === 'body1') {
        theme = clsx(theme, classes.largerText);
    }

    if (serif) {
        theme = clsx(theme, classes.serif);
    } else {
        theme = clsx(theme, classes.sansSerif);
    }

    return (
        <Typography onClick={onClick} className={`${theme} ${className}`} variant={variant || 'body1'} id={id || undefined}>{props.children}</Typography>
    );
};

export default Text;
