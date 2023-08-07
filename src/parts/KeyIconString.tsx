/**
 * to easily string together words using individual Key Icons
 */

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import KeyIcon from './KeyIcon';

const useStyles = makeStyles(() => (
    {
        iconSpacing: {
            marginRight: '1px'
        }
    }
));

interface KeyIconChainProps {
    content: string
    size: '16px' | '32px' | '64px'
}

const KeyIconString = ({content: charChain, size}: KeyIconChainProps) => {

    const icons = [];

    for (let i = 0; i < charChain.length; i++) {

        if (charChain[i] == ' ') {
            continue;
        }

        const nextCharIsSpace = i < charChain.length - 1 && charChain[i + 1] == ' ';
        icons.push(<KeyIcon symbol={charChain[i]} size={size} space={nextCharIsSpace}/>);
    }

    return <>
        {[icons]}
    </>;
};

export default KeyIconString;