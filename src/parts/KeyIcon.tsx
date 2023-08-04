import aIcon from '../assets/keyicons/16px/CapitalLetters1.png';
import bIcon from '../assets/keyicons/16px/CapitalLetters2.png';
import cIcon from '../assets/keyicons/16px/CapitalLetters3.png';
import dIcon from '../assets/keyicons/16px/CapitalLetters4.png';
import eIcon from '../assets/keyicons/16px/CapitalLetters5.png';
import fIcon from '../assets/keyicons/16px/CapitalLetters6.png';
import gIcon from '../assets/keyicons/16px/CapitalLetters7.png';
import hIcon from '../assets/keyicons/16px/CapitalLetters8.png';
import iIcon from '../assets/keyicons/16px/CapitalLetters9.png';
import jIcon from '../assets/keyicons/16px/CapitalLetters10.png';
import kIcon from '../assets/keyicons/16px/CapitalLetters11.png';
import lIcon from '../assets/keyicons/16px/CapitalLetters12.png';
import mIcon from '../assets/keyicons/16px/CapitalLetters13.png';
import nIcon from '../assets/keyicons/16px/CapitalLetters14.png';
import oIcon from '../assets/keyicons/16px/CapitalLetters15.png';
import pIcon from '../assets/keyicons/16px/CapitalLetters16.png';
import qIcon from '../assets/keyicons/16px/CapitalLetters17.png';
import rIcon from '../assets/keyicons/16px/CapitalLetters18.png';
import sIcon from '../assets/keyicons/16px/CapitalLetters19.png';
import tIcon from '../assets/keyicons/16px/CapitalLetters20.png';
import uIcon from '../assets/keyicons/16px/CapitalLetters21.png';
import vIcon from '../assets/keyicons/16px/CapitalLetters22.png';
import wIcon from '../assets/keyicons/16px/CapitalLetters23.png';
import xIcon from '../assets/keyicons/16px/CapitalLetters24.png';
import yIcon from '../assets/keyicons/16px/CapitalLetters25.png';
import zIcon from '../assets/keyicons/16px/CapitalLetters26.png';
import enterIcon from '../assets/keyicons/16px/Enter.png';

import {
    makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

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

interface KeyIconProps {
    symbol: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | 'enter'
}

const KeyIcon = ({symbol}: KeyIconProps) => {
    const c = useStyles();
    let src = aIcon;

    switch (symbol) {
    case 'a':
        src = aIcon;
        break;
    case 'b':
        src = bIcon;
        break;
    case 'c':
        src = cIcon;
        break;
    case 'd':
        src = dIcon;
        break;
    case 'e':
        src = eIcon;
        break;
    case 'f':
        src = fIcon;
        break;
    case 'g':
        src = gIcon;
        break;
    case 'h':
        src = hIcon;
        break;
    case 'i':
        src = iIcon;
        break;
    case 'j':
        src = jIcon;
        break;
    case 'k':
        src = kIcon;
        break;
    case 'l':
        src = lIcon;
        break;
    case 'm':
        src = mIcon;
        break;
    case 'n':
        src = nIcon;
        break;
    case 'o':
        src = oIcon;
        break;
    case 'p':
        src = pIcon;
        break;
    case 'q':
        src = qIcon;
        break;
    case 'r':
        src = rIcon;
        break;
    case 's':
        src = sIcon;
        break;
    case 't':
        src = tIcon;
        break;
    case 'u':
        src = uIcon;
        break;
    case 'v':
        src = vIcon;
        break;
    case 'w':
        src = wIcon;
        break;
    case 'x':
        src = xIcon;
        break;
    case 'y':
        src = yIcon;
        break;
    case 'z':
        src = zIcon;
        break;
    case 'enter':
        src = enterIcon;
        break;
    }
    return <img src={src} className={clsx(c.icon, c.imgDisplay, c.rightGutter)}/>;
};

export default KeyIcon;