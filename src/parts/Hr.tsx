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

interface HrProps {
    type: 1 | 2 | 3
}

/**
 * Custom horizontal rule that inherits color
 */
const Hr = ({type}: HrProps) => {
    /**
     * :param props.type: int, 1 or 2, 1 is full length, 2 is right truncated by 15px
     */

    const classes = useStyles();
    let classname = '';
    if (type === 2) {
        classname = classes.type2;
    } else if (type === 3) {
        classname = classes.type3;
    } else {
        classname = classes.type1;
    }

    return (
        <Text><hr className={classname}/></Text>
    );
};

export default Hr;
