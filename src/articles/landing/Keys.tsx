/**
 * this file lets us do the key image icons
 */

import j from './assets/J.png';
import k from './assets/K.png';
import w from './assets/W.png';
import a from './assets/A.png';
import s from './assets/S.png';
import d from './assets/D.png';
import enter from './assets/Enter.png';
import {
    makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

interface KeyFactoryProps {
    k: string,
    rightGutter?: boolean,
}

interface KeyProps {
    rightGutter?: boolean,
}

const useStyles = makeStyles(() => (
    {
        icon: {
            height: '1em',
        },

        imgDisplay: {
            display: 'inline',
        },

        rightGutter: {
            marginRight: '1px',
        }
    }
));

const KeyFactory = (props: KeyFactoryProps) => {
    const {
        k,
        rightGutter,
    } = props;
    const c = useStyles();
    return (
        <img src={k} className={clsx(c.icon, c.imgDisplay, rightGutter && c.rightGutter)}/>
    );

};

const J = (props: KeyProps) => <KeyFactory k={j} {...props}/>;
const K = (props: KeyProps) => <KeyFactory k={k} {...props}/>;
const W = (props: KeyProps) => <KeyFactory k={w} {...props}/>;
const A = (props: KeyProps) => <KeyFactory k={a} {...props}/>;
const S = (props: KeyProps) => <KeyFactory k={s} {...props}/>;
const D = (props: KeyProps) => <KeyFactory k={d} {...props}/>;
const Enter = (props: KeyProps) => <KeyFactory k={enter} {...props}/>;

// const W = keyFactory(w);

export {
    J,
    K,

    W,
    A,
    S,
    D,

    Enter,
};
