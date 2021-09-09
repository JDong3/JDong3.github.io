import {
  Paper,
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';
import {
  ty
} from '../../colorful-text';
import clsx from 'clsx';

const useStyles = makeStyles(() => (
  {
    serif: {
      fontFamily: 'serif',
    },
    buttonRow: {
      marginTop: '25px',
      marginBottom: '13px',
    },
    unfocused: {
      opacity: '40%',
    }
  }
));
const Gallery = props => {

  const {focus} = props;
  const c = useStyles();
  const renderNumber = (number, i) => {
    return (
      <Typography key={i} variant="h5" display="inline" className={clsx(c.serif, i!==0 && c.unfocused)}>
        {i}&nbsp;
      </Typography>
    );
  };

  return (
    <Paper elevation={focus ? 5 : 1}>
      <Box component="div" display="flex" flexDirection="row" justifyContent="space-evenly">
        <Box component="span" className={c.buttonRow}>
          {Array(10).fill(0).map(renderNumber)}
        </Box>
      </Box>
    </Paper>
  );
};

export default Gallery;
