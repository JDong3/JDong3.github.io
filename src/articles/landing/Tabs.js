import {
  makeStyles,
  Box,
} from '@material-ui/core';
import {
  ty,
} from '../../colorful-text';
import clsx from 'clsx';
const useStyles = makeStyles(() => (
  {
    slightlySmaller: {
      width: '98%',
      marginLeft: '1%',
    },

    deSelected: {
      opacity: '40%',
      // color: 'red',
    }
  }
));

const Tabs = props => {

  // const {selected} = props;
  const selected = 0;
  const c = useStyles();

  const eq = (n, i) => {
    const res = n%4 === i;
    // console.log(res);
    // console.log(clsx(c.deSelected));
    return res;
  };

  return (
    <Box component="div" className={c.slightlySmaller} display="flex" flexDirection="row" justifyContent="space-evenly">
      <ty.WidgetText className={clsx(!eq(selected, 0) && c.deSelected)}>
        Articles
      </ty.WidgetText>
      <ty.WidgetText className={clsx(!eq(selected, 1) && c.deSelected)}>
        Gallery
      </ty.WidgetText>
      <ty.WidgetText className={clsx(!eq(selected, 2) && c.deSelected)}>
        Colors
      </ty.WidgetText>
      <ty.WidgetText className={clsx(!eq(selected, 3) && c.deSelected)}>
        Investments
      </ty.WidgetText>
    </Box>
  );
};

export default Tabs;
