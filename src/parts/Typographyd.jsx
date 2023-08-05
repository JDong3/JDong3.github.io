/**
 * reuseable derivatives of the Typography class from material-ui
 */
import {
    makeStyles,
    Typography,
    Box,
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

const Title = props => {
    const {
        smaller,
        children,
        serif,
        noGutter,
    } = props;
    const variant = smaller ? 'h2' : 'h1';
    const c = useStyles();

    const theme = clsx(serif && c.serif, !serif && c.sansSerif, !noGutter && c.titleGutter);
    return (
        <Typography variant={variant} className={theme}>
            {children}<hr className={c.titleDivider}/>
        </Typography>
    );
};

const WidgetTitle = props => {
    const {children, spacing} = props;
    const c = useStyles();
    const theme = clsx(c.serif, spacing && c.widgetSpacing);

    return (
        <Typography variant="h4" className={c.serif}>
            <Box component={span} className={clsx(spacing && c.widgetSpacing)}>
                {children}
            </Box>
        </Typography>
    );
};

const WidgetText = props => {
    const {children, className} = props;
    const c = useStyles();
    return (
        <Typography {...props} variant="h5" className={clsx(c.serif, className)}>
            {children}
        </Typography>
    );
};

const ArticleText = props => {
    const {
        children,
        className,
        gutter,
        slightlySmaller,
        forListIndent,
    } = props;
    const c = useStyles();

    return (
        <Typography {...props} variant="body1" display="block" align="justify" className={clsx(c.sansSerif, c.articleText, slightlySmaller && c.slightlySmaller, gutter && c.articleTextGutter, forListIndent && c.forListIndent, className)}>
            {children}

        </Typography>
    );
};

const Text = props => {
    const {
        children,
        className,
    } = props;
    const c = useStyles();

    return (
        <Typography {...props} display="block" align="justify" className={clsx(c.serif, c.articleText, c.slightlySmaller, c.articleTextGutter, className)}>
            {children}
        </Typography>
    );
};

const ArticleSection = props => {
    const c = useStyles();
    const {
        children,
        className,
        gutter,
        slightlySmaller,
    } = props;
    return (
        <Typography {...props} variant="h3" className={clsx(c.serif, gutter && c.articleSectionGutter, c.slightlySmaller, className)}>
            {children}
        </Typography>
    );
};

const ArticleSubSection = props => {
    const c = useStyles();
    const {
        children,
        className,
        gutter,
        slightlySmaller,
    } = props;
    return (
        <Typography {...props} variant="h4" className={clsx(c.serif, gutter && c.articleSectionGutter, c.slightlySmaller, className)}>
            {children}
        </Typography>
    );
};

const Section = props => {
    const c = useStyles();
    const {
        children,
        className,
    } = props;
    return (
        <Typography {...props} variant="h4" className={clsx(c.serif, c.articleSectionGutter, c.slightlySmaller, className)}>
            {children}
        </Typography>
    );
};

const SmallBodyText = props => {
    const {
        children,
        className,
        gutter,
        serif,
        slightlySmaller,
    } = props;
    const c = useStyles();

    return (
        <Typography {...props} variant="body2" className={clsx(serif && c.serif, c.sansSerif, className, gutter && c.articleTextGutter, slightlySmaller && c.slightlySmaller)}>
            {children}
        </Typography>
    );
};

export default {
    Title,
    WidgetTitle,
    WidgetText,
    ArticleText,
    Section,
    Text,
    ArticleSection,
    ArticleSubSection,
    SmallBodyText,
};
