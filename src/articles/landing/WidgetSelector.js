import {
  Paper,
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => (
  {
    text: {
      fontFamily: 'serif',

    }
  }
));

const WidgetSelector = props => {
  const c = useStyles();

  return (
    <Box component="div" display="flex" flexDirection="row" justifyContent="space-evenly">
      <Typography variant="h2" className={c.text}>
        Hi Mom
      </Typography>
    </Box>
  );
};

export default WidgetSelector;
