import {
  Paper,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => (
  {
    unfocused: {
      opacity: '40%',
    }
  }
));

const WidgetBase = (props) => {
  const c = useStyles();
  const {
    children,
    focused,
  } = props;
  return (
    <Paper elevation={focused ? 1 : 1} className={clsx(!focused && c.unfocused)}>
      {children}
    </Paper>
  );
};

export default WidgetBase;
