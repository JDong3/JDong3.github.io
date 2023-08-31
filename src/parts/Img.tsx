import {
    makeStyles,
} from '@material-ui/core';

import clsx from 'clsx';

/**
 * Custom image object
 */

const useStyles = makeStyles(() => (
    {
        fullImg: {
            width: '95%',
            border: '2px',
            borderColor: 'grey',
            borderStyle: 'solid',
        },

        fullTop: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: '30px',
        },

        fullBottom: {
            width: '95%',
        },

        fullBottomOuter: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            marginBottom: '30px',
        },

        right: {
            float: 'right',
            marginLeft: '18px',
            marginBottom: '18px',
            background: 'white',
        },

        rounded: {
            borderRadius: '6px',
        },
    }
));

export interface ImgProps extends React.HTMLProps<HTMLImageElement>{
    width: string,
    caption: string,
    type: 'full' | 'right',
    rounded: boolean
}

const Img = ({src, caption, type, width, rounded}: ImgProps) => {

    const classes = useStyles();
    const full = () => (
        <div>
            <div className={classes.fullTop}>
                <img src={src} className={classes.fullImg}></img>
            </div>
            <div className={classes.fullBottomOuter}>
                <div className={classes.fullBottom}><i>{caption}</i></div>
            </div>
        </div>

    );

    width = width || '35%';
    const right = () => {
        let className = classes.right;
        if (rounded) {
            className = clsx(classes.right, classes.rounded);
        }

        return (<img src={src} className={className} style={{width: `${width}`}}/>);
    };

    return (
        <div>
            {(type === 'full') && full()}
            {(type === 'right') && right()}
        </div>

    );
};

export default Img;
