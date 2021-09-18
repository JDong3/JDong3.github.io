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
  }
));

const Title = props => {
  const {smaller, children, serif, noGutter} = props;
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

export default {
  Title,
  WidgetTitle,
  WidgetText,
};
