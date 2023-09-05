import {
    Container,
    makeStyles,
} from '@material-ui/core';
import { ReactNode } from 'react';

const useStyles = makeStyles(() => (
    {
        spacingFromTop: {
            marginTop: '40px',
            marginBottom: '40px',
        },
        slightlySmaller: {
            width: '90%',
            marginLeft: '5%',
        },
        minHeight: {
            // minHeight: '90vh',
        },
    }
));

interface BassProps {
    children: NonNullable<ReactNode>
}

/**
 * base container for articles i think
 */
const Bass = ({children}: BassProps) => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={`${classes.spacingFromTop} ${classes.minHeight}`}>
            <Container className={classes.slightlySmaller}>
                {children}
            </Container>
        </Container>
    );
};

export default Bass;
