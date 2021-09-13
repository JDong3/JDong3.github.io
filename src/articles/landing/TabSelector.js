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
import WidgetBase from './WidgetBase.js';

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
  const {tab, clickHandlers, focused} = props;
  const c = useStyles();
  return (
    <WidgetBase focused={focused} gap>
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
    </WidgetBase>
  );
};

export default TabSelector;
