import WidgetBase from './WidgetBase.js';
import {
  Box,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => (
  {
    swatch: {
      width: '25px',
      height: '25px',
      // borderRadius: '50%',
      display: 'inline-block',
    },

    bigSwatch: {
      width: '100px',
      height: '100px',
    },

    left: {
      width: '40%',
      background: 'lightgrey',
    },

    right: {
      width: '60%',
      background: 'pink',
    },

    slider: {
      '&:hover': {

      }
    },

    sliderContainer: {
      marginTop: '29px',
      marginLeft: '54px',
      marginBottom: '23px',
    },
  }
));

const Swatch = props => {
  const c = useStyles();
  const {
    color, big
  } = props;

  return (
    <span className={clsx(c.swatch, big && c.bigSwatch)} style={{backgroundColor: `${color}`}}/>
  );
};

const Slider = props => {
  const c  = useStyles();
  return (
    <input disabled="disabled" type="range" min="1" max="100" value="0" className={c.slider}/>
  );
};

const ColorPicker = props => {
  const {focused} = props;
  const c = useStyles();

  return (
    <WidgetBase focused={focused} gap>
      <Box component="div" display="flex" flexDirection="row">
        <Box component="div" className={c.left}>
          <Box component="div" className={c.sliderContainer}>
            <div>
              <Slider/>
              <Swatch color="red"/>
            </div>
            <div>
              <Slider/>
              <Swatch color="green"/>
            </div>
            <div>
              <Slider/>
              <Swatch color="blue"/>
            </div>
          </Box>
        </Box>
        <Box component="div" display="flex" flexDirection="row" justifyContent="space-evenly" className={c.right}>
          <Box component="div" display="flex" flexDirection="column" justifyContent="space-evenly">
            <Swatch big color="orange"/>
          </Box>
        </Box>
      </Box>
    </WidgetBase>
  );
};


export default ColorPicker;
