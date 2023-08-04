import {
    makeStyles,
    Typography,
    Box,
} from '@material-ui/core';
import clsx from 'clsx';
import {connect} from 'react-redux';
const useStyles = makeStyles(() => (
    {
        boxStyle: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "right"
        },

        slightlySmaller: {
        },

        slightlyTransparent: {
            opacity: '63%',
        },

        spacing: {
            marginLeft: '11px',
            fontFamily: 'serif',
        },

        deSelected: {
            opacity: '40%',
            // color: 'red',
        },
    }
));

const Tabs = props => {

    const {selected} = props;
    const c = useStyles();

    const eq = (n, i) => {
        const res = n%4 === i;
        return res;
    };

    return (
        <Box component="div" className={clsx(c.slightlySmaller, c.slightlyTransparent, c.boxStyle)}>
            <Typography component="span" variant="body1" className={clsx(!eq(selected, 0) && c.deSelected, c.spacing)}>
        Articles
            </Typography>
            <Typography component="span" variant="body1" className={clsx(!eq(selected, 1) && c.deSelected, c.spacing)}>
      Colors
            </Typography>
            <Typography component="span" variant="body1" className={clsx(!eq(selected, 2) && c.deSelected, c.spacing)}>
        Gallery
            </Typography>
            <Typography component="span" variant="body1" className={clsx(!eq(selected, 3) && c.deSelected, c.spacing)}>
        Investments
            </Typography>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        selected: state.focusedWidget,
    };
};

export default connect(mapStateToProps)(Tabs);
