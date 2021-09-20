import WidgetBase from './WidgetBase.js';
import {
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => (
  {
    serif: {
      fontFamily: 'serif',
    },

    h4: {
      marginLeft: '7px',
      paddingTop: '9px',
      marginBottom: '13px',
    },

    body: {
      marginLeft: '17px',
    },

    thirty: {
      width: '50%',
    },
  }
));

const ArticleIndex = props => {
  const c = useStyles();

  return (
    <WidgetBase>
      <Box component="div" className={clsx(c.h4)}>
        <Typography variant="h5" className={clsx(c.serif)}>
          Practical Articles
        </Typography>
      </Box>
      <Box component="div" display="flex" flexDirection="row" flexWrap="wrap">
        <Box component="div" className={c.thirty}>
          <Typography variant="body2" className={c.body}>
            The Evolutionary Origins of Truth
          </Typography>
        </Box>
        <Box component="div" className={c.thirty}>
          <Typography variant="body2" className={c.body}>
            The Evolutionary Origins of Truth
          </Typography>
        </Box>
        <Box component="div" className={c.thirty}>
          <Typography variant="body2" className={c.body}>
            The Virus of Progress
          </Typography>
        </Box>
        <Box component="div" className={c.thirty}>
          <Typography variant="body2" className={c.body}>
            Speculation on God no.2
          </Typography>
        </Box>
        <Box component="div" className={c.thirty}>
          <Typography variant="body2" className={c.body}>
            The True Motivations of Business
          </Typography>
        </Box>
        <Box component="div" className={c.thirty}>
          <Typography variant="body2" className={c.body}>
            Scientific Theories as Truth
          </Typography>
        </Box>
      </Box>
    </WidgetBase>
  );
};

export default ArticleIndex;
