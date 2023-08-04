import WidgetBase from './WidgetBase.jsx';
import {ty} from '../../parts/index.ts';
import {
    Box,
    makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';
import {
    useState,
    useEffect,
} from 'react';

const useStyles = makeStyles(() => (
    {
        swatch: {
            width: '20px',
            height: '20px',
            // borderRadius: '50%',
            display: 'inline-block',
        },

        bigSwatch: {
            width: '100px',
            height: '100px',
        },

        bigSwatchMargin: {
            marginBottom: '-15px',
        },

        left: {
            width: '40%',
            // background: 'lightgrey',
        },

        right: {
            width: '60%',
            // background: 'pink',
        },

        slider: {
            marginRight: '13px',
            width: '169px',
            '&:hover': {

            }
        },

        sliderContainer: {
            marginTop: '44px',
            marginLeft: '54px',
            marginBottom: '44px',
        },
    }
));

const Swatch = props => {
    const c = useStyles();
    const {
        color, big
    } = props;

    return (
        <span className={clsx(c.swatch, big && c.bigSwatch, big && c.bigSwatchMargin)} style={{backgroundColor: `${color}`}}/>
    );
};

const Slider = props => {
    const {
        value,
    } = props;
    const c  = useStyles();
    return (
        <input disabled="disabled" type="range" min="0" max="255" value={value} className={c.slider}/>
    );
};

const ColorPicker = props => {
    const {
    } = props;
    // r, g, b are ints in range 0 to 255

    const [r, setR] = useState(120);
    const [g, setG] = useState(180);
    const [b, setB] = useState(200);

    const c = useStyles();
    const convert = (dec) => {
        let res = '';
        if (dec < 16) {
            res += '0';
        }
        res += dec.toString(16);
        return res;
    };

    const rHex = convert(r);
    const gHex = convert(g);
    const bHex = convert(b);

    const handleKeys = (e) => {
        const inc = 7;

        if (e.key === 'q') {
            setR(Math.max(0, r - inc));
        } else if (e.key === 'e') {
            setR(Math.min(255, r + inc));
        } else if (e.key === 'a') {
            setG(Math.max(0, g - inc));
        } else if (e.key === 'd') {
            setG(Math.min(255, g + inc));
        } else if (e.key === 'z') {
            setB(Math.max(0, b - inc));
        } else if (e.key === 'c') {
            setB(Math.min(255, b + inc));
        }
    };

    useEffect(() => {
        document.addEventListener('keypress', handleKeys, true);
        return () => {
            document.removeEventListener('keypress', handleKeys, true);
        };
    });

    return (
        <WidgetBase gap>
            <Box component="div" display="flex" flexDirection="row">
                <Box component="div" className={c.left}>
                    <Box component="div" className={c.sliderContainer}>
                        <div>
                            <span>
                            </span>
                            <Slider value={r}/>
                            <Swatch color={`#${rHex}0000`}/>
                        </div>
                        <div>
                            <Slider value={g}/>
                            <Swatch color={`#00${gHex}00`}/>
                        </div>
                        <div>
                            <Slider value={b}/>
                            <Swatch color={`#0000${bHex}`}/>
                        </div>
                    </Box>
                </Box>
                <Box component="div" display="flex" flexDirection="row" justifyContent="space-evenly" className={c.right}>
                    <Box component="div" display="flex" flexDirection="column" justifyContent="space-evenly">
                        <Swatch big color={`#${rHex}${bHex}${gHex}`}/>
                        <ty.WidgetText style={{marginLeft: '-4%',}} display="inline" align="center">
                            {`#${rHex}${bHex}${gHex}`}
                        </ty.WidgetText>

                    </Box>
                </Box>
            </Box>
        </WidgetBase>
    );
};


export default ColorPicker;
