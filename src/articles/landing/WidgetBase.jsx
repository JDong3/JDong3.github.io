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
        },

        slightlySmaller: {
            width: '98%',
            marginLeft: '1%',
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
        <Paper elevation={3} className={clsx(gap && c.bottomGap, c.slightlySmaller)}>
            {children}
        </Paper>
    );
};

export default WidgetBase;
