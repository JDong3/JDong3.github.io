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
import WidgetBase from './WidgetBase.js';
import {
  useState,
} from 'react';
import bees from './assets/bees.png';
import ep2 from './assets/EP_002.png';
import farm3 from './assets/farm3.png';
import farm4 from './assets/farm4.png';
import gono2 from './assets/gono2.png';
import hahn from './assets/hahn.png';
import hk2 from './assets/hk2.png';
import kindablue from './assets/kindablue.jpg';
import mourningDove from './assets/mourning-dove.png';
import socrates from './assets/socrates.png';

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
    },
    image: {
      width: '40%',
      marginLeft: '30%',
      marginBottom: '21px',
    }
  }
));
const Gallery = props => {

  const [imageIndex, setImageIndex] = useState(0);
  const {focus} = props;
  const c = useStyles();
  // import bees from './assets/bees.png';
  // import ep2 from './assets/EP_002.png';
  // import farm3 from './assets/farm3.png';
  // import farm4 from './assets/farm4.png';
  // import gono2 from './assets/gono2.png';
  // import hahn from './assets/hahn.png';
  // import hk2 from './assets/hk2.png';
  // import kindablue from './assets/kindablue.jpg';
  // import mourningDove from './assets/mourning-dove.png';
  // import socrates from './assets/socrates.png';
  const images = [
    bees,
    ep2,
    mourningDove,
    farm3,
    farm4,
    gono2,
    hahn,
    hk2,
    kindablue,
    mourningDove,
    socrates,
  ];
  const renderNumber = (number, i) => {
    return (
      <Typography key={i} variant="h5" display="inline" className={clsx(c.serif, i!==0 && c.unfocused)}>
        {i}&nbsp;
      </Typography>
    );
  };

  return (
    <WidgetBase>
      <Box component="div" display="flex" flexDirection="row" justifyContent="space-evenly">
        <Box component="span" className={c.buttonRow}>
          {Array(10).fill(0).map(renderNumber)}
        </Box>
      </Box>
      <img src={images[imageIndex]} className={c.image}/>
    </WidgetBase>
  );
};

export default Gallery;
