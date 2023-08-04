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
} from '../../redux/actions.ts';
import {J, K} from './Keys.js';
import clsx from 'clsx';

const useStyles = makeStyles(() => (
    {
        boxStyle: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flex: 1
        },
        thirty: {
            width: '33.3%',
        },

        textAngle: {
            height: '0.63em',
            marginLeft: '15px',
            marginRight: '15px',
        },

        selectorSpacing: {
            marginTop: '15px',
            marginBottom: '45px',
        },

        text: {
            fontFamily: 'serif',
            marginLeft: "10px",
            marginRight: "10px",
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
        <>
            <Box component="div" display="flex" flexDirection="row" justifyContent="left">
                <Typography variant="body2" style={{opacity: '0.7'}}><J/> Go Left, <K/> Go Right</Typography>
            </Box>
            <Box component="div" className={clsx(c.selectorSpacing, c.boxStyle)}>
                <Typography variant="h3" onClick={widgetGoLeft}>
                    <img src={angleFlip} className={c.textAngle}/>
                </Typography>
                <Typography variant="h3" className={c.text}>
                    {widgetsList[selected]}
                </Typography>
                <Typography variant="h3" onClick={widgetGoRight}>
                    <img src={angle} className={c.textAngle}/>
                </Typography>
            </Box>
        </>

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
