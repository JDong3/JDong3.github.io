import {
    makeStyles,
} from '@material-ui/core';

import Text from './Text.jsx';

const useStyles = makeStyles(() => (
    {
        type1: {
            color: 'inherit',
        },

        type2: {
            color: 'inherit',
            marginRight: '15px',
        },

        type3: {
            color: 'inherit',
            marginRight: '30px',
        },
    }
));

/**
 * Custom horizontal rule that inherits color
 */
const Hr = props => {
    /**
     * :param props.type: int, 1 or 2, 1 is full length, 2 is right truncated by 15px
     */

    const classes = useStyles();
    let type = '';
    if (props.type === 2) {
        type = classes.type2;
    } else if (props.type === 3) {
        type = classes.type3;
    } else {
        type = classes.type1;
    }

    return (
        <Text><hr className={type}/></Text>
    );
};

export default Hr;
