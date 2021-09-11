import WidgetBase from './WidgetBase.js';
import {
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => (
  {
    dot: {
      width: '25px',
      height: '25px',
      // borderRadius: '50%',
      display: 'inline-block',
    }
  }
));

const Dot = props => {
  const c = useStyles();
  const {
    color
  } = props;

  return (
    <span className={c.dot} style={{backgroundColor: `${color}`}}/>
  );
};

const Slider = props => {
  return (
    <input type="range" min="1" max="100" value="0" className="slider"/>
  );
};


const ColorPicker = props => {
  const {focused} = props;

  return (
    <WidgetBase focused={focused}>
      <div>
        <Slider/>
        <Dot color="red"/>
      </div>
      <div>
        <Slider/>
        <Dot color="green"/>
      </div>
      <div>
        <Slider/>
        <Dot color="blue"/>
      </div>
    </WidgetBase>
  );
};


export default ColorPicker;
