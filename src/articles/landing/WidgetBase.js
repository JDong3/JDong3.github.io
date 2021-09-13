import {
  Paper,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => (
  {
    unfocused: {
      opacity: '40%',
    },

    bottomGap: {
      marginBottom: '11px',
    }
  }
));

const WidgetBase = (props) => {
  const c = useStyles();
  const {
    children,
    focused,
    gap,
  } = props;
  return (
    <Paper elevation={focused ? 1 : 1} className={clsx(!focused && c.unfocused, gap && c.bottomGap)}>
      {children}
    </Paper>
  );
};

export default WidgetBase;
