/**
 * reuseable derivatives of the Typography class from material-ui
 */
import {
    makeStyles,
    Typography,
    Box,
    TypographyProps,
} from '@material-ui/core';
import clsx from 'clsx';

/**
 * the title of an article
 */
const useStyles = makeStyles(() => (
    {
        titleDivider: {
            marginTop: '1px',
            marginBottom: '0px',
        },

        titleGutter: {
            marginBottom: '27px',
        },

        serif: {
            fontFamily: 'serif',
        },

        sansSerif: {
            fontFamily: 'sans-serif',
        },

        widgetSpacing: {
            marginLeft: '7px',
            marginTop: '0px',
        },

        articleText: {
            lineHeight: 1.25
        },

        articleTextGutter: {
            marginBottom: '33px',
        },

        articleSectionGutter: {
            paddingBottom: '12px',
        },
        slightlySmaller: {
            width: '98%',
            marginLeft: '1%',
        },
        forListIndent: {
            width: '92%',
            marginLeft: '4%'
        }// if you want to indent for a list
    }
));

export interface ArticleComponentProps extends TypographyProps {
    noGutter?: boolean
}

export interface TitleProps extends ArticleComponentProps {
    smaller?: boolean,
}

export interface ArticleTextProps extends TypographyProps {
    kind?: 'default' | 'forListIndent'
}

export interface ArticleSectionProps extends TypographyProps {
    kind?: 'default' | 'noGutter'
}

export const Title = ({smaller, children, noGutter}: TitleProps) => {

    const variant = smaller ? 'h2' : 'h1';
    const c = useStyles();

    return (
        <Typography
            variant={variant}
            className={clsx(c.serif, !noGutter && c.titleGutter)}
        >
            {children}<hr className={c.titleDivider}/>
        </Typography>
    );
};

export const ArticleText = ({kind = 'default', children, ...rest}: ArticleTextProps) => {

    const c = useStyles();

    return (
        <Typography
            {...rest}
            variant="body1"
            display="block"
            align="justify"
            className={clsx(
                c.sansSerif,
                c.articleText,
                kind == 'default' && c.slightlySmaller,
                (kind == 'default' || kind == 'forListIndent') && c.articleTextGutter,
                kind == 'forListIndent' && c.forListIndent
            )}
        >
            {children}
        </Typography>
    );
};

export const ArticleSection = ({kind = 'default', children, ...rest}: ArticleSectionProps) => {
    const c = useStyles();
    return (
        <Typography
            {...rest}
            variant="h3"
            className={clsx(
                c.serif,
                kind == 'default' && c.articleSectionGutter,
                c.slightlySmaller,
            )}>
            {children}
        </Typography>
    );
};

export const SmallBodyText = ({children, ...rest}: TypographyProps) => {

    const c = useStyles();

    return (
        <Typography
            {...rest}
            variant="body2"
            className={clsx(
                c.sansSerif,
                c.articleTextGutter,
                c.slightlySmaller
            )}>
            {children}
        </Typography>
    );
};