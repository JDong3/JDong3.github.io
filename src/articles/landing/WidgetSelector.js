import {
  Paper,
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';
import angle from './assets/angle.png';
import angleFlip from './assets/angle-flip.png';
import {widgetsList} from './enums.js';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {
  widgetGoLeft,
  widgetGoRight,
} from '../../redux/actions.js';
import {J, K} from './Keys.js';

const useStyles = makeStyles(() => (
  {
    thirty: {
      width: '33.3%',
    },

    textAngle: {
      height: '0.63em',
      marginLeft: '15px',
      marginRight: '15px',
    },

    selectorSpacing: {
      marginTop: '30px',
      marginBottom: '45px',
    },

    text: {
      fontFamily: 'serif',

    }
  }
));

const WidgetSelector = props => {
  const c = useStyles();

  const {
    selected,
    widgetGoLeft,
    widgetGoRight,
  } = props;

  const handleKeys = (e) => {
    console.log(e.key);
    switch (e.key) {

    case 'j':
      widgetGoLeft();
      break;

    case 'k':
      widgetGoRight();
      break;

    default:
      break;
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleKeys, true);
    return () => {
      document.removeEventListener('keypress', handleKeys, true);
    };
  });

  return (
    <Box component="div" display="flex" flexDirection="row" className={c.selectorSpacing}>
      <Box component="div" style={{width: '23.33%'}} display="flex" flexDirection="row" justifyContent="left">
        <Typography variant="body2" style={{opacity: '0.7'}}><J/> Go Left, <K/> Go Right</Typography>
      </Box>
      <Box component="div" style={{width: '10%'}} display="flex" flexDirection="row" justifyContent="right">
        <Typography variant="h3">
          <img src={angleFlip} className={c.textAngle}/>
        </Typography>
      </Box>
      <Box component="div" className={c.thirty} display="flex" flexDirection="row" justifyContent="center">
        <Typography variant="h3" className={c.text}>
          {widgetsList[selected]}
        </Typography>
      </Box>
      <Box component="div" className={c.thirty}>
        <Typography variant="h3">
          <img src={angle} className={c.textAngle}/>
        </Typography>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => (
  {
    selected: state.focusedWidget,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    widgetGoLeft: () => dispatch(widgetGoLeft()),
    widgetGoRight: () => dispatch(widgetGoRight()),
  }

);

export default connect(mapStateToProps, mapDispatchToProps)(WidgetSelector);
