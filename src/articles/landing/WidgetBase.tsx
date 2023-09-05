import {
    Paper,
    makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';
import { ReactNode } from 'react';

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

interface WidgetBaseProps {
    children: ReactNode,
    focused?: boolean,
    gap?: boolean,

}

const WidgetBase = ({children, focused, gap}: WidgetBaseProps) => {
    const c = useStyles();
    focused;

    return (
        <Paper elevation={3} className={clsx(gap && c.bottomGap, c.slightlySmaller)}>
            {children}
        </Paper>
    );
};

export default WidgetBase;
