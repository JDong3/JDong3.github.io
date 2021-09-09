import {
  Paper,
  Box,
  makeStyles,
} from '@material-ui/core';
import {
  Text,
  ty,
} from '../../colorful-text';
import clsx from 'clsx';

const useStyles = makeStyles(() => (
  {
    commonText: {
      marginTop: '20px',
      marginBottom: '20px',
      userSelect: 'none',
    },

    deselected: {
      opacity: '40%',
      '&:hover': {
        cursor: 'pointer',
        // textDecoration: 'underline',
      },
    },

    selected: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }
));

const TabSelector = props => {
  const {tab, clickHandlers, focus} = props;
  const c = useStyles();
  return (
    <Paper elevation={focus ? 5 : 1}>
      <Box component="div" display="flex" flexDirection="row" justifyContent="space-evenly">
        <Box component="span">
          <Text onClick={clickHandlers[0]} variant="h4" className={clsx(tab === 0 && c.selected, tab === 1 && c.deselected, c.commonText)} serif>
            Fun Stuff
          </Text>
        </Box>

        <Box component="span">
          <Text onClick={clickHandlers[1]} variant="h4" serif className={clsx(tab === 1 && c.selected, tab === 0 && c.deselected, c.commonText)}>
            Articles
          </Text>
        </Box>
      </Box>
    </Paper>
  );
};

export default TabSelector;
